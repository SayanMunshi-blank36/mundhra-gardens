import footerStyles from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  const date = new Date();

  return (
    <footer className={footerStyles.footer_main}>
      <p className={footerStyles.footer_upper_txt}>
        Mundhra Garden, Madhyamgram, North 24 Pgs, West Bengal
      </p>
      <p className={footerStyles.footer_lower_txt}>
        Copyright &copy; {date.getFullYear()} Mundhra Garden, Madhyamgram, North
        24 Pgs, West Bengal - All Rights Reserved
      </p>
      <p className={footerStyles.footer_lowest_txt}>Designed and Built by Sayan Munshi</p>
      <Link passHref={true} href="#header">
        <button className={footerStyles.upBtn}>&uarr;</button>
      </Link>
    </footer>
  );
};

export default Footer;
