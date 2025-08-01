import React from "react";
import { NavLink } from "react-router-dom";
import { navigationItems } from "../../utils/constants";

const Navbar = () => {
  return (
    <nav className="bg-card-bg px-4 lg:px-6 py-4">
      <div className="flex flex-wrap gap-2 lg:space-x-8 lg:gap-0">
        {navigationItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `px-3 lg:px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg lg:rounded-none ${
                isActive
                  ? "text-accent-yellow border-b-2 border-accent-yellow bg-accent-yellow bg-opacity-10 lg:bg-transparent"
                  : "text-primary-text hover:text-accent-yellow hover:bg-accent-yellow hover:bg-opacity-10 lg:hover:bg-transparent"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
