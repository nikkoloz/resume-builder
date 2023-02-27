import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { AppContext } from "../context/AppContext";
import ROUTES from "../config/ROUTES";
import InputC from "../components/InputC";
import Resume from "../components/Resume";
import { clearAllData } from "../functions/clearAllData";
import { educationV } from "../validations/educationV";
import {
  saveValuesToLocalStorage,
  getValuesFromLocalStorage,
} from "../functions/valuesUpdatingF";
import { educationKey } from "../config/localstorageKeys";
import { postCV } from "../http/postData";
import { convertImgToFile } from "../functions/convertImgToFile";
import { resumeData } from "../functions/resumeData";
import { formatToFormData } from "../functions/formatToFormData";
import arrow from "../assets/arrow.svg";
import invalid from "../assets/invalid.svg";
import valid from "../assets/valid.svg";

function Education() {
  const navigate = useNavigate();
  const {
    options,
    personalInformation,
    experienceInformation,
    setResivedResume,
    resivedResume,
  } = useContext(AppContext);
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: getValuesFromLocalStorage(educationKey, {
        school: "",
        degree: "",
        educationDate: "",
        aboutSchool: "",
      }),
      validationSchema: educationV,
      onSubmit: () => {
        const imageAsFile = convertImgToFile(
          personalInformation,
          personalInformation.image
        );
        const cv = resumeData(
          personalInformation,
          experienceInformation,
          values,
          imageAsFile,
          options
        );
        const formData = formatToFormData(cv);
        postCV(formData).then((res) => {
          console.log(res);
          setResivedResume(res);
        });
        clearAllData();
        navigate(`/${ROUTES.CV}`);
        console.log(resivedResume);
      },
    });

  useEffect(() => {
    saveValuesToLocalStorage(values, educationKey);
  }, [values]);

  return (
    <section className="flex ">
      <Link to={`${ROUTES.GETSTARTED}`}>
        <img
          onClick={clearAllData}
          src={arrow}
          alt="arrow"
          className="absolute top-[45px] left-[48px] z-40 p-3"
        />
      </Link>
      <section className="relative  min-w-[1098px] bg-main-bluelight px-[150px] pt-[47px] ">
        <div className="mb-[50px] flex justify-between border-b-[1px] border-black pb-3">
          <h1 className="text-h17">განათლება</h1>
          <h1 className="text-gb1">3/3</h1>
        </div>
        <div className="">
          <form onSubmit={handleSubmit}>
            <InputC
              divClass="mb-[30px]"
              labelText="სასწავლებელი"
              placeholder="სასწავლებელი"
              id="school"
              pText="მინიმუმ 2 სიმბოლო"
              value={values.school}
              onChange={handleChange}
              onBlur={handleBlur("school")}
              touched={touched.school}
              error={errors.school}
            />
            <div className=" flex w-full justify-between">
              <div className={`relative mr-[56px] flex w-full flex-col `}>
                <label className="mb-2 text-lb" htmlFor="degree">
                  ხარისხი
                </label>
                <select
                  name="degree"
                  id="degree"
                  className="w-full rounded-[4px] border-[1px] border-main-gray3 bg-white px-4 py-[14px] text-lbp focus:shadow-none focus:outline-2"
                  value={values.degree}
                  onChange={handleChange}
                  onBlur={handleBlur("degree")}
                >
                  <option value={"DEFAULT"}>აირჩიეთ ხარისხი</option>
                  {options.map((opt) => {
                    return (
                      <option value={opt.title} key={opt.id}>
                        {opt.title}
                      </option>
                    );
                  })}
                </select>
                <img
                  src={invalid}
                  alt="nwnw"
                  className={`absolute right-[-30px] top-[43px] z-50 ${
                    touched.degree && !!errors.degree ? "" : "hidden"
                  }`}
                />
                <img
                  src={valid}
                  alt="nwnw"
                  className={`absolute right-[-30px] top-[43px] z-50 ${
                    touched.degree && !errors.degree ? "" : "hidden"
                  }`}
                />
                <p className="text-main-invalid">
                  {touched.degree && errors.degree && "Select is required"}
                </p>
              </div>
              <InputC
                divClass="mb-8"
                labelText="დამთავრების რიცხვი"
                id="educationDate"
                inputType="date"
                value={values.educationDate}
                onChange={handleChange}
                onBlur={handleBlur("educationDate")}
                touched={touched.educationDate}
                error={errors.educationDate}
              />
            </div>
            <div className="relative mb-[45px] flex flex-col border-b-[1px] border-main-gray2 pb-[58px]">
              <label
                className={`mb-2 text-lb ${
                  touched.aboutSchool && errors.aboutSchool
                    ? "text-main-invalid"
                    : "text-black"
                }`}
                htmlFor="aboutSchool"
              >
                აღწერა
              </label>
              <textarea
                className={`h-[103px] w-full rounded-[4px] border-[1px] border-main-gray3 py-[13px] px-4 text-lbp ${
                  touched.aboutSchool &&
                  errors.aboutSchool &&
                  "border-main-invalid"
                } ${
                  touched.aboutSchool &&
                  !errors.aboutSchool &&
                  "border-main-valid"
                }`}
                name="aboutSchool"
                id="aboutSchool"
                placeholder="განათლების აღწერა"
                value={values.aboutSchool}
                onChange={handleChange}
                onBlur={handleBlur("aboutSchool")}
              ></textarea>
              <img
                src={invalid}
                alt="nwnw"
                className={`absolute right-[-30px] top-[37px] z-50 ${
                  touched.aboutSchool && !!errors.aboutSchool ? "" : "hidden"
                }`}
              />
              <img
                src={valid}
                alt="nwnw"
                className={`absolute right-[5px] top-[40px] z-50
           ${touched.aboutSchool && !errors.aboutSchool ? "" : "hidden"}`}
              />
            </div>
            <div className="mt-[290px] mb-[162px] pb-10 ">
              <button
                className="float-left rounded-[4px] bg-main-purple py-[14px] px-10 text-ne text-white"
                onClick={() => {
                  navigate(`/${ROUTES.EXPERIENCE}`);
                }}
              >
                უკან
              </button>
              <button
                className="float-right rounded-[4px] bg-main-purple py-[14px] px-10 text-ne text-white"
                type="submit"
              >
                დასრულება
              </button>
            </div>
          </form>
        </div>
      </section>
      <Resume
        name={personalInformation.name}
        surname={personalInformation.surname}
        image={personalInformation.image}
        email={personalInformation.email}
        mobNumber={personalInformation.mobile}
        aboutMe={personalInformation.message}
        experience={experienceInformation}
        education={values}
      />
    </section>
  );
}

export default Education;
