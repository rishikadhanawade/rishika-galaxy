import { profileImg } from "@/public/assets";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            I am a software developer with a strong passion for creating
            efficient and innovative solutions. I have completed my BE in{" "}
            <span className="text-textGreen">
              Electronics and Telecommunication Engineering
            </span>{" "}
            from{" "}
            <span className="text-textGreen">
              Xavier Institute of Engineering
            </span>{" "}
            and PGDAC from CDAC. My technical expertise includes ASP.NET, C#,
            and MySQL, and I also have a fundamental understanding of web
            development technologies such as HTML, CSS, and JavaScript.
          </p>
          <p>
            Currently, I work as a junior software developer at{" "}
            <span className="text-textGreen">Loylty Rewardz</span>, where I am
            responsible for developing and implementing software solutions that
            meet the needs of clients. I work closely with senior developers to
            design and implement high-quality, efficient code that delivers
            outstanding results.
          </p>
          <p>
            I have a strong desire to continuously improve my skills and
            knowledge in the field. I stay up-to-date with the latest trends and
            best practices in the industry and actively participate in the
            development community.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              .NET WEB Api
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              .NET Core
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              WCF
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              .NET MVC
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Java 8
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MySQL
            </li>
          </ul>
        </div>

        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>

      </div>
    </section>
  );
};

export default About;
