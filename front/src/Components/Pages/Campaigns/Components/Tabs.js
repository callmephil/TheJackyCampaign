import React from 'react';

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
    
export default Tabs; 