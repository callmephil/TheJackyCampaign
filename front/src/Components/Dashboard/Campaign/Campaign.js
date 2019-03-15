import React, { Component } from "react";
import "./Campaign.css";
import CampaignTabs from "./Component/CampaignTabs";
import PledgeForm from "./Component/PledgeForm";
import { ProgressBar, Statistics } from "./Component/CampaignStatistics";
import CampaignMedia from "./Component/CampaignMedia";

const CampaignTitle = () => {
  return (
    <>
      <h1 className="big-title-centered">First Campaign Title</h1>
      <div className="spacer-20" />
      <p className="lead">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <div className="spacer-20" />
    </>
  );
};

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
            <div className="spacer-20" />

            <CampaignMedia />
          </div>

          <div className="col-md-7 col-sm-7">
            <Statistics />
            <PledgeForm />
          </div>

          <div className="spacer-20" />
        </div>
        <CampaignTabs />
        <div className="spacer-20" />
      </div>
    );
  }
}