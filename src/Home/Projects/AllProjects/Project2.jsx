import { motion } from "framer-motion";
import Modal from "../../../Components/Modal";
import dallECloneImg from "../../../assets/myProjects/dallEcloneImg.png";

const Project2 = () => {
  const repository = "https://github.com/ajauni01/dall-e-clone";
  const liveSite = "https://dall-e-clone-client-seven.vercel.app/";

  const overlayStyles = `absolute w-full h-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const projectTitle = "Dall-E Clone Website";

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{projectTitle}</p>
        <Modal
          id="my_modal_2"
          projectTitle={projectTitle}
          repository={repository}
          liveSite={liveSite}
        />
      </div>
      <img src={dallECloneImg} alt="" />
    </motion.div>
  );
};
export default Project2;
