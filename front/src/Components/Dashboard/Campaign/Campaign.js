import React, { Component } from 'react';
import './Campaign.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import "react-tabs/style/react-tabs.css";

import { Accordion, AccordionItem } from 'react-light-accordion';
import './faq.css';

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

const Pledges = () => {
    return (
            <div className="pledge-modal-content">
                <div className="pledge-modal-header">
                        <div className="donate-amount-option">
                            <h4>Choose an amount</h4>
                            <ul className="predefined-amount">
                                <li>
                                    <label className="">
                                        <input type="radio" name="donation-amount" value="10"/>$10
                                    </label>
                                </li>
                                <li>
                                    <label className="">
                                        <input type="radio" name="donation-amount" value="20"/>$20
                                    </label>
                                </li>  
                                <li>
                                    <label className="">
                                        <input type="radio" name="donation-amount" value="30"/>$30
                                    </label>
                                </li>
                                <li>
                                    <label className="selected">
                                        <input type="radio" name="donation-amount" value="50"/>$50
                                    </label>
                                </li>
                                <li>
                                    <label className="">
                                        <input type="radio" name="donation-amount" value="100"/>$100
                                    </label>
                                </li>
                                <li>
                                    <label className="">
                                        <input type="radio" name="donation-amount" value="150"/>$150
                                    </label>
                                </li>
                                <li>
                                    <label className="">
                                        <input type="radio" name="donation-amount" value="200"/>$200
                                    </label>
                                </li>
                            </ul>
                            <div className="pricing-table">
                                <ul>
                                    <li><b>1</b> Reward</li>
                                    <li><b>2</b> Reward</li>
                                    <li><b>3</b> Reward</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

const TabPanels = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>Description</Tab>
                <Tab>F.A.Q</Tab>
                <Tab>Comments</Tab>
            </TabList>
            
            <TabPanel>
                <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada, malesuada iaculis eros dignissim. Aenean vitae diam id lacus fringilla maximus. Mauris auctor efficitur nisl, non blandit urna fermentum nec.</p>
                <img alt="" className="align-left" src="http://www.easylebaneserecipes.com/wp-content/uploads/2016/03/615Image1.jpg" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa ipsum, efficitur a fermen tum sed, suscipit sit amet arcu. Ut ut finibus tortor, eu ultrices turpis. Mauris vitae elit nec diam elementum elementum. Mauris ante quam, consequat ac nibh placerat, lacinia sollicitudin mi. Duis facilisis nibh quam, sit amet interdum tellus sollicitudin tempor. Curabitur aliquam erat in nisl lobortis, ut pellentesque lectus viverra.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa ipsum, efficitur a fermen tum sed, suscipit sit amet arcu. Ut ut finibus tortor, eu ultrices turpis. Mauris vitae elit nec diam elementum elementum. Mauris ante quam, consequat ac nibh placerat, lacinia sollicitudin mi. Duis facilisis nibh quam, sit amet interdum tellus sollicitudin tempor. Curabitur aliquam erat in nisl lobortis, ut pellentesque lectus viverra. Aenean sodales aliquet arcu at aliquam. Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada, malesuada iaculis eros dignissim. Aenean vitae diam id lacus fringilla maximus. Mauris auctor efficitur nisl, non blandit urna fermentum nec.</p>
                </TabPanel>

                <TabPanel>
                    <FAQ />
                </TabPanel>

                <TabPanel>
                <h2>Any content 2</h2>
                </TabPanel>
        </Tabs>
    )
}

const CampaignTitle = () => {
    return (
        <>
        <h1 className="big-title-centered">First Campaign Title</h1>
        <div className="spacer-20"/>
        <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div className="spacer-20"/>
        </>
    );
}

const ProgressBar = () => {
    return (
        <>
            <span className="label label-default">Campaign progress</span>
                <div className="progress">
                    <div style={{width: "88%", animationDelay: "100ms"}} 
                        className="progress-bar progress-bar-primary" 
                        data-appear-progress-animation="88%" 
                        data-appear-animation-delay="100"> 
                        <span className="progress-bar-tooltip" style={{opacity: "1"}}>88%</span> 
                    </div>
                </div>
                <div className="pull-left">Raised <strong>$176000</strong></div>
                <div className="pull-right">Goal <strong className="accent-color">$200000</strong></div>
        </>
    );
}

const Statistics = () => {
    return (
    <ul className="list-group">
        <li className="list-group-item">Total Funder<span className="badge">2000</span></li>
        <li className="list-group-item">Days left to fundraising<span className="badge">10</span></li>
        <li className="list-group-item">Countries helping<span className="badge">130</span></li>
    </ul>
    );
}

export default class Campaign extends Component {
  render() {
    return (
        <div className="campaign-container content-block">
            {/* HEAD */}
            <CampaignTitle />
            {/* PROGRESS & PLEDGES  */}
            <div className="row">

            <div className="col-md-5 col-sm-5">
                <ProgressBar />
                <div className="spacer-20"/>
                <div className="post-media">
                    <iframe width="560" height="500px" 
                    src="https://www.youtube.com/embed/coIXMyWzpAU" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                    </iframe>

                    {/* <img alt="" src="http://www.lebanoninapicture.com/Prv/Images/Pages/Page_136076/heaven-on-earth-lebanon-chouwen-lake-trees-heav-9-8-2017-3-01-16-pm-l.jpg" /> */}
                </div>
            </div>

            <div className="col-md-7 col-sm-7">
                <Statistics />
                <Pledges />
                <div className="spacer-20"/>
                <button className="btn btn-primary btn-block">Fund Now</button>
            </div>

            <div className="spacer-20"/>
            </div>
            {/* TABS  */}
            <TabPanels />
            <div className="spacer-20"/>
            </div>
    );
  };
};
