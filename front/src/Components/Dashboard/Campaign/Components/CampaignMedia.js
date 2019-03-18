import React, { Component } from 'react';
import '../Styles/Media.css';


// Should return a gallery
const GalleryContainer = ({images}) => 
{
    return (
        <div>

        </div>
    );
}

// should return an image
const ImageContainer = ({imgSource}) =>
{
    return (
        <div className="post-media">
            <img alt="" 
            src={imgSource} 
            /> 
        </div>
    );
}

// should return a video posted on youtube.
const VideoContainer = ({vID}) => {
    return (
    <div class="video-container">
        <iframe width="853" height="480"
        src={`https://www.youtube.com/embed/${vID}`}
        frameborder="0"
        allowfullscreen="true"/>
    </div>
    );
};

// Should Recieve MediaType & MediaID
// Should Contain Switches to display Correct Datas 
export default class CampaignMedia extends Component {
  render() {
    return (
        <VideoContainer vID="coIXMyWzpAU"/>
    );
  };
};
