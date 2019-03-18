import React from "react";
import "../Styles/Progress.css";
import "../Styles/Tables.css";

// Should Recieve an array of [CurrentRaisedAmount, AmountToCollect]
// Should Calculate the % Remaining (n = (a / c) * 100;)
export const ProgressBar = ({ progress }) => {
  const { currentProgress, goal } = progress;
  const pourcentage = `${((currentProgress / goal) * 100).toFixed(1)}%`;
  return (
    <>
      <span className="label label-default">Campaign progress</span>
      <div className="progress">
        <div
          style={{ maxWidth: '100%', width: pourcentage, animationDelay: "100ms" }}
          className="progress-bar progress-bar-primary"
          data-appear-progress-animation={pourcentage}
          data-appear-animation-delay="100"
        >
          <span className="progress-bar-tooltip" style={{ opacity: "1" }}>
            {pourcentage}
          </span>
        </div>
      </div>
      <div className="pull-left">
        Raised <strong>${currentProgress}</strong>
      </div>
      <div className="pull-right">
        Goal <strong className="accent-color">${goal}</strong>
      </div>
    </>
  );
};

// Should recieve Array of [TotalFunders, StartDate, EndDate, Location Name]
// Should Calculate Remaining Days EndDate - StartDate
export const Statistics = ({stats}) => {
  const {totalFunder, startDate, endDate, location} = stats;
  const dayleft = endDate.substring(0, 2) - startDate.substring(0, 2);
  return (
    <ul className="list-group">
      <li className="list-group-item">
        Total Funder<span className="badge">{totalFunder}</span>
      </li>
      <li className="list-group-item">
        Days left to fundraising<span className="badge">{dayleft}</span>
      </li>
      <li className="list-group-item">
        Location<span className="badge">{location}</span>
      </li>
    </ul>
  );
};
