import axios from "axios";
import { API_SERVER_HOST } from "../api/todoApi";

const jwtAxios = axios.create();

const refreshJWT = async (accessToken, refreshToken) => {
  const host = API_SERVER_HOST;
  const header = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const res = await axios.get(`${host}/api/member/refresh?refreshToken=${ref}`, 
    header);
};

const beforeReq = (config) => {
  console.log("beforeReq.........");

  const memberInfo = getCookie("member");

  if (!memberInfo) {
    return Promise.reject({ response: { data: { error: "Require_login" } } });
  }

  const { accessToken } = memberInfo;

  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};
const requestFail = (error) => {
  console.log("requestfail..................");
  return Promise.reject(error);
};

const beforeRes = async(res) => {
  console.log("beforeResponse.....................");
  console.log(res);

  const data = res.data // data값이 에러가 나면

  if(data && data.error === "ERROR_ACCESS_TOEKN") {
    const memberCookieValue = getCookie("member")

    const result = await refreshJWT(
        memberCookieValue.accessToken,
        memberCookieValue.refreshToken
    )

    memberCookieValue.accessToken = result.accessToken
    memberCookieValue.refreshToken = result.refreshToken

    setCookie("member", JSON.stringify(memberCookieValue) ,1)
  }

  return res;
};
const responseFail = (error) => {
  console.log("reponse fail...............");
  console.log(error);
};

jwtAxios.interceptors.request.use(beforeReq, requestFail);
jwtAxios.interceptors.response.use(beforeRes, responseFail);

export default jwtAxios;
