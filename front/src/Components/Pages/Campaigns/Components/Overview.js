import React from 'react';

const GoalComponent = () => {
    return (
        <article className="tile is-child notification is-warning">
          <p className="title">Goals Component</p>
          <p className="subtitle">So many things</p>
        </article>
    );
  }

const OverviewComponent = () => {
  return (
    <article className="tile is-child notification is-primary">
      <p className="title">Campaign Description Component.</p>
      <p className="subtitle">So many things</p>
    </article>
  );
}

export {
  GoalComponent,
  OverviewComponent
};