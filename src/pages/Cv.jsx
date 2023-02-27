import arrow from "../assets/arrow.svg";
import X from "../assets/x.svg";
import Resume from "../components/Resume";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ROUTES from "../config/ROUTES";
import { AppContext } from "../context/AppContext";

function Cv() {
  const [showCongrats, setShowCongrats] = useState(true);
  const { resivedResume } = useContext(AppContext);
  return (
    <>
      <Link to={`${ROUTES.GETSTARTED}`}>
        <img
          src={arrow}
          alt="arrow"
          className="absolute top-[45px] left-[48px] p-3"
        />
      </Link>
      {showCongrats && (
        <div className="absolute right-[70px] top-[54px] h-[167px] w-[427px] px-8 pt-10 shadow-custom-shadow">
          <img
            src={X}
            alt="X"
            className="absolute right-[12px] top-[18px] p-4"
            onClick={() => {
              setShowCongrats(false);
            }}
          />
          <h1 className="text-du text-main-black">
            რეზიუმე წარმატებით გაიგზავნა 🎉
          </h1>
        </div>
      )}
      {console.log("თითქმის", resivedResume)}
      <div className="">
        {resivedResume && Object.keys(resivedResume).length !== 0 && (
          <Resume
            name={resivedResume.name}
            surname={resivedResume.surname}
            image={resivedResume.image}
            email={resivedResume.email}
            mobNumber={resivedResume.phone_number}
            aboutMe={resivedResume.about_me}
            experience={resivedResume.experiences[0]}
            education={resivedResume.educations[0]}
            border={true}
            marginT={true}
            marginB={true}
            isCVPage={true}
          />
        )}
      </div>
    </>
  );
}

export default Cv;
