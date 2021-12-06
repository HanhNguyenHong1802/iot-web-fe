import { postAsync } from "../constant/request";

export async function login({ params }) {
  const url = process.env.REACT_APP_BACK_END + '/users/login'
  const response = await postAsync(url, params)
  return response?.data || []
}
export async function signup({ params }) {
  const url = process.env.REACT_APP_BACK_END + '/users'
  const response = await postAsync(url, params)
  return response?.data || []
}