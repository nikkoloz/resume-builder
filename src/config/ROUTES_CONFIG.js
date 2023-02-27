import { Education, PersonalInfo, GetStarted, Experience, Cv } from "../pages/index.js";
import ROUTES from "./ROUTES.js";
const ROUTES_CONFIG = [
 {
  path: ROUTES.GETSTARTED,
  page: GetStarted
 }, {
  path: ROUTES.PERSONAL,
  page: PersonalInfo
 }, {
  path: ROUTES.EXPERIENCE,
  page: Experience
 }, {
  path: ROUTES.EDUCATION,
  page: Education
 }, {
  path: ROUTES.CV,
  page: Cv
 }
]
export { ROUTES_CONFIG };
