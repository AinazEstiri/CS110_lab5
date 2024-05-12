// Article.js
import React from 'react';

const Article = ({ article, index }) => {

    function getImage(article) {
        try {
            return (
                <img className="rounded-img" src={article.media[0]["media-metadata"][1].url}
                     alt={article.title}/>
            )
        } catch (e) {
            return (
                <img className="rounded-img" src={require("../public/error.png")}
                     alt={"error loading image"}/>
            )
        }
    }

    function generateArticle() {

        try {
            return (
                <div className="article vertDiv">
                    <div className="title-div">
                        <p className="title-text">{index + 1} {article.title}</p>
                        <p className="date-text">{article.published_date}</p>
                    </div>
                    <div className="horDiv">
                        {getImage(article)}
                        <div className="desc-text">{article.abstract}</div>
                    </div>
                </div>
            )
        } catch (e) {
            console.log(e.message)
            return (
                <div className="article vertDiv">
                    <div className="title-div">
                        <p className="title-text">{e.message}</p>
                        <p className="date-text">null</p>
                    </div>
                    <div className="horDiv">
                        <img className="rounded-img" src={require("../public/error.png")}
                             alt={"error loading image"}/>
                        <div className="desc-text">{article.abstract}</div>
                    </div>
                </div>
            )
        }
    }

    return generateArticle()
};

export default Article;
