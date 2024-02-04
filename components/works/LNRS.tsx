import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const LNRS = () => {
    const bulletPoint = (text: string) => (
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          {text}
        </li>
      );
      

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Engineer II{" "}
        <span className="text-textGreen tracking-wide">
          @LexisNexis Risk Solutions
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">Jan 2023 - Present</p>
      <ul className="mt-6 flex flex-col gap-3">
        {[
          "Developed and maintained robust and scalable .NET applications using technologies such as .NET Core and .NET 6.",
          "Collaborated closely with cross-functional teams to gather requirements and translate them into technical solutions.",
          "Designed and implemented efficient database structures using MySQL, optimizing performance and ensuring data integrity.",
          "Contributed to the development of RESTful APIs, enhancing application functionality.",
        ].map((point) => bulletPoint(point))}
      </ul>
    </motion.div>
  );
};

export default LNRS;
