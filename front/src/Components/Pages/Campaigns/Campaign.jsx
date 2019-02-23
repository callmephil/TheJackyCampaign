import React, { Component } from 'react';
import './Campaign.css'
/* Stateless Components */
/* Top Left */
import SliderComponent from './Components/Slider';
import { GoalComponent, OverviewComponent } from './Components/Overview';

/* Top Right To bottom */
import PledgeComponent from './Components/Pledges'

/* Tabs + Main Stuffs */
import Tabs from './Components/Tabs'
import Comments from './Components/Comments';
import Descritpion from './Components/Description';
import Faq from './Components/Faq';

// !(Warning)! HackFix (Mobile View) Remove this.
const FlexVerticalPosition = () => {
  const breakpoints = {
    desktop: 1040,
    tablet: 840,
    mobile: 540
  };
  return (
    <>
      {
        window.innerWidth > breakpoints.tablet ?
          <>
            <div className="tile is-parent is-vertical is-4">
              <GoalComponent />
              <OverviewComponent />
            </div>

            <SliderComponent />
          </>
          :
          <>
            <SliderComponent />

            <div className="tile is-parent is-vertical">
              <GoalComponent />
              <OverviewComponent />
            </div>
          </>
      }
    </>
  );
}


class Projects extends Component {
  render() {
    return (
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-9">
          <div className="tile">
            <FlexVerticalPosition />
          </div>
          <div className="tile is-parent">
            <div className="tile is-child notification is-dark">
              <Tabs />
              <div className="content">
              {/* Should Be Updating depending on Tabs */}
                  <Comments />
              </div>
            </div>
          </div>
        </div>
        {/* If it's mobile should appear on tab window.innerWidth > tablet then load this otherwise it's handled in the tab */}
        
        <div className="tile is-parent">
          <article className="tile is-child notification is-success">
            <div className="content">
              <p className="title">Pledges Components</p>
              <p className="subtitle">Contain Small Button Cards, should be smaller</p>
              <div className="content">
                <PledgeComponent />
                <PledgeComponent />
                <PledgeComponent />
                <PledgeComponent />
                <PledgeComponent />
                {/* <!-- Content --> */}
              </div>
            </div>
          </article>
        </div>
      </div>
    )
  }
}

export default Projects;