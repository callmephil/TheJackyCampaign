import React, { Component } from 'react';
import './Campaign.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

const FAQ = () => {
    // https://codepen.io/Sp00ky/pen/zBZZvq
    return (
        <div>
  <div className="accordion-option">
    <h3 className="title">Knowledge</h3>
    {/* <a className="toggle-accordion active" accordion-id="#accordion"></a> */}
  </div>
  <div className="clearfix"></div>
  <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
    <div className="panel panel-default">
      <div className="panel-heading" role="tab" id="headingOne">
        <h4 className="panel-title">
        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </a>
      </h4>
      </div>
      <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
        <div className="panel-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
          on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
          raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>
    <div className="panel panel-default">
      <div className="panel-heading" role="tab" id="headingTwo">
        <h4 className="panel-title">
        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </a>
      </h4>
      </div>
      <div id="collapseTwo" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwo">
        <div className="panel-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
          on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
          raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>
    <div className="panel panel-default">
      <div className="panel-heading" role="tab" id="headingThree">
        <h4 className="panel-title">
        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
          Collapsible Group Item #3
        </a>
      </h4>
      </div>
      <div id="collapseThree" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingThree">
        <div className="panel-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
          on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
          raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>
  </div>
</div>
    );
}

const Pledges = () => {
    return (
            <div className="pledge-modal-content">
                <div className="pledge-modal-header">
                    <div className="row">
                        <div className="donate-amount-option">
                            <h4>Choose an amount</h4>
                            <ul className="predefined-amount">
                                <li>
                                    <label className="selected">
                                        <input type="radio" name="donation-amount"/>$10
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="radio" name="donation-amount"/>$20
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="radio" name="donation-amount"/>$30
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="radio" name="donation-amount"/>$50
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="radio" name="donation-amount"/>$100
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

export default class Campaign extends Component {
  render() {
    return (
        <div className="campaign-container content-block">
            {/* HEAD */}
            <h1 className="big-title-centered">First Campaign Title</h1>
            <div className="spacer-20"/>
            <p className="lead">Nepal has been seriously devastated by the recent earthquake. Over 8,000 people have died (with death toll rising), thousands more are injured, and countless more have been displaced. Many homes, temples, and public monuments have been destroyed throughout the affected areas.</p>
            <div className="spacer-20"/>
            {/* PROGRESS & PLEDGES  */}
            <div className="row">
                <div className="col-md-5 col-sm-5">
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
                    <div className="spacer-20"/>
                    <div className="post-media">
                        <img alt="" src="http://www.lebanoninapicture.com/Prv/Images/Pages/Page_136076/heaven-on-earth-lebanon-chouwen-lake-trees-heav-9-8-2017-3-01-16-pm-l.jpg" />
                    </div>
                </div>

                <div className="col-md-7 col-sm-7">
                    <ul className="list-group">
                          <li className="list-group-item">Total Funder<span className="badge">2000</span></li>
                          <li className="list-group-item">Days left to fundraising<span className="badge">10</span></li>
                          <li className="list-group-item">Countries helping<span className="badge">130</span></li>
                      </ul>
                    <Pledges />
                    
                    <div className="spacer-20"/>
                    {/* <a href="#" className="btn btn-primary btn-block" data-toggle="modal" data-target="#DonateModal">Fund Now</a> */}
                    <button className="btn btn-primary btn-block">Fund Now</button>
                </div>

                <div className="spacer-20"/>
            </div>
            {/* TABS  */}
            <TabPanels />
            </div>
    );
  };
};
