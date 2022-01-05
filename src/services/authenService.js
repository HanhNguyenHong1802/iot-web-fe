import { getAsyncWithToken, postAsync, postAsyncWithToken } from "../constant/request";

export async function login(params) {
  const url = process.env.REACT_APP_BACK_END + '/users/login'
  const response = await postAsync(url, params)
  return response?.data || []
}
export async function signup(data) {
  const url = process.env.REACT_APP_BACK_END + '/users'
  const response = await postAsync(url, data)
  return response?.data || []
}
export async function getUserInfo() {
  const url = process.env.REACT_APP_BACK_END + '/users/currentuser'
  const response = await getAsyncWithToken(url)
  return response?.data || []
}
export async function logoutUser() {
  const url = process.env.REACT_APP_BACK_END + '/users/logout'
  const response = await postAsyncWithToken(url)
  return response?.data || []
}