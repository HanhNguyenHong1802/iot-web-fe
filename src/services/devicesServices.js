import { deleteAsyncWithToken, getAsync, getAsyncWithToken, putAsyncWithToken } from "../constant/request";

function getCookie(name = 'userid') {
  const v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}


export async function getUserDevices() {
  const url = process.env.REACT_APP_BACK_END + '/users/' + getCookie()
  const response = await getAsyncWithToken(url)
  return response?.data || []
}

export async function deleteDeviceById(deviceId) {
  const url = process.env.REACT_APP_BACK_END + '/devices/' + deviceId
  const response = await deleteAsyncWithToken(url)
  return response?.data || []
}
export async function updateDeviceById(deviceId) {
  const url = process.env.REACT_APP_BACK_END + '/devices/' + deviceId
  const response = await putAsyncWithToken(url)
  return response?.data || []
}