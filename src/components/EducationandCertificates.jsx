import Education from "./Education";
import AndhraLogo from "../assets/ClgLogos/AndhraSchool.png";
import SiesLogo from "../assets/ClgLogos/SiesLogo.jpg";
import BuntsLogo from "../assets/ClgLogos/BuntsLogo.png";
import { useState } from "react";
import Certificates from "./Certificates";

const EducationandCertificates = () => {
  const [toggleCertificate, setToggleCertificate] = useState(false);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="wholecont flex gap-3 flex-col items-center">
        <div className="btnWrap flex text-xl">
          <button
            className="px-40 py-1 flex rounded-md"
            onClick={() => setToggleCertificate(false)}
          >
            Education
          </button>

          <button
            className="px-40 py-1 flex rounded-md"
            onClick={() => setToggleCertificate(true)}
          >
            Certificates
          </button>
        </div>

        <div className="displaycont h-fit w-2xl border rounded-md flex flex-col gap-5 p-5 relative">
          <div
            className={`absolute left-11 top-0 h-full w-px border ${
              toggleCertificate ? "opacity-0" : "opacity-100"
            }`}
          ></div>

          {!toggleCertificate ? (
            <>
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
            </>
          ) : (
            <Certificates />
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationandCertificates;
