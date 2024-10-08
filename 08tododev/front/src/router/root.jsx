import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import todoRouter from "./todoRouter";

const loading = <div className="bg-red-400">loading.....</div>;
const Main = lazy(() => import("../pages/MainCompo")); // 페이지를 접근할 때만
const About = lazy(() => import("../pages/AboutCompo"));
// const Todo = lazy(() => import("../pages/TodoCompo"));
const TodoIndex = lazy(() => import("../pages/todo/IndexPage"));

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={loading}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "/todo",
    element: (
      <Suspense fallback={loading}>
        <TodoIndex />
      </Suspense>
    ),
    children: todoRouter(),
  },
]);

export default root;
