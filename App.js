// App.js
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Title from './components/Title';
import Article from './components/Article';

const API_KEY = "YOUR_API_KEY";
const BASE_URL = "https://api.nytimes.com/svc/mostpopular/v2";

const App = () => {
  const [sortBy, setSortBy] = useState("viewed");
  const [timeFrame, setTimeFrame] = useState("day");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/${sortBy}/${mapPeriod[timeFrame]}.json?api-key=${API_KEY}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data.results);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchData();
  }, [sortBy, timeFrame]);

  const mapPeriod = {
    day: 1,
    week: 7,
    month: 30
  };

  return (
    <div id="app" className="container">
      <Sidebar sortBy={sortBy} setSortBy={setSortBy} timeFrame={timeFrame} setTimeFrame={setTimeFrame} />
      <div className="list-of-headlines">
        <Title sortBy={sortBy} timeFrame={timeFrame} />
        <div className="articles">
          {articles.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
