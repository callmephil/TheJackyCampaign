import React, { Component } from "react";
import "./Campaign.css";
import CampaignTabs from "./Components/CampaignTabs";
import PledgeForm from "./Components/PledgeForm";
import { ProgressBar, Statistics } from "./Components/CampaignStatistics";
import CampaignMedia from "./Components/CampaignMedia";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CampaignTitle = ({ data }) => {
  const { title, description } = data;
  return (
    <>
      <h1 className="big-title-centered"> { title } </h1>
      <div className="spacer-20" />
        <p className="lead"> { description } </p>
      <div className="spacer-20" />
    </>
  );
};

export default class Campaign extends Component {
  constructor() {
    super();
    this.state = {
      main: {
        title: `The Jacky Campaign`,
        description: `The Jacky Campaign, a crowd-funding platform that aims to preserve land or other Lebanese patrimony. Each participant of a campaign will own a small strip of the land in return. This way, all eligible funders together possess the land and make it impossible for anyone to exploit, or buy it back. Funds can also be raised to reforest the land with trees.`
      },
      // progress: { },
      // media: { },
      // stats: { },
    }
  }

  componentWillMount() {
    this.getProgress();
    this.getMedia();
    this.getStats();
  }
  getProgress = () => {
    const progress = {
      currentProgress: 20000,
      goal: 75000,
    };
    this.setState({ progress });
  }
  getMedia = () => {
    const media = {
      type: 0,
      media_id: 'coIXMyWzpAU'
      // type: 1,
      // media_id: 'https://images.unsplash.com/photo-1476726050528-0858616a1cb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
    }
    this.setState({ media })
  }
  getStats = () => {
    const stats = {
      totalFunder: 10,
      startDate: '18/03/2019',
      endDate: '31/03/2019',
      location: 'Lebanon'
    }
    this.setState({ stats });
  }

  onSubmitUpdateFunder = () => {
    try {
      const getFunderCount = this.state.stats.totalFunder;
      const stats = { totalFunder: getFunderCount + 1,
        startDate: '18/03/2019',
        endDate: '31/03/2019',
        location: 'Lebanon' }
      this.setState({ stats });
    } catch (e) {
      console.log(e);
    }
  }

  TestingThing = ()  =>  {

    const currProgress = this.state.progress.currentProgress;
    const newProgress = currProgress + 150;
    const progress = {currentProgress: newProgress, goal: this.state.progress.goal}
    this.setState({ progress })
    this.onSubmitUpdateFunder();
  }

  onSubmitUpdateProgress = (evt, newAmount) => 
  {
    try {
    evt.preventDefault();

    if (newAmount === 0)
      throw new Error('NO_SELECT');

    const currProgress = this.state.progress.currentProgress;
    // is The Campaign still active?
    const newProgress = currProgress + newAmount;
    const progress = {currentProgress: newProgress, goal: this.state.progress.goal}
    this.setState({ progress })
    this.onSubmitUpdateFunder();

    toast.success(`${newAmount} donated by annonymous !`, {toastId:2});

    var self = this;
    for (let index = 0; index < 300; index++) {
      setTimeout(function () {
        self.TestingThing();
      }, 3000);
    }
    }
    catch (e) {
      if (e.message === 'NO_SELECT')
        toast.error(`You have to select a pledge first`, {toastId:1})
      else
        console.error(`onSubmitUpdateProgress ${e}`);
    }
  }

  render() {
    return (
      <div className="campaign-container content-block">
        <CampaignTitle data = { this.state.main } />
        <div className="row">
          <div className="col-md-5 col-sm-5">
            <ProgressBar progress = { this.state.progress } />
            <div className="spacer-20" />
            <CampaignMedia data = { this.state.media } />
          </div>
          <div className="col-md-7 col-sm-7">
            <Statistics stats = { this.state.stats } />
            <PledgeForm onSubmitProgress = { this.onSubmitUpdateProgress } />
          </div>
          <div className="spacer-20" />
        </div>
        <CampaignTabs />
        <div className="spacer-20" />
      </div>
    );
  }
}