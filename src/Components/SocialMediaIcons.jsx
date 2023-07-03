import linkedInImg from "../assets/linkedin.png"
import facebookImg from "../assets/facebook.png"
import { FaGithub } from 'react-icons/fa';


const SocialMediaIcons = () => {

  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      {/* LINKEDIN */}
      <a className="hover:opacity-50 transition duration-500" href="https://www.linkedin.com/in/ajauni01/" target="_blank" rel="noopener noreferrer">
        <img src={linkedInImg} alt="LinkedIn" />
      </a>

      {/* GitHub */}
      <a className="hover:opacity-50 transition duration-500" href="https://github.com/ajauni01" target="_blank" rel="noopener noreferrer">
        <FaGithub className="h-[30px] w-[30px]" />
      </a>

      {/*FACEBOOK  */}
      <a className="hover:opacity-50 transition duration-500" href="https://www.facebook.com/Ajharul11524" target="_blank" rel="noopener noreferrer">
        <img src={facebookImg} alt="LinkedIn" />
      </a>



    </div>
  );
};

export default SocialMediaIcons;
