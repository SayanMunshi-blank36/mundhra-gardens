import buttonStyles from "../styles/Button.module.css";
import Link from "next/link";

const Button = ({ text, scroll, type }) => {
  return (
    <>
      {scroll ? (
        <Link passHref={true} href={`#${scroll}`}>
          <button className={buttonStyles.btn}>{text}</button>
        </Link>
      ) : (
        <button type={type} className={buttonStyles.btn}>{text}</button>
      )}
    </>
  );
};

export default Button;
