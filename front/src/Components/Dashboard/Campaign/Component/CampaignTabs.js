import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import { Accordion, AccordionItem } from 'react-light-accordion';
import '../Styles/FAQ.css';

// !@Todo Generate WYSIWYG content || https://bloomer.js.org/#/documentation/elements/content || admin => Slate.js
const DummyContent = ({content}) => {
  console.log(content)
  return (
  <p style={{ padding: '18px'}}>
    {content}
  </p>
  );
};

const FAQ = ({data}) => {
  // https://codepen.io/Sp00ky/pen/zBZZvq
  return (
      <div>
          <Accordion atomic={true}>
          {data.map(({question, answer}, index) => 
          <AccordionItem key={index} title={question}>
              <DummyContent content = {answer}/>
          </AccordionItem>
          )}
          </Accordion>
      </div>
  );
}

const Description = () => {
  return (
    <div style={{fontSize: '1.2rem', lineHeight: '1.8rem'}}>
      <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada, malesuada iaculis eros dignissim. Aenean vitae diam id lacus fringilla maximus. Mauris auctor efficitur nisl, non blandit urna fermentum nec.</p>
      <img alt="" className="align-left" src="http://www.easylebaneserecipes.com/wp-content/uploads/2016/03/615Image1.jpg" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa ipsum, efficitur a fermen tum sed, suscipit sit amet arcu. Ut ut finibus tortor, eu ultrices turpis. Mauris vitae elit nec diam elementum elementum. Mauris ante quam, consequat ac nibh placerat, lacinia sollicitudin mi. Duis facilisis nibh quam, sit amet interdum tellus sollicitudin tempor. Curabitur aliquam erat in nisl lobortis, ut pellentesque lectus viverra.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa ipsum, efficitur a fermen tum sed, suscipit sit amet arcu. Ut ut finibus tortor, eu ultrices turpis. Mauris vitae elit nec diam elementum elementum. Mauris ante quam, consequat ac nibh placerat, lacinia sollicitudin mi. Duis facilisis nibh quam, sit amet interdum tellus sollicitudin tempor. Curabitur aliquam erat in nisl lobortis, ut pellentesque lectus viverra. Aenean sodales aliquet arcu at aliquam. Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada, malesuada iaculis eros dignissim. Aenean vitae diam id lacus fringilla maximus. Mauris auctor efficitur nisl, non blandit urna fermentum nec.</p>
    </div>
  )
}

export default class CampaignTabs extends Component {
  state = {
    FAQ: [
      {
        question: 'Question 1 ?',
        answer: 'This is an answer for the question 1'
      },
      {
        question: 'Question 2 ?',
        answer: 'This is an answer for the question 2'
      },
      {
        question: 'Question 3 ?',
        answer: 'This is an answer for the question 3'
      },
    ]
  }
  render() {
    return (
      <div>
        <Tabs>
            <TabList>
                <Tab>Campaign</Tab>
                <Tab>F.A.Q</Tab>
                <Tab>Community</Tab>
            </TabList>
            
            <TabPanel>
                    <h1 className="h1-big-title"> About </h1> 
                    <Description />
                </TabPanel>
                <TabPanel>
                  <h1 className="h1-big-title"> Frequently Asked Questions </h1>
                    <FAQ data={this.state.FAQ}/>
                </TabPanel>

                <TabPanel>
                <h1 className="h1-big-title"> Community </h1> 
                <h2>Any content 2</h2>
                </TabPanel>
        </Tabs>
      </div>
    )
  }
}
