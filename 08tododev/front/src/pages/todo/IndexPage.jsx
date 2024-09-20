import React from "react";
import Layout from "../../layout/Layout";
import { Outlet, useNavigate } from "react-router-dom";

function IndexPage() {
  const navigate = useNavigate();

  const clickList = () => {
    navigate({ pathName: "list" });
  };

  const clickAdd = () => {
    navigate({ pathName: "add" });
  };

  const clickRead = () => {
    0;
    navigate({ pathName: "list/1" });
  };

  return (
    <Layout>
      <nav className="flex justify-end">
        <ul className="flex gap-3">
          <li
            onClick={() => {
              clickList();
            }}
          >
            list
          </li>
          <li
            onClick={() => {
              clickAdd();
            }}
          >
            add
          </li>

          <li
            onClick={() => {
              clickRead();
            }}
          >
            read
          </li>
        </ul>
      </nav>

      <div>
        <Outlet />
      </div>
    </Layout>
  );
}

export default IndexPage;
