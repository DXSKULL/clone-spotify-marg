import React from "react";
import {Link} from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div className="wrapper">
      <h1 className="wrapper-title">Ошибка 404. Страница не найдена. Перейдите на <Link to="/">главную</Link></h1>
    </div>
  );
};

export default NotFoundPage;
