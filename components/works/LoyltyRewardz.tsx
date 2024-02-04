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
        Software Developer{" "}
        <span className="text-textGreen tracking-wide">@Loylty Rewardz</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Oct 2021 - Jan 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed and maintained a highly efficient ASP.NET MVC admin panel
          for managing referral code configurations, reducing the number of
          database round trips required and improving overall API performance.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated with senior developers to design and implement software
          solutions using C#, ASP.NET, and MySQL, while adhering to coding
          standards and best practices.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Participated in code reviews to ensure software quality and stability,
          while identifying areas for improvement.{" "}
        </li> 
      </ul>
    </motion.div>
  );
};

export default LoyltyRewardz;
