import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const LoyltyRewardz = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Subject Matter Expert{" "}
        <span className="text-textGreen tracking-wide">@Bartleby</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Mar 2021 - Oct 2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Provided academic assistance to students worldwide in Engineering
          Mathematics, Data Structures and Algorithms, and Object-Oriented
          Programming as a Subject Matter Expert.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Answered student questions and cleared their doubts with clear and
          concise explanations.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Utilized strong communication skills and attention to detail to ensure
          students received effective academic support.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Contributed to the academic success of students globally while honing
          critical thinking, problem-solving, and analytical skills.
        </li>
      </ul>
    </motion.div>
  );
};

export default LoyltyRewardz;
