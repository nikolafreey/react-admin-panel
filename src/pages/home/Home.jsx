import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";

import "./home.css";
import { userData } from "../../dummyData";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";

const userData2 = [
  {
    name: "Jan",
    "Active User": 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    "Active User": 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    "Active User": 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    "Active User": 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    "Active User": 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    "Active User": 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    "Active User": 5490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    "Active User": 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Sep",
    "Active User": 2100,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Oct",
    "Active User": 2490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Nov",
    "Active User": 1490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Dec",
    "Active User": 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        grid
        data={userData2}
        title="User Analytics"
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}

export default Home;
