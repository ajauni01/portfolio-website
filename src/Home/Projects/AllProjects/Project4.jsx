import { motion } from "framer-motion";
import sportsAcademyAdminImg from "../../../assets/myProjects/PowerPlay-sports-website-admin-dashboard.jpg";
import Modal from "../../../Components/Modal";

const Project4 = () => {
  const serverSite = "https://github.com/ajauni01/Sports-Academy-Server-Side";
  const clientSide = "https://github.com/ajauni01/Sports-Academy-Client-Side";
  const liveSite = "https://powerplay-sports-academy.web.app/";
  const overlayStyles = `absolute w-full h-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  const projectTitle = "PowerPlay Sports Academy (Admin)";
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
        id="my_modal_4"
        projectTitle={projectTitle}
        serverSite={serverSite}
        clientSide={clientSide}
        liveSite={liveSite}/>
      </div>
      <img src={sportsAcademyAdminImg} alt="" />
    </motion.div>
  );
};

export default Project4;
