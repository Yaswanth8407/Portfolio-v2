import Education from "./Education";
import AndhraLogo from "../assets/ClgLogos/AndhraSchool.png";
import SiesLogo from "../assets/ClgLogos/SiesLogo.jpg";
import BuntsLogo from "../assets/ClgLogos/BuntsLogo.png";
import { useState } from "react";
import Certificates from "./Certificates";
import TATA_gen_AI from "../assets/Certificates/TATA_gen_AI.png";
import Udemy_HTML_CSS from "../assets/Certificates/Udemy_HTML_CSS.png";

const EducationandCertificates = () => {
  const [toggleCertificate, setToggleCertificate] = useState(false);

  return (
    <div className="w-full h-screen flex items-center justify-center border-b-2 border-[gray]" id="About">
      <div className="wholecont flex gap-3 flex-col items-center">

        {/* Buttons */}
        <div className="btnWrap flex text-xl gap-3 bg-white/10 p-1 rounded-xl backdrop-blur-sm border border-[gray]">
          
          <button
            className={`px-25 py-2 rounded-lg transition-all duration-300 cursor-pointer
            ${
              !toggleCertificate
                ? "bg-white text-black scale-105 mx-2"
                : "hover:bg-white/20 hover:scale-105"
            }`}
            onClick={() => setToggleCertificate(false)}
          >
            Education
          </button>

          <button
            className={`px-25 py-2 rounded-lg transition-all duration-300 cursor-pointer
            ${
              toggleCertificate
                ? "bg-white text-black scale-105 mx-2"
                : "hover:bg-white/20 hover:scale-105"
            }`}
            onClick={() => setToggleCertificate(true)}
          >
            Certificates
          </button>

        </div>

        {/* Container */}
        <div className="displaycont h-fit w-2xl ${togglecertificate && border-2 rounded-md border-[gray]} flex flex-col gap-5 p-5 relative backdrop-blur-s transition-all duration-300 hover:bg-white/15">

          {/* Timeline Line */}
          <div
            className={`absolute left-11 top-0 h-full w-px border border-[gray] transition-all duration-300 ${
              toggleCertificate ? "opacity-0" : "opacity-100"
            }`}
          ></div>

          {!toggleCertificate ? (
            <div className="flex flex-col gap-5 transition-all duration-300">
              <Education
                Logo={BuntsLogo}
                StartDate={"June 2025"}
                EndDate={"Pursuing"}
                ClgName={"Bunts Sangha's Anna Leela College"}
                Course={"B.Sc. in Information Technology"}
              />
              <Education
                Logo={SiesLogo}
                StartDate={"June 2024"}
                EndDate={"March 2025"}
                ClgName={"SIES College of Arts, Science and Commerce"}
                Course={"HSC (12th std) - 64.5%"}
              />
              <Education
                Logo={AndhraLogo}
                StartDate={"June 2022"}
                EndDate={"March 2023"}
                ClgName={"The Andhra Education Society's High School"}
                Course={"SSC (10th std) - 86.6%"}
              />
            </div>
          ) : (
            <div className="flex p-5 gap-5 rounded-4xl transition-all duration-300">
              <Certificates
                Certificate={TATA_gen_AI}
                Title={"HTML and CSS from Beginning to Advanced"}
                CompletionDate={"April 17, 2025"}
              />

              <Certificates
                Certificate={Udemy_HTML_CSS}
                Title={"GenAl Powered Data Analytics Job Simulation"}
                CompletionDate={"September 1st, 2025"}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationandCertificates;