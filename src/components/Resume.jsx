import cvLogo from "../assets/cv-logo.svg";
import snail from "../assets/snail.svg";
import tel from "../assets/tel.svg";

function Resume({
  image,
  name,
  surname,
  email,
  mobNumber,
  aboutMe,
  experience,
  education,
  border,
  marginT,
  marginB,
  isCVPage,
}) {
  const isExperience = !!(
    !experience.position &&
    !experience.aboutJob &&
    !experience.employer &&
    !experience.startDate &&
    !experience.endDate
  );
  const isEducation = !!(
    !education.school &&
    !education.degree &&
    !education.educationDate &&
    !education.aboutSchool
  );
  return (
    <section
      className={`relative mx-auto min-h-[950px] max-w-[822px] bg-white pb-32 pl-[80px] pr-[75px] 
      ${marginT && "mt-[54px]"}   
      ${marginB && "mb-[100px]"}   
      ${border && "border-[1px] border-black"}`}
    >
      <div className="flex border-b-[1px] border-main-gray">
        <div className="mt-[68px] mb-5 w-[430px]">
          <h1 className="mb-4 text-ch1 text-main-red">
            {name} {surname}
          </h1>
          <div className="mb-[10px] flex">
            <img
              src={snail}
              alt="snail"
              className={`mr-3 ${!email && "hidden"}`}
            />
            <h6 className=" text-cp text-main-black">{email}</h6>
          </div>
          <div className="mb-[34px] flex">
            <img
              src={tel}
              alt="tel"
              className={`mr-3 ${!mobNumber && "hidden"}`}
            />
            <h6 className="text-cp text-main-black">{mobNumber}</h6>
          </div>
          <h2 className={`mb-4 text-ch2 text-main-red ${!aboutMe && "hidden"}`}>
            ჩემ შესახებ
          </h2>
          <p className="text-base">{aboutMe}</p>
        </div>
        <img
          src={
            isCVPage ? "https://resume.redberryinternship.ge/" + image : image
          }
          alt="avatar"
          className={`mb-[47px] mt-12 h-[246px] w-[246px] rounded-full ${
            !image && "hidden"
          } `}
        />
      </div>
      <div
        className={`border-t-[1px] border-main-gray pt-6 ${
          isExperience && "hidden"
        }`}
      >
        <h1 className="mb-4 text-ch2 text-main-red ">გამოცდილება</h1>
        <div>
          <div className="mb-[7px] flex text-ne text-main-black">
            <h2 className="mr-2">
              {experience.position}
              {experience.position && experience.employer && ","}
            </h2>
            <h2>{experience.employer}</h2>
          </div>
          <h2 className="mb-4 text-main-date" style={{ fontStyle: "italic" }}>
            {isCVPage ? experience.start_date : experience.startDate}
            {experience.start_date && experience.due_date && " - "}
            {experience.startDate && experience.endDate && " - "}
            {isCVPage ? experience.due_date : experience.endDate}
          </h2>
          <p className="mb-8 text-cp2">
            {isCVPage ? experience.description : experience.aboutJob}
          </p>
        </div>
      </div>
      <div
        className={`relative border-t-[1px] border-main-gray pt-6 ${
          isEducation && "hidden"
        }`}
      >
        <h1 className="mb-4 text-ch2 text-main-red ">განათლება</h1>
        <div className="mb-6">
          <div className="flex">
            <h2 className="mr-2">
              {isCVPage ? education.institute : education.school}
              {education.institute && education.degree && ","}
              {education.school && education.degree && ","}
            </h2>
            <h2>{education.degree}</h2>
          </div>
          <h2 className="mb-4 text-main-date" style={{ fontStyle: "italic" }}>
            {isCVPage ? education.due_date : education.educationDate}
          </h2>
          <p className="text-cp2">
            {isCVPage ? education.description : education.aboutSchool}
          </p>
        </div>
      </div>
      <img src={cvLogo} alt="logo" className="absolute bottom-[44px]" />
    </section>
  );
}

export default Resume;
