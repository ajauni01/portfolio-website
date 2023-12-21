import { motion } from "framer-motion";
import Modal from "../../../Components/Modal";
import IssueTrackerImg from "../../../assets/myProjects/IssueTracker.png";

const Project1 = () => {
  // serverSite Code URL
  const repository = "https://github.com/ajauni01/issue-tracker-updated";
  const liveSite = "https://issue-tracker-updated-5skdfrmuz-ajauni01.vercel.app/∏";

  const overlayStyles = `absolute w-full h-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const projectTitle = "Issue Tracker Website";

  return (
    <>
      <motion.div variants={projectVariant} className="relative">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{projectTitle}</p>
          <Modal
            id="my_modal_1"
            projectTitle={projectTitle}
            repository={repository}
            liveSite={liveSite}
          />
        </div>
        <img src={IssueTrackerImg} alt="" />
      </motion.div>
    </>
  );
};
export default Project1;
