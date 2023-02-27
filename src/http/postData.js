import axios from "axios";
const api = "https://resume.redberryinternship.ge/api/cvs"

export const postCV = async (data) => {
 try {
  const response = await axios.post(api, data, { 'Content-Type': 'application/json', });
  console.log(response.data);
  return response.data
 } catch (error) {
  console.error(error);
 }
} 