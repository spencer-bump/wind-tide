import React from 'react';
import { showAmPm, showHrMn } from '../utilities/displayTime';
import CurrentlyListItem from './CurrentlyListItem';

const CurrentlyList = props => {
  let currently = props.currently;
    // TODO: insert time of current reading "as of"
    return (
      <div className="ui segment">
        <h3 className="ui header">Current Reading {`${showHrMn(currently.time)} ${showAmPm(currently.time)}`}</h3>
        <div className="ui list">
          <CurrentlyListItem currently={currently} />
        </div>
      </div>
    )
};

export default CurrentlyList;
