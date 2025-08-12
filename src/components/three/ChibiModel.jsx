import React, {
  useRef,
  useState,
  useEffect,
  useMemo,
  useLayoutEffect,
} from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Box3, Vector3, LoopRepeat } from "three";
// Use SkeletonUtils to correctly clone skinned meshes (preserve bones/animations)
import { clone as skeletonClone } from "three/examples/jsm/utils/SkeletonUtils.js";

const ChibiModel = (props) => {
  const group = useRef();
  const [hovered, setHovered] = useState(false);

  const MODEL_URL = "/models/Nanda_Portfolio.glb";
  const { scene, animations } = useGLTF(MODEL_URL);
  const { actions, names } = useAnimations(animations, group);

  // Clone to avoid mutating cached GLTF scene
  const cloned = useMemo(() => skeletonClone(scene), [scene]);

  useEffect(() => {
    // Prefer animation clip named "Nanda" (case-insensitive substring)
    let action;
    if (Array.isArray(names)) {
      const exact = names.find((n) => n === "Nanda");
      const ci = names.find((n) => n?.toLowerCase?.().includes("nanda"));
      const first = names[0];
      const clipName = exact ?? ci ?? first;
      if (clipName) {
        action = actions?.[clipName];
      }
    } else {
      action = actions?.["Nanda"];
    }
    // Stop all actions first to avoid conflicts
    if (actions) {
      Object.values(actions).forEach((a) => {
        if (a && a.isRunning()) a.stop();
      });
    }
    if (action) {
      action.reset();
      action.setLoop(LoopRepeat, Infinity);
      action.clampWhenFinished = false;
      action.enabled = true;
      action.fadeIn(0.2).play();
    }
    return () => {
      if (action) action.fadeOut(0.2).stop();
    };
  }, [actions, names]);

  // Auto-fit model height and center it (robust)
  useLayoutEffect(() => {
    if (!group.current || !cloned) return;

    const fit = () => {
      // Ensure world matrices are up to date before measuring
      cloned.updateMatrixWorld(true);
      group.current.updateMatrixWorld(true);

      const box = new Box3().setFromObject(cloned);
      const size = new Vector3();
      const center = new Vector3();
      box.getSize(size);
      box.getCenter(center);

      // Center the model to origin by shifting its root
      cloned.position.x -= center.x;
      cloned.position.y -= center.y;
      cloned.position.z -= center.z;

      // Determine desired height and compute scale factor
      const desired =
        typeof props.fitHeight === "number" ? props.fitHeight : 2.6;
      let baseScale = size.y > 0 ? desired / size.y : 1;

      // Auto-multiplier for extremely small units (common in GLB exports)
      let autoMultiplier = 1;
      if (size.y > 0 && size.y < 0.01)
        autoMultiplier = 100; // centimeters/meters mismatch
      else if (size.y >= 0.01 && size.y < 0.1) autoMultiplier = 10;

      const userMultiplier =
        typeof props.scaleMultiplier === "number" ? props.scaleMultiplier : 1;

      const finalScale = baseScale * autoMultiplier * userMultiplier;

      // Apply scale directly to the cloned scene
      cloned.scale.setScalar(finalScale);

      // Ensure parent group has neutral transform and is centered
      group.current.scale.setScalar(1);
      group.current.position.set(0, 0, 0);
      group.current.rotation.set(0, 0, 0);
    };

    // Run fit now, on next frame, and shortly after to catch skinned/animated bounds
    fit();
    const raf = requestAnimationFrame(() => fit());
    const timer = setTimeout(() => fit(), 300);
    // Re-run after 1s in case textures/skins update late
    const timer2 = setTimeout(() => fit(), 1000);
    // Re-run on viewport resize to keep centered and scaled
    window.addEventListener("resize", fit);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      clearTimeout(timer2);
      window.removeEventListener("resize", fit);
    };
  }, [cloned, props.fitHeight, props.scaleMultiplier]);

  useFrame((state, delta) => {
    if (group.current) {
      // Continuous Y-axis rotation
      group.current.rotation.y += delta * 0.5;

      // Hover bobbing effect
      if (hovered) {
        group.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
      }
    }
  });

  return (
    <group
      ref={group}
      {...props}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      dispose={null}
    >
      <primitive object={cloned} />
    </group>
  );
};

// Preload the model (when we have an actual GLB file)
useGLTF.preload("/models/Nanda_Portfolio.glb");

export default ChibiModel;
