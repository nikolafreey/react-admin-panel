import { Visibility } from "@material-ui/icons";
import React from "react";
import "./widgetSmall.css";

function WidgetSmall() {
  return (
    <div className="widgetSmall">
      <span className="widgetSmallTitle">New Join Members</span>
      <ul className="widgetSmallList">
        <li className="widgetSmallListItem">
          <img src="logo512.png" alt="Logo512" className="widgetSmallImage" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Anna Keller</span>
            <span className="widgetSmallUserTitle">Web Developer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" /> Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src="logo512.png" alt="Logo512" className="widgetSmallImage" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Anna Keller</span>
            <span className="widgetSmallUserTitle">Web Developer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" /> Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src="logo512.png" alt="Logo512" className="widgetSmallImage" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Anna Keller</span>
            <span className="widgetSmallUserTitle">Web Developer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" /> Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src="logo512.png" alt="Logo512" className="widgetSmallImage" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Anna Keller</span>
            <span className="widgetSmallUserTitle">Web Developer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" /> Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src="logo512.png" alt="Logo512" className="widgetSmallImage" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Anna Keller</span>
            <span className="widgetSmallUserTitle">Web Developer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" /> Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSmall;
