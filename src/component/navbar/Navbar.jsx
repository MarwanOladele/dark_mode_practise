import "./Navbar.css";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

const Navbar = () => {
  const condition = true;
  return (
    <div className="navbar">
      <h3 className="logo">Marwan</h3>
      <div className="night_dark">
        {condition ? <BedtimeOutlinedIcon /> : <WbSunnyOutlinedIcon />}
      </div>
    </div>
  );
};

export default Navbar;
