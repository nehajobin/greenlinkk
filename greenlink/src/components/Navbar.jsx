import { NavLink, useLocation } from "react-router-dom";
import { FiHome, FiMapPin, FiUser } from "react-icons/fi";

export default function Navbar() {
  const location = useLocation();
  const role = location.state?.role;

  return (
    <div style={styles.nav}>
      
      {/* HOME */}
      <NavLink 
        to="/home" 
        state={{ role }} 
        style={styles.link}
      >
        {({ isActive }) => (
          <FiHome 
            size={22} 
            color={isActive ? "#15803d" : "#6b7280"} 
          />
        )}
      </NavLink>

      {/* CAMPUS */}
      <NavLink 
        to="/campus" 
        state={{ role }} 
        style={styles.link}
      >
        {({ isActive }) => (
          <FiMapPin 
            size={22} 
            color={isActive ? "#15803d" : "#6b7280"} 
          />
        )}
      </NavLink>

      {/* PROFILE */}
      <NavLink 
        to="/profile" 
        state={{ role }} 
        style={styles.link}
      >
        {({ isActive }) => (
          <FiUser 
            size={22} 
            color={isActive ? "#15803d" : "#6b7280"} 
          />
        )}
      </NavLink>

    </div>
  );
}

const styles = {
  nav: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    background: "#ffffff",
    borderTop: "1px solid #e5e7eb",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 100,
  },
  link: {
    textDecoration: "none",
  },
};