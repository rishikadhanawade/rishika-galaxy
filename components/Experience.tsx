import SectionTitle from "./SectionTitle";
import LoyltyRewardz from "./works/LoyltyRewardz";
import Bartleby from "./works/Bartleby";
import { useState } from "react";

const Experience = () => {
    const[workLoyltyRewardz, setWorkLoyltyRewardz] = useState(true);
    const[workBartleby, setWorkBartleby] = useState(false);

    const handleLoyltyRewardz = () =>{

        setWorkLoyltyRewardz(true);
        setWorkBartleby(false);
    };

    const handleBartleby = () =>{

        setWorkLoyltyRewardz(false);
        setWorkBartleby(true);
    };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Experience" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
            <li onClick={handleLoyltyRewardz} 
            className={`${
              workLoyltyRewardz
              ? "border-l-textGreen text-textGreen" 
              : "border-l-textDark text-textDark" } 
              border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium `}>
            Loylty Rewardz
            </li>
            <li onClick={handleBartleby} className={`${
              workBartleby
              ? "border-l-textGreen text-textGreen" 
              : "border-l-textDark text-textDark" } 
              border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium `}>
            Bartleby
            </li>
        </ul>
        {workLoyltyRewardz&& <LoyltyRewardz/>}
        {workBartleby && <Bartleby/>}
      </div>
    </section>
  );
};

export default Experience;
