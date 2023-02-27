import * as yup from "yup"
import { degreeOptionsKey } from "../config/localstorageKeys"
let options = JSON.parse(localStorage.getItem(degreeOptionsKey))
if (options === null) options = []
export const educationV = yup.object({
 school: yup
  .string()
  .required()
  .min(2,),
 degree: yup
  .string()
  .oneOf(options.map(opt => opt.title))
  .required(),
 educationDate: yup
  .date()
  .required(),
 aboutSchool: yup
  .string()
  .required(),
});