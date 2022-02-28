import headerStyles from "../styles/Header.module.css";
import Button from "./Button";

const Header = () => {
  return (
    <header id="header" className={headerStyles.header}>
      <div className={headerStyles.heading}>
        <h3 className={headerStyles.upper_heading}>Welcome To</h3>
        <h1 className={headerStyles.main_heading}>Mundhra Garden</h1>
        <hr className={headerStyles.hr_line} />
      </div>
      <div className={headerStyles.header_middle}>
        <h1>A Perfect Place To Spend a Quality Time</h1>
        <p className={headerStyles.header_middle_sm}>Book Your Spot Now</p>
      </div>
      <Button text="Book Now" scroll="contact" />
    </header>
  );
};

export default Header;
