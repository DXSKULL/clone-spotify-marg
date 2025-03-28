import classNames from "classnames";
import React, { useEffect } from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import { useTheme } from "../../providers/ThemeProvider";

const Layout = (props) => {
  const { isLightTheme } = useTheme();

  useEffect(() => {
    document.body.style.background = isLightTheme ? "#fff" : "#000";
  }, [isLightTheme]);

  return (
    <div
      className={classNames("app", {
        light: isLightTheme,
      })}
    >
      <Header />
      <div className="container">
        <Sidebar />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
