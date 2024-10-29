import axios from "axios";

const jwtAxios = axios.create();

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

const beforeRes = (res) => {
  console.log("beforeResponse.....................");
  console.log(res);

  // const data = res.data // data값이 에러가 나면
};
const responseFail = (error) => {
  console.log("reponse fail...............");
  console.log(error);
};

jwtAxios.interceptors.request.use(beforeReq, requestFail);
jwtAxios.interceptors.response.use(beforeRes, responseFail);

export default jwtAxios;
