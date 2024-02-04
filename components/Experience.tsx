import SectionTitle from "./SectionTitle";
import LNRS from "./works/LNRS";
import LoyltyRewardz from "./works/LoyltyRewardz";
import Bartleby from "./works/Bartleby";
import { useState } from "react";

type WorkType = "LNRS" | "LoyltyRewardz" | "Bartleby";

const Experience = () => {
  const initialWorkState: Record<WorkType, boolean> = {
    LNRS: true,
    LoyltyRewardz: false,
    Bartleby: false,
  };

  const [workState, setWorkState] = useState(initialWorkState);

  const handleWork = (work: WorkType) => {
    const updatedWorkState = { LNRS: false, LoyltyRewardz: false, Bartleby: false, [work]: true };
    setWorkState(updatedWorkState);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Experience" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          {Object.keys(workState).map((work) => (
            <li
              key={work}
              onClick={() => handleWork(work as WorkType)}
              className={`${
                workState[work as WorkType]
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-textDark text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            >
              {work}
            </li>
          ))}
        </ul>
        {workState.LoyltyRewardz && <LoyltyRewardz />}
        {workState.Bartleby && <Bartleby />}
        {workState.LNRS && <LNRS />}
      </div>
    </section>
  );
};

export default Experience;
