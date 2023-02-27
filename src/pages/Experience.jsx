import React, { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { experienceKey } from "../config/localstorageKeys";
import ROUTES from "../config/ROUTES";
import InputC from "../components/InputC";
import Resume from "../components/Resume";
import { clearAllData } from "../functions/clearAllData";
import { useFormik } from "formik";
import { experienceV } from "../validations/experienceV";
import {
  getValuesFromLocalStorage,
  saveValuesToLocalStorage,
} from "../functions/valuesUpdatingF";
import arrow from "../assets/arrow.svg";
import valid from "../assets/valid.svg";
import invalid from "../assets/invalid.svg";

function Experience() {
  const navigate = useNavigate();
  const {
    personalInformation,
    educationInformation,
    setExperienceInformation,
  } = useContext(AppContext);

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: getValuesFromLocalStorage(experienceKey, {
        position: "",
        employer: "",
        startDate: "",
        endDate: "",
        aboutJob: "",
      }),
      validationSchema: experienceV,
      onSubmit: () => {
        setExperienceInformation(values);
        navigate(`/${ROUTES.EDUCATION}`);
      },
    });
  useEffect(() => {
    saveValuesToLocalStorage(values, experienceKey);
  }, [values]);
  return (
    <section className="flex">
      <Link to={`${ROUTES.GETSTARTED}`}>
        <img
          onClick={clearAllData}
          src={arrow}
          alt="arrow"
          className="absolute top-[45px] left-[48px] z-40 p-3"
        />
      </Link>
      <section className="relative  min-w-[1098px] bg-main-bluelight px-[150px] pt-[47px]">
        <div className="mb-[50px] flex justify-between border-b-[1px] border-black pb-3">
          <h1 className="text-h17">გამოცდილება</h1>
          <h1 className="text-gb1">2/3</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <InputC
              divClass="mb-[30px]"
              labelText="თანამდებობა"
              placeholder="დეველოპერი, დიზაინერი, ა.შ."
              id="position"
              pText="მინიმუმ 2 სიმბოლო"
              value={values.position}
              onChange={handleChange}
              onBlur={handleBlur("position")}
              touched={touched.position}
              error={errors.position}
            />
            <InputC
              divClass="mb-[30px]"
              labelText="დამსაქმებელი"
              placeholder="დამსაქმებელი"
              id="employer"
              pText="მინიმუმ 2 სიმბოლო"
              value={values.employer}
              onChange={handleChange}
              onBlur={handleBlur("employer")}
              touched={touched.employer}
              error={errors.employer}
            />
            <div className="mb-8 flex w-full justify-between">
              <InputC
                divClass="mb-8 mr-[56px]"
                labelText="დაწყების რიცხვი"
                placeholder="anzorr666@redberry.ge"
                id="startDate"
                inputType="date"
                value={values.startDate}
                onChange={handleChange}
                onBlur={handleBlur("startDate")}
                touched={touched.startDate}
                error={errors.startDate}
                isDateInput={true}
              />
              <InputC
                divClass="mb-8"
                labelText="დამთავრების რიცხვი"
                placeholder="+995 551 12 34 56"
                id="endDate"
                inputType="date"
                value={values.endDate}
                onChange={handleChange}
                onBlur={handleBlur("endDate")}
                touched={touched.endDate}
                error={errors.endDate}
                isDateInput={true}
              />
            </div>
            <div className="relative mb-[45px] flex flex-col border-b-[1px] border-main-gray2 pb-[58px]">
              <label
                className={`mb-2 text-lb ${
                  touched.aboutJob && errors.aboutJob
                    ? " text-main-invalid"
                    : "text-black"
                }`}
                htmlFor="aboutJob"
              >
                აღწერა
              </label>
              <textarea
                className="h-[103px] w-full rounded-[4px] py-[13px] px-4 text-lbp"
                name="aboutJob"
                id="aboutJob"
                placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                value={values.aboutJob}
                onChange={handleChange}
                onBlur={handleBlur("aboutJob")}
              ></textarea>
              <img
                src={invalid}
                alt="nwnw"
                className={`absolute right-[-30px] top-[47px] ${
                  touched.aboutJob && !!errors.aboutJob ? "" : "hidden"
                }`}
              />
              <img
                src={valid}
                alt="nwnw"
                className={`absolute top-[40px] right-[5px]
           ${touched.aboutJob && !errors.aboutJob ? "" : "hidden"}`}
              />
            </div>
            <div className="mt-[115px] mb-[119px] pb-10">
              <button
                className="float-right rounded-[4px] bg-main-purple py-[14px] px-10 text-ne text-white"
                type="submit"
              >
                შემდეგი
              </button>
              <button
                className="rounded-[4px] bg-main-purple py-[14px] px-10 text-ne text-white"
                onClick={() => {
                  navigate(`/${ROUTES.PERSONAL}`);
                }}
              >
                უკან
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
        experience={values}
        education={educationInformation}
        border={false}
      />
    </section>
  );
}

export default Experience;
