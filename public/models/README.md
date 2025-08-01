# 3D Models Directory

This directory contains 3D model files for the portfolio website.

## Current Models

- `chibi_character.glb` - Placeholder for the main character model (to be added)

## Model Requirements

- Format: GLB (preferred) or GLTF
- Size: Optimized for web (< 5MB recommended)
- Compression: Use Draco compression when possible
- Textures: Embedded or in same directory

## Adding New Models

1. Place GLB/GLTF files in this directory
2. Update the model path in `src/components/three/ChibiModel.jsx`
3. Test loading and performance

## Placeholder

Currently using a simple geometric placeholder in the ChibiModel component.
Replace with actual character model when available.
