// Article.js
import React from 'react';

const Article = ({ article }) => {
  return (
    <div className="article vertDiv">
      <div className="title-div">
        <text className="title-text">{article.title}</text>
        <text className="date-text">{article.published_date}</text>
      </div>
      <div className="content-wrapper">
        <img className="rounded-img" src={article.media[0]["media-metadata"][1].url} alt={article.title} />
        <text className="desc-text">{article.abstract}</text>
      </div>
    </div>
  );
};

export default Article;
