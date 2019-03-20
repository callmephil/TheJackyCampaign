import React from "react";
import "../Styles/Progress.css";
import "../Styles/Tables.css";

// const cA = [ 32, 50, 9]
// const cB = [ 71, 26, 8]

// const color_per_percentage = percent => {
//   const color = [
//     ((cB[0] - cA[0]) * percent),
//     ((cB[1] - cA[1]) * percent),
//     ((cB[2] - cA[2]) * percent)
//   ]
// }

const progressStyle = (pourcentage) => {
  // eukh => fraction on prc => to ceil => array of colors
  const prc = pourcentage.replace('%', '');

  switch (true) {
    case (prc < 40):
      return 'rgb(71%, 26%, 8%)';
    case (prc < 60):
      return 'rgb(95%, 72%, 16%)';
    case (prc < 80):
      return '#F2B72A'
    default:
    return 'rgba(35, 155, 35, 0.685)';
  }
}

// Should Recieve an array of [CurrentRaisedAmount, AmountToCollect]
// Should Calculate the % Remaining (n = (a / c) * 100;)
export const ProgressBar = ({ progress }) => {
  const { currentProgress, goal } = progress;
  const pourcentage = `${((currentProgress / goal) * 100).toFixed(0)}%`;
  const backColor = progressStyle(pourcentage);
  return (
    <>
      <span className="label label-default">Campaign progress</span>
      <div className="progress">
        <div
          style={{ backgroundColor: backColor, maxWidth: '100%', width: pourcentage, animationDelay: "100ms" }}
          className="progress-bar"
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
        Total Funders<span className="badge">{totalFunder}</span>
      </li>
      <li className="list-group-item">
        Days of fundraising left<span className="badge">{dayleft}</span>
      </li>
      <li className="list-group-item">
        Location<span className="badge">{location}</span>
      </li>
    </ul>
  );
};
