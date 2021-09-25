import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";
import "./featuredInfo.css";

function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -$15,2 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <div className="featuredSub">Compared to Last Month</div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            $125,2 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <div className="featuredSub">Compared to Last Month</div>
      </div>
    </div>
  );
}

export default FeaturedInfo;
