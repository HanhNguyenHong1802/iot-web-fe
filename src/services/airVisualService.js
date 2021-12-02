import { getAsync } from "../constant/request";

let baseUrl='http://api.airvisual.com/v2'
export default async function getListSupporttedCountries() {
  let url = baseUrl + `/countries?key=${process.env.REACT_APP_MAP_AIR_VISUAL_TOKEN}`
  return await getAsync(url);
}