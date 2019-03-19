import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import { Accordion, AccordionItem } from 'react-light-accordion';
import '../Styles/FAQ.css';


import '../Styles/Comments.css'

// !@Todo Generate WYSIWYG content || https://bloomer.js.org/#/documentation/elements/content || admin => Slate.js
const DummyContent = ({ content }) => {
  return (
    <p style={{ padding: '18px' }}>
      {content}
    </p>
  );
};

const FAQ = ({ data }) => {
  // https://codepen.io/Sp00ky/pen/zBZZvq
  return (
    <div>
      <Accordion atomic={true}>
        {data.map(({ question, answer }, index) =>
          <AccordionItem key={index} title={question}>
            <DummyContent content={answer} />
          </AccordionItem>
        )}
      </Accordion>
    </div>
  );
}

const Description = () => {
  return (
    <div style={{ fontSize: '1.2rem', lineHeight: '1.8rem' }}>
      <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada, malesuada iaculis eros dignissim. Aenean vitae diam id lacus fringilla maximus. Mauris auctor efficitur nisl, non blandit urna fermentum nec.</p>
      <img alt="" className="align-left" src="http://www.easylebaneserecipes.com/wp-content/uploads/2016/03/615Image1.jpg" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa ipsum, efficitur a fermen tum sed, suscipit sit amet arcu. Ut ut finibus tortor, eu ultrices turpis. Mauris vitae elit nec diam elementum elementum. Mauris ante quam, consequat ac nibh placerat, lacinia sollicitudin mi. Duis facilisis nibh quam, sit amet interdum tellus sollicitudin tempor. Curabitur aliquam erat in nisl lobortis, ut pellentesque lectus viverra.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa ipsum, efficitur a fermen tum sed, suscipit sit amet arcu. Ut ut finibus tortor, eu ultrices turpis. Mauris vitae elit nec diam elementum elementum. Mauris ante quam, consequat ac nibh placerat, lacinia sollicitudin mi. Duis facilisis nibh quam, sit amet interdum tellus sollicitudin tempor. Curabitur aliquam erat in nisl lobortis, ut pellentesque lectus viverra. Aenean sodales aliquet arcu at aliquam. Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada, malesuada iaculis eros dignissim. Aenean vitae diam id lacus fringilla maximus. Mauris auctor efficitur nisl, non blandit urna fermentum nec.</p>
    </div>
  )
}

const Comments = () => {
  return (
    <div>
      <div className="card-block">
        {/* <!-- form --> */}
        <form action="">
          <div className="input-group mb-2 mr-sm-2 mb-sm-0 main-comment-form">
            <button className="input-group-addon"><i className="fa fa-paper-plane"></i></button>
            <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Say something" />
          </div>
        </form>
        <hr />
        {/* <!-- form --> */}
        {/* <!-- comments --> */}
        <div className="comments-container">
          <div className="media">
            <img className="d-flex mr-3" src="https://warwick.com.au/attachments/StyleSheet/21/placeholder_s.gif?ts=1440649006" alt="Generic placeholder image" />
            <div className="media-body">
              <h5 className="mt-0 main-post-comment-hding">Alessa Carter</h5>
              <p className="main-post-comment-paragraph">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
              <p className="social-action-container">
                <a className="btn btn-outline-success btn-login gbtn btn-like btn-sm" href=""> <i className="fa fa-thumbs-up"></i></a>
                <a className="btn btn-outline-success btn-login gbtn btn-like btn-sm" href=""> <i className="fa fa-thumbs-down"></i></a>
                <a className="btn btn-outline-success btn-login gbtn btn-like btn-sm" href=""> <i className="fa fa-share"></i></a>
              </p>
              <hr />
              <div className="media mt-3">
                <a className="d-flex pr-3" href="#">
                  <img src="https://warwick.com.au/attachments/StyleSheet/21/placeholder_s.gif?ts=1440649006" alt="Generic placeholder image" />
                </a>
                <div className="media-body">
                  <h5 className="mt-0 main-post-comment-hding">Jaime Gonzalez</h5>
                  <p className="main-post-comment-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto totam voluptas inventore, deserunt obcaecati quia unde rerum veritatis sed, aut repellendus laboriosam excepturi fuga explicabo expedita labore facere blanditiis! Rem.
                        </p>
                  <p className="social-action-container">
                    <a className="btn btn-outline-success btn-login gbtn btn-like btn-sm" href=""> <i className="fa fa-thumbs-up"></i></a>
                    <a className="btn btn-outline-success btn-login gbtn btn-like btn-sm" href=""> <i className="fa fa-thumbs-down"></i></a>
                    <a className="btn btn-outline-success btn-login gbtn btn-like btn-sm" href=""> <i className="fa fa-share"></i></a>
                  </p>
                  <hr />
                  <form action="">
                    <div className="input-group mb-2 mr-sm-2 mb-sm-0 main-comment-form">
                      <button className="input-group-addon"><i className="fa fa-paper-plane"></i></button>
                      <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Say something" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- comments --> */}
      </div>
    </div>
  );
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
            <FAQ data={this.state.FAQ} />
          </TabPanel>

          <TabPanel>
            <h1 className="h1-big-title"> Community </h1>
            <Comments />
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}
