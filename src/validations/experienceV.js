import * as yup from "yup"

export const experienceV = yup.object({
 position: yup
  .string()
  .required()
  .min(2),
 employer: yup
  .string()
  .required()
  .min(2),
 startDate: yup
  .date()
  .required(),
 endDate: yup
  .date()
  .required(),
 aboutJob: yup
  .string()
  .required(),
});