import React, { Component } from 'react';
import './Campaign.css';

const Modal = () => {
    return (
        <div className="modal fade" id="DonateModal" tabindex="-1" role="dialog" data-backdrop="static">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <div className="row">
                        <div className="col-md-6 col-sm-6 donate-amount-option">
                            <h4>Choose an amount</h4>
                            <ul className="predefined-amount">
                                <li><label><input type="radio" name="donation-amount"/>$10</label></li>
                                <li><label><input type="radio" name="donation-amount"/>$20</label></li>
                                <li><label><input type="radio" name="donation-amount"/>$30</label></li>
                                <li><label><input type="radio" name="donation-amount"/>$50</label></li>
                                <li><label><input type="radio" name="donation-amount"/>$100</label></li>
                            </ul>
                        </div>
                        <span className="donation-choice-breaker">Or</span>
                        <div className="col-md-6 col-sm-6 donate-amount-option">
                            <h4>Enter your own</h4>
                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon1">$</span>
                                <input type="number" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 donation-form-infocol">
                            <h4>Address</h4>
                            <input type="text" className="form-control" placeholder="Address line 1"/>
                            <input type="text" className="form-control" placeholder="Address line 2"/>
                            <div className="row">
                                <div className="col-md-8 col-sm-8 col-xs-8">
                                    <input type="text" className="form-control" placeholder="State/City"/>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-4">
                                    <input type="text" className="form-control" placeholder="Zipcode"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 col-sm-3 col-xs-3">
                                    <label>Country</label>
                                </div>
                                <div className="col-md-9 col-sm-9 col-xs-9">
                                    <select className="selectpicker" Style="display: none;">
                                        <option>United States</option>
                                        <option>Australia</option>
                                        <option>Netherlands</option>
                                    </select>
                                    <div className="btn-group bootstrap-select">
                                        <button type="button" className="btn dropdown-toggle selectpicker btn-default" data-toggle="dropdown" title="United States"><span className="filter-option pull-left">United States</span>&nbsp;<span className="caret"></span></button>
                                        <div className="dropdown-menu open">
                                            <ul className="dropdown-menu inner selectpicker" role="menu">
                                                <li rel="0" className="selected"><a tabindex="0" className="" Style=""><span className="text">United States</span><i className="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>
                                                <li rel="1"><a tabindex="0" className="" Style=""><span className="text">Australia</span><i className="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>
                                                <li rel="2"><a tabindex="0" className="" Style=""><span className="text">Netherlands</span><i className="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 donation-form-infocol">
                            <h4>Personal info</h4>
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control" placeholder="First name"/>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control" placeholder="Last name"/>
                                </div>
                            </div>
                            <input type="text" className="form-control" placeholder="Email address"/>
                            <input type="text" className="form-control" placeholder="Phone no."/>
                            <label className="checkbox"><input type="checkbox"/> Register me on this website</label>
                        </div>
                    </div>
                </div>
                <div className="modal-footer text-align-center">
                    <button type="button" className="btn btn-primary">Make your donation now</button>
                    <div className="spacer-20"></div>
                    <p className="small">Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada, malesuada iaculis eros dignissim. Aenean vitae diam id lacus fringilla maximus. Mauris auctor efficitur nisl, non blandit urna fermentum nec. Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi.</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default class Campaign extends Component {
  render() {
    return (
    <div className="single-cause">
        <div id="main-container">
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 content-block">
                            <h3>Help rebuild Nepal</h3>
                            <div className="post-media">
                                <img alt="" src="http://placehold.it/1200x600&amp;text=IMAGE+PLACEHOLDER" />
                            </div>
                            <span className="label label-default">Cause progress</span>
                            <div className="progress">
                                <div Style="width: 88%; animation-delay: 100ms;" className="progress-bar progress-bar-primary" data-appear-progress-animation="88%" data-appear-animation-delay="100"> <span className="progress-bar-tooltip" Style="opacity: 1;">88%</span> </div>
                            </div>
                            <div className="pull-left">Raised <strong>$176000</strong></div>
                            <div className="pull-right">Goal <strong className="accent-color">$200000</strong></div>
                            <div className="spacer-20"></div>
                            <div className="row">
                                <div className="col-md-5 col-sm-5">
                                    <p className="lead">Nepal has been seriously devastated by the recent earthquake. Over 8,000 people have died (with death toll rising), thousands more are injured, and countless more have been displaced. Many homes, temples, and public monuments have been destroyed throughout the affected areas.</p>
                                </div>
                                <div className="col-md-7 col-sm-7">
                                    <ul className="list-group">
                                        <li className="list-group-item">Total Donors<span className="badge">2000</span></li>
                                        <li className="list-group-item">Days left to fundraising<span className="badge">10</span></li>
                                        <li className="list-group-item">Countries helping<span className="badge">130</span></li>
                                    </ul>
                                    <a href="#" className="btn btn-primary btn-block" data-toggle="modal" data-target="#DonateModal">Donate Now</a>
                                </div>
                                <div className="spacer-20"></div>
                            </div>
                            <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada, malesuada iaculis eros dignissim. Aenean vitae diam id lacus fringilla maximus. Mauris auctor efficitur nisl, non blandit urna fermentum nec.</p>
                            <img src="http://placehold.it/320x200&amp;text=IMAGE+PLACEHOLDER" alt="" className="align-left" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa ipsum, efficitur a fermen tum sed, suscipit sit amet arcu. Ut ut finibus tortor, eu ultrices turpis. Mauris vitae elit nec diam elementum elementum. Mauris ante quam, consequat ac nibh placerat, lacinia sollicitudin mi. Duis facilisis nibh quam, sit amet interdum tellus sollicitudin tempor. Curabitur aliquam erat in nisl lobortis, ut pellentesque lectus viverra.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa ipsum, efficitur a fermen tum sed, suscipit sit amet arcu. Ut ut finibus tortor, eu ultrices turpis. Mauris vitae elit nec diam elementum elementum. Mauris ante quam, consequat ac nibh placerat, lacinia sollicitudin mi. Duis facilisis nibh quam, sit amet interdum tellus sollicitudin tempor. Curabitur aliquam erat in nisl lobortis, ut pellentesque lectus viverra. Aenean sodales aliquet arcu at aliquam. Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada, malesuada iaculis eros dignissim. Aenean vitae diam id lacus fringilla maximus. Mauris auctor efficitur nisl, non blandit urna fermentum nec.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  };
};
