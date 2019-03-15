import React, { Component } from 'react'
import '../Layout/Pledges.css'
const Pledges = () => {
    return (
        <>
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
                                    <li><b>4</b> Reward</li>
                                    <li><b>5</b> Reward</li>
                                    <li><b>6</b> Reward</li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="spacer-20"/>
                <button className="btn btn-primary btn-block">Fund Now</button>
            </>
    );
}

export default class PledgeForm extends Component {
  render() {
    return (
        <Pledges />
    )
  }
}
