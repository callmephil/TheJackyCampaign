import React, { Component } from 'react'
import '../Styles/Pledges.css'

export default class PledgeForm extends Component {
    state = {
        selected: false,
        selectedOptionId: 0,
        pledge_data: [
            {
                pledge_id: 1,
                value: 10,
                rewards: ["Our sincere gratitude for your participation in this campaign"]
            },
            {
                pledge_id: 2,
                value: 25,
                rewards: ["Our sincere gratitude for your participation in this campaign", "Your name on our panel"]
            }, {
                pledge_id: 3,
                value: 50,
                rewards: ["Our sincere gratitude for your participation in this campaign", "Your name on our panel paint in gold", "A tree in your name *"]
            }, {
                pledge_id: 4,
                value: 100,
                rewards: ["Our sincere gratitude for your participation in this campaign", "Your name on our panel paint in gold", "A piece of the land"]
            }, {
                pledge_id: 5,
                value: 150,
                rewards:  ["Our sincere gratitude for your participation in this campaign", "Your name on our panel paint in gold", "A piece of the land", "A tree in your name *"]
            }
        ]
    }

    handleOptionChange = (evt) => {
        evt.preventDefault();
        this.setState({ selected: !this.state.selected, selectedOptionId: evt.target.id })
    }

    findRewards = () => {
        try {
            const rewards = this.state.pledge_data.find((data) => data.pledge_id === parseInt(this.state.selectedOptionId)).rewards;
            return rewards ? rewards : ["no rewards..."];
        } catch (e) {
            return ["Select an option to see the rewards"];
        }
    }

    getPledgedValue = () => 
    {
        try {
            const value = this.state.pledge_data.find((data) => data.pledge_id === parseInt(this.state.selectedOptionId)).value;
            if (value)
             return value ?  value : 0;
            // if value is 0 then catch this in main
        } catch (e) {
            console.log(`getPledgeValue ${e}`);
            return 0;
        }
    }

    render() {
        return (
            <>
                <div className="pledge-modal-content">
                    <div className="pledge-modal-header">
                        <div className="donate-amount-option">
                            <h4>Choose an amount</h4>
                            <ul className="predefined-amount">
                                {this.state.pledge_data.map(({ pledge_id, value }, index) =>
                                    <li key={index} >
                                        <label className={pledge_id === parseInt(this.state.selectedOptionId) ? "selected" : ""}>
                                            <input type="radio"
                                                id={pledge_id}
                                                name="donation-amount"
                                                value={value}
                                                onChange={this.handleOptionChange} />${value}
                                        </label>
                                    </li>
                                )}
                            </ul>
                            <div className="pricing-table">
                            <div className="spacer-20"></div>
                            <h4>Rewards</h4>
                                <ul>
                                    {this.findRewards().map((reward, index) =>
                                        <li key={index}>
                                            {reward}
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer-20" />
                <button onClick={(evt) => this.props.onSubmitProgress(evt, this.getPledgedValue())} className="btn btn-primary btn-block">Fund Now</button>
            </>
        )
    }
}
