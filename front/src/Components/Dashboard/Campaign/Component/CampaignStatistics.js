import React from "react";
import "../Styles/Progress.css";
import "../Styles/Tables.css";

// Should Recieve an array of [CurrentRaisedAmount, AmountToCollect]
// Should Calculate the % Remaining (n = (a / c) * 100;)
export const ProgressBar = () => {
  const CurrentRaisedAmount = 186004;
  const AmountToCollect = 200000;
  const pourcentage = `${((CurrentRaisedAmount / AmountToCollect) * 100).toFixed(1)}%`;
  return (
    <>
      <span className="label label-default">Campaign progress</span>
      <div className="progress">
        <div
          style={{ width: pourcentage, animationDelay: "100ms" }}
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
        Raised <strong>${CurrentRaisedAmount}</strong>
      </div>
      <div className="pull-right">
        Goal <strong className="accent-color">${AmountToCollect}</strong>
      </div>
    </>
  );
};

// Should recieve Array of [TotalFunders, StartDate, EndDate, Location Name]
// Should Calculate Remaining Days EndDate - StartDate
export const Statistics = () => {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        Total Funder<span className="badge">2000</span>
      </li>
      <li className="list-group-item">
        Days left to fundraising<span className="badge">10</span>
      </li>
      <li className="list-group-item">
        Location<span className="badge">Lebanon</span>
      </li>
    </ul>
  );
};
