import {
 personalInfoKey,
 experienceKey,
 educationKey,
 submittedPersonalInfoKey,
 submittedExperienceKey,
 submittedEducationKey
} from "../config/localstorageKeys"
export const clearAllData = () => {
 const keys = [
  personalInfoKey,
  submittedPersonalInfoKey,
  submittedExperienceKey,
  submittedEducationKey,
  experienceKey,
  educationKey,
 ];
 keys.map((key) => localStorage.removeItem(key))
}