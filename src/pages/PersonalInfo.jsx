import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { personalInfoV } from "../validations/personalInfoV";
import { imageHandler } from "../functions/imageHandler";
import ROUTES from "../config/ROUTES";
import Resume from "../components/Resume";
import InputC from "../components/InputC";
import arrow from "../assets/arrow.svg";
import {
  saveValuesToLocalStorage,
  getValuesFromLocalStorage,
} from "../functions/valuesUpdatingF";
import { personalInfoKey } from "../config/localstorageKeys";
import { AppContext } from "../context/AppContext";
import { clearAllData } from "../functions/clearAllData";

function PersonalInfo() {
  const navigate = useNavigate();
  const {
    setPersonalInformation,
  } = useContext(AppContext);
  const {
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: getValuesFromLocalStorage(personalInfoKey, {
      name: "",
      surname: "",
      image: "",
      message: "",
      email: "",
      mobile: "",
    }),
    validationSchema: personalInfoV,
    onSubmit: () => {
      setPersonalInformation(values);
      navigate(`/${ROUTES.EXPERIENCE}`);
    },
  });
  useEffect(() => {
    saveValuesToLocalStorage(values, personalInfoKey);
  }, [values]);
  return (
    <section className="flex">
      <Link to={`${ROUTES.GETSTARTED}`}>
        <img
          onClick={clearAllData}
          src={arrow}
          alt="arrow"
          className="absolute top-[45px] left-[48px] p-3"
        />
      </Link>
      <section className=" h-screen min-w-[1098px] bg-main-bluelight px-[150px] pt-[47px]">
        <div className="mb-[50px] flex justify-between border-b-[1px] border-black pb-3">
          <h1 className="text-h17">პირადი ინფო</h1>
          <h1 className="text-gb1">1/3</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-[54px] flex w-full justify-between">
            <InputC
              divClass="mr-[56px]"
              labelText="სახელი"
              placeholder="ქრისტეფორე"
              id="name"
              pText="მინიმუმ 2 ასო, ქართული ასოები"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur("name")}
              touched={touched.name}
              error={errors.name}
            />
            <InputC
              divClass="mr-[56px]"
              labelText="გვარი"
              placeholder="მგალობლიშვილი"
              id="surname"
              pText="მინიმუმ 2 ასო, ქართული ასოები"
              onChange={handleChange}
              value={values.surname}
              touched={touched.surname}
              error={errors.surname}
              onBlur={handleBlur("surname")}
            />
          </div>
          <div className="mb-[54px]">
            <div className="flex items-center">
              <h1 className="mr-5 text-im">პირადი ფოტოს ატვირთვა</h1>
              <label
                className="rounded-[4px] bg-main-blue1 py-1 px-5 text-bs text-white"
                htmlFor="image"
              >
                ატვირთვა
              </label>
              <input
                className="hidden"
                type="file"
                id="image"
                name="image"
                onChange={(e) => imageHandler(e, setFieldValue)}
              />
              <h1
                className={`ml-5 text-main-invalid ${
                  touched.image && errors.image ? "" : "hidden"
                }`}
              >
                {errors.image}
              </h1>
            </div>
          </div>
          <div className="mb-[33px] flex flex-col">
            <label className="mb-2 text-lb" htmlFor="message">
              ჩემ შესახებ (არასავალდებულო)
            </label>
            <textarea
              className="h-[103px] w-full rounded-[4px] py-[13px] px-4 text-lbp"
              name="message"
              id="message"
              placeholder="ზოგადი ინფო შენ შესახებ"
              onChange={handleChange}
              onBlur={handleBlur("message")}
              value={values.message}
            ></textarea>
          </div>

          <InputC
            divClass="mb-8"
            labelText="მეილი"
            placeholder="anzorr666@redberry.ge"
            id="email"
            pText="უნდა მთავრდებოდეს @redberry.ge-ით"
            inputType="email"
            onBlur={handleBlur("email")}
            onChange={handleChange}
            value={values.email}
            touched={touched.email}
            error={errors.email}
          />
          <InputC
            divClass="mb-[160px]"
            labelText="ტელეფონი"
            placeholder="+995 551 12 34 56"
            id="mobile"
            pText="უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
            onBlur={handleBlur("mobile")}
            onChange={handleChange}
            value={values.mobile}
            touched={touched.mobile}
            error={errors.mobile}
          />
          <button
            className="float-right rounded-[4px] bg-main-purple py-[14px] px-10 text-ne text-white"
            type="submit"
          >
            შემდეგი
          </button>
        </form>
      </section>
      <Resume
        name={values.name}
        surname={values.surname}
        image={values.image}
        email={values.email}
        mobNumber={values.mobile}
        aboutMe={values.message}
        experience={{}}
        education={{}}
      />
    </section>
  );
}

export default PersonalInfo;
