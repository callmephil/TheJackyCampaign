import React from 'react';

const SliderComponent = () => {
    return (
      <div className="tile is-parent">
        <article className="tile is-child notification is-info">
          <p className="title">Video/Image/Carroussel</p>
          <p className="subtitle">Should be a little bit wider</p>
          <figure className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/640x480.png"></img>
          </figure>
        </article>
      </div>
    );
  }

export default SliderComponent;