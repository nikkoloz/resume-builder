import { createContext, useEffect, useState } from "react";
import { getOptions } from "../http/getOptions";
import {
  submittedPersonalInfoKey,
  submittedExperienceKey,
  submittedEducationKey,
  resivedResumeKey,
} from "../config/localstorageKeys";
import { saveValuesToLocalStorage } from "../functions/valuesUpdatingF";
const AppContext = createContext();

function AppContextProvider({ children }) {
  const [resivedResume, setResivedResume] = useState({});

  const [personalInformation, setPersonalInformation] = useState({});
  const [experienceInformation, setExperienceInformation] = useState({});
  const [educationInformation, setEducationInformation] = useState({});
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const submittedPer = localStorage.getItem(submittedPersonalInfoKey);
    const submittedExp = localStorage.getItem(submittedExperienceKey);
    const submittedEdu = localStorage.getItem(submittedEducationKey);
    const resivedCV = localStorage.getItem(resivedResumeKey);
    if (submittedPer) {
      setPersonalInformation(JSON.parse(submittedPer));
    }
    if (submittedExp) {
      setExperienceInformation(JSON.parse(submittedExp));
    }
    if (submittedEdu) {
      setEducationInformation(JSON.parse(submittedEdu));
    }
    if (resivedCV) {
      setResivedResume(JSON.parse(resivedCV));
    }
  }, []);

  useEffect(() => {
    saveValuesToLocalStorage(personalInformation, submittedPersonalInfoKey);
  }, [personalInformation]);
  useEffect(() => {
    saveValuesToLocalStorage(experienceInformation, submittedExperienceKey);
  }, [experienceInformation]);
  useEffect(() => {
    saveValuesToLocalStorage(educationInformation, submittedEducationKey);
  }, [educationInformation]);
  useEffect(() => {
    const resivedCV = JSON.parse(localStorage.getItem(resivedResumeKey));
    if (!resivedCV || Object.keys(resivedCV).length === 0) {
      saveValuesToLocalStorage(resivedResume, resivedResumeKey);
    }
  }, [resivedResume]);

  useEffect(() => {
    getOptions(setOptions);
  }, []);
  return (
    <AppContext.Provider
      value={{
        personalInformation,
        setPersonalInformation,
        experienceInformation,
        setExperienceInformation,
        educationInformation,
        setEducationInformation,
        options,
        setOptions,
        resivedResume,
        setResivedResume,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
