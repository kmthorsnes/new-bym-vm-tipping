import React, { useState } from 'react';
import { default as git } from 'isomorphic-git';

const LastUpdated = () => {
  // Use isomorphic-git to get the timestamp of the last commit
  const commitTime = git.log({ dir: '.' })
    .then(logs => logs[0].date)
    .catch(err => {
      // Handle errors if the Git repository cannot be accessed
      console.error(err);
    });

  // Use the useState hook to create a "lastUpdated" state variable
  // that we can update whenever the component is rendered
  const [lastUpdated, setLastUpdated] = useState(commitTime);

  return (
    <p>Last updated: {lastUpdated}</p>
  );
}

export default LastUpdated;