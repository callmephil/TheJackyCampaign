import React, { Component } from 'react';
import './Projects.css'

const PledgeComponent = () => {
  return (
    <>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title"> Component </p>
          <a href="#" className="card-header-icon" aria-label="more options">
            <span className="icon">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </a>
        </header>
        <div className="card-content">
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
          <a href="#">@bulmaio</a>.
          <a href="#">#css</a>
            <a href="#">#responsive</a>
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
        <footer className="card-footer">
          <a href="#" className="card-footer-item">Save</a>
          <a href="#" className="card-footer-item">Edit</a>
          <a href="#" className="card-footer-item">Delete</a>
        </footer>
      </div>
      <br />
    </>
  );
}

const Tabs = () => {
  return (
    <div className="tabs is-toggle is-fullwidth">
      <ul>
        <li >
          <a>
            <span className="icon is-small"><i className="fas fa-image" aria-hidden="true"></i></span>
            <span>Campaign</span>
          </a>
        </li>
        <li className="is-active">
          <a>
            <span className="icon is-small"><i className="fas fa-comment" aria-hidden="true"></i></span>
            <span>Community</span>
          </a>
        </li>
        <li>
          <a>
            <span className="icon is-small"><i className="far fa-file-alt" aria-hidden="true"></i></span>
            <span>F.A.Q</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

const Comments = () => {
  return (
    <>
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png"></img>
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>Barbara Middleton</strong>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
        <br />
              <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
            </p>
          </div>

          <article className="media">
            <figure className="media-left">
              <p className="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png"></img>
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>Sean Brown</strong>
                  <br />
                  Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
            <br />
                  <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                </p>
              </div>

              <article className="media">
                Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
        </article>

              <article className="media">
                Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
        </article>
            </div>
          </article>

          <article className="media">
            <figure className="media-left">
              <p className="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png"></img>
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>Kayli Eunice </strong>
                  <br />
                  Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
            <br />
                  <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                </p>
              </div>
            </div>
          </article>
        </div>
      </article>
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png"></img>
          </p>
        </figure>
        <div className="media-content">
          <div className="field">
            <p className="control">
              <textarea className="textarea" placeholder="Add a comment..."></textarea>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button">Post comment</button>
            </p>
          </div>
        </div>
      </article>
    </>
  );
}

class Projects extends Component {
  render() {
    return (
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-9">
          <div className="tile">
            <div className="tile is-parent">
              <article className="tile is-child notification is-info">
                <p className="title">Video/Image/Carroussel</p>
                <p className="subtitle">Should be a little bit wider</p>
                <figure className="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/640x480.png"></img>
                </figure>
              </article>
            </div>
            {/* <!-- OVERVIEW COMPONENTS --!> */}
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-primary">
                <p className="title">Campaign Description Component.</p>
                <p className="subtitle">So many things</p>
              </article>
              <article className="tile is-child notification is-warning">
                <p className="title">Goals Component</p>
                <p className="subtitle">So many things</p>
              </article>
            </div>
            {/* <!-- OVERVIEW COMPONENTS --!> */}
          </div>
          <div className="tile is-parent">
            <div className="tile is-child notification is-dark">
              <Tabs />
              <div className="content">
              {/* Should Be Updating depending on Tabs */}
                  <Comments />
              </div>
            </div>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-success">
            <div className="content">
              <p className="title">Pledges Components</p>
              <p className="subtitle">Contain Small Button Cards, should be smaller</p>
              <div className="content">
                <PledgeComponent />
                <PledgeComponent />
                <PledgeComponent />
                <PledgeComponent />
                {/* <!-- Content --> */}
              </div>
            </div>
          </article>
        </div>
      </div>
    )
  }
}

export default Projects;