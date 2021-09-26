import { ModalManager } from "@material-ui/core";
import {
  BarChartOutlined,
  Brightness1Outlined,
  FeedbackOutlined,
  LineStyle,
  MailOutlined,
  MessageOutlined,
  Money,
  ReportOutlined,
  ShopOutlined,
  Timeline,
  TrendingUp,
  TrendingUpOutlined,
  VerifiedUserOutlined,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="sidebarTitle">Dashboard</div>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <div className="sidebarTitle">Quick Menu</div>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <VerifiedUserOutlined className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <ShopOutlined className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <Money className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChartOutlined className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <div className="sidebarTitle">Notifications</div>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlined className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <FeedbackOutlined className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <MessageOutlined className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <div className="sidebarTitle">Staff</div>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Brightness1Outlined className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <TrendingUpOutlined className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <ReportOutlined className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
