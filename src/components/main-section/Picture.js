import React from "react";
import { Category } from "./Category";
import ".././styles/main-section/_main-section.scss";
import GetImages from "./GetImages";

const Picture = () => {
  return (
    <div className="main-section flex">
      <div className="others"></div>
      <div className="display-content">
        <Category />
        <GetImages />
      </div>
    </div>
  );
};

export default Picture;
