import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <ul>
        <li>
          <a href="https://twitter.com" className="twitter">
            {" "}
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com" className="facebook">
            {" "}
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com" className="linkedin">
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
