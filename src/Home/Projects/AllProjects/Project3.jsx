import { motion } from "framer-motion";
import Modal from "../../../Components/Modal";
import sportsAcademyHomeImg from "../../../assets/myProjects/PowerPlay-sports-website-home.jpg";

const Project3 = () => {
  const liveSite = "https://powerplay-sports-academy.web.app/";
  const repository = "https://github.com/ajauni01/PowerPlay-Sports-Academy";
  const overlayStyles = `absolute w-full h-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  const projectTitle = "PowerPlay Sports Academy";

  // show the project variant
  const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{projectTitle}</p>
        <Modal
          id="my_modal_3"
          projectTitle={projectTitle}
          repository={repository}
          liveSite={liveSite}
        />
      </div>
      <img src={sportsAcademyHomeImg} alt="" />
    </motion.div>
  );
};
export default Project3;
