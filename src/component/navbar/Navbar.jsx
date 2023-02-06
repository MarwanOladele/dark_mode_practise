import "./Navbar.css";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

const Navbar = ({ isDark, toggleDark }) => {
  return (
    <div className="navbar">
      <h3 className="logo">Marwan</h3>
      <div className="night_dark" onClick={toggleDark}>
        {isDark ? (
          <BedtimeOutlinedIcon />
        ) : (
          <WbSunnyOutlinedIcon style={{ color: "rgb(181, 161, 46)" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
