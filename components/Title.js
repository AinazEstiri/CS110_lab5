// Title.js
import React from 'react';

const Title = ({ sortBy, timeFrame }) => {
  return (
    <div className="title">
      <h1>{sortBy === 'viewed' ? 'Most Viewed' : sortBy === 'shared' ? 'Most Shared' : 'Most Emailed'} - {timeFrame === 'day' ? 'Day' : timeFrame === 'week' ? 'Week' : 'Month'}</h1>
    </div>
  );
};

export default Title;
