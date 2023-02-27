export const resumeData = (personalInformation, experienceInformation, values, imageAsFile, options) => {
 const item = options.find((item) => item.title === values.degree);
 const id = item ? item.id : null;
 return {
  name: personalInformation.name,
  surname: personalInformation.surname,
  image: imageAsFile,
  email: personalInformation.email,
  phone_number: personalInformation.mobile,
  about_me: personalInformation.message,
  experiences: [
   {
    position: experienceInformation.position,
    employer: experienceInformation.employer,
    start_date: experienceInformation.startDate,
    due_date: experienceInformation.endDate,
    description: experienceInformation.aboutJob,
   },
  ],
  educations: [
   {
    institute: values.school,
    degree_id: parseFloat(id),
    due_date: values.educationDate,
    description: values.aboutSchool,
   },
  ],
 }
}