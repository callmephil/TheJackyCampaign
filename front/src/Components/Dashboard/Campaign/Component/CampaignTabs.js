import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import { Accordion, AccordionItem } from 'react-light-accordion';
import '../Layout/FAQ.css';

// !@Todo Remove that
const DummyContent = () => (
  <p style={{ padding: '18px' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
);

const FAQ = () => {
  // https://codepen.io/Sp00ky/pen/zBZZvq
  return (
      <div>
          <Accordion atomic={true}>
          <AccordionItem title="Question 1 ?">
              <DummyContent />
          </AccordionItem>
      
          <AccordionItem title="Question 2 ?">
              <DummyContent />
          </AccordionItem>
      
          <AccordionItem title="Question 3 ?">
              <DummyContent />
          </AccordionItem>
          </Accordion>
      </div>
  );
}

const Description = () => {
  return (
    <>
      <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada, malesuada iaculis eros dignissim. Aenean vitae diam id lacus fringilla maximus. Mauris auctor efficitur nisl, non blandit urna fermentum nec.</p>
      <img alt="" className="align-left" src="http://www.easylebaneserecipes.com/wp-content/uploads/2016/03/615Image1.jpg" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa ipsum, efficitur a fermen tum sed, suscipit sit amet arcu. Ut ut finibus tortor, eu ultrices turpis. Mauris vitae elit nec diam elementum elementum. Mauris ante quam, consequat ac nibh placerat, lacinia sollicitudin mi. Duis facilisis nibh quam, sit amet interdum tellus sollicitudin tempor. Curabitur aliquam erat in nisl lobortis, ut pellentesque lectus viverra.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa ipsum, efficitur a fermen tum sed, suscipit sit amet arcu. Ut ut finibus tortor, eu ultrices turpis. Mauris vitae elit nec diam elementum elementum. Mauris ante quam, consequat ac nibh placerat, lacinia sollicitudin mi. Duis facilisis nibh quam, sit amet interdum tellus sollicitudin tempor. Curabitur aliquam erat in nisl lobortis, ut pellentesque lectus viverra. Aenean sodales aliquet arcu at aliquam. Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada, malesuada iaculis eros dignissim. Aenean vitae diam id lacus fringilla maximus. Mauris auctor efficitur nisl, non blandit urna fermentum nec.</p>
    </>
  )
}

export default class CampaignTabs extends Component {
  render() {
    return (
      <div>
        <Tabs>
            <TabList>
                <Tab>Description</Tab>
                <Tab>F.A.Q</Tab>
                <Tab>Comments</Tab>
            </TabList>
            
            <TabPanel>
                    <Description />
                </TabPanel>
                <TabPanel>
                    <FAQ />
                </TabPanel>

                <TabPanel>
                <h2>Any content 2</h2>
                </TabPanel>
        </Tabs>
      </div>
    )
  }
}
