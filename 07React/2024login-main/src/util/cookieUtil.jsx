import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, days) => {
  const expires = new Date(); // 보존기간
  expires.setUTCDate(expires.getUTCDate() + days);

  return cookies.set(name, value, { expires: expires, path: "/" });
};

export const getCookie = (name) => {
  return cookies.get(name); // name을 갖고옴
};

export const removeCookie = (name, path = "/") => {
  cookies.remove(name, { path: path }); // 쿠키 제거
};
