import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { eMartImg } from "@/public/assets";
import { gaitBio } from "@/public/assets";
import { TbBrandGithub } from "react-icons/tb";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Projects" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
      {/* ProjectOne */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/rishikadhanawade/eDAC-Project"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={eMartImg}
                alt="eMartImg"
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project{" "}
            </p>
            <h3 className="text-2xl font-bold">ECommerce Website</h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              This website has features like product catalog, shopping cart,{" "}
              <span className="text-textGreen">
                payment gateway integration
              </span>
              , and{" "}
              <span className="text-textGreen">
                user authentication and authorization.
              </span>
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>ReactJs</li>
              <li>MySql</li>
              <li>Java</li>
              <li>Spring Boot</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a href="https://github.com/rishikadhanawade/eDAC-Project" className="hover:text-textGreen duration-300">
                <TbBrandGithub/>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/** ProjectTwo */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/rishikadhanawade/Using-Gait-Biometrics-for-surveillance-applications"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={gaitBio}
                alt="gaitBio"
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project{" "}
            </p>
            <h3 className="text-2xl font-bold">GaitGuard: Using Gait Biometrics for Enhanced Surveillance Applications.</h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
            Our project implemented Local-Bottom Network (LB) using <span className="text-textGreen">Pytorch</span> and trained it with <span className="text-textGreen">CASIA-B</span> dataset silhoutte data using <span className="text-textGreen">Adam Optimization technique.</span>
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>PyTorch</li>
              <li>Python</li>
              <li>LBNet</li>
              <li>TensorFlow</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a href="https://github.com/rishikadhanawade/eDAC-Project" className="hover:text-textGreen duration-300">
                <TbBrandGithub/>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Projects;
