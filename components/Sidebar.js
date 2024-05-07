// Sidebar.js
import React from 'react';

const Sidebar = ({ sortBy, setSortBy, timeFrame, setTimeFrame }) => {
  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleTimeFrameChange = (event) => {
    setTimeFrame(event.target.value);
  };

  return (
    <div className="left-white">
      <h2>Filter</h2>
      <br/>
      <h3>Sorted By:</h3>
      <div id="sortBy">
        <input type="radio" id="viewed" name="sorting" value="viewed" checked={sortBy === 'viewed'} onChange={handleSortByChange} />
        <label htmlFor="viewed">Most Viewed</label>
        <br/>
        <input type="radio" id="shared" name="sorting" value="shared" checked={sortBy === 'shared'} onChange={handleSortByChange} />
        <label htmlFor="shared">Most Shared</label>
        <br/>
        <input type="radio" id="emailed" name="sorting" value="emailed" checked={sortBy === 'emailed'} onChange={handleSortByChange} />
        <label htmlFor="emailed">Most Emailed</label>
        <br/>
      </div>
      <br/>
      <h3>Time Frame:</h3>
      <div id="timeFrames">
        <input type="radio" id="day" name="time-frame" value="day" checked={timeFrame === 'day'} onChange={handleTimeFrameChange} />
        <label htmlFor="day">Day</label>
        <br/>
        <input type="radio" id="week" name="time-frame" value="week" checked={timeFrame === 'week'} onChange={handleTimeFrameChange} />
        <label htmlFor="week">Week</label>
        <br/>
        <input type="radio" id="month" name="time-frame" value="month" checked={timeFrame === 'month'} onChange={handleTimeFrameChange} />
        <label htmlFor="month">Month</label>
        <br/>
      </div>
    </div>
  );
};

export default Sidebar;
