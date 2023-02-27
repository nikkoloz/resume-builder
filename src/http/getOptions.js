import axios from "axios";
import { degreeOptionsKey } from "../config/localstorageKeys";
const api = "https://resume.redberryinternship.ge/api"

export const getOptions = async (setter) => {
 try {
  let dataFromLocalStorage = localStorage.getItem(degreeOptionsKey);
  if (dataFromLocalStorage) {
   setter(JSON.parse(dataFromLocalStorage));
  } else {
   const response = await axios.get(api + '/degrees', {
    headers: {
     accept: 'application/json',
    },
   });
   setter(response.data);
   localStorage.setItem(degreeOptionsKey, JSON.stringify(response.data));
  }
 } catch (error) {
  console.error(error);
 }
}