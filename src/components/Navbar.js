import AppBar from "@material-ui/core/AppBar";
import StacklineLogo from "../stackline_logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <AppBar position="static">
      <div className="navbar">
        <img src={StacklineLogo} alt="Stackline Logo" className="navbar__img" />
      </div>
    </AppBar>
  );
};

export default Navbar;