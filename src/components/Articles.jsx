import {useEffect, useState} from "react";
import '../styles/style.css'
import Article from "./Article";
const APIKEY = "BLAUIFi2I2bQ93DShBmkAG50KGUnzMTk"
const BASE_URL = "https://api.nytimes.com/svc/mostpopular/v2";

const mapPeriod = {
    day: 1,
    week: 7,
    month: 30
}

export default function Articles({sortBy, timeFrame, articleLimit, pageNumber, setPageNumber}) {

    const [articleData, setArticleData] = useState([])

    useEffect(() => {
        triggerSearch().then()
    }, [sortBy, timeFrame, articleLimit]);

    async function triggerSearch() {
        try {
            const data = await fetch(BASE_URL + `/${sortBy}/${mapPeriod[timeFrame]}.json?api-key=${APIKEY}`)
            if (!data.ok) {
                console.log(data.status)
                console.log(data.statusMessage)
                return
            }
            // for some reason the api now returns 16 results. now force limit to 15
            setArticleData((await data.json()).results.slice(0, articleLimit))
        } catch (e) {
            console.log(e.message)
        }
    }


    function generateArticles() {
        const finishedArticles = []
        let tempArticle; // holds a given row of articles for rendering
        const articlesToUse = [...articleData].slice(pageNumber * 6, (pageNumber * 6) + 6) // ugly pagination lol
        let count = pageNumber * 6

        while ((tempArticle = articlesToUse.splice(0, 2)).length > 0) {
            let tempPart2 = [] // i need better names for variables
            let i;
            for (i = 0; i < tempArticle.length; i++) {
                tempPart2.push(<Article index={count++} article={tempArticle[i]}/>)
            }
            if (tempPart2.length % 2) {
                tempPart2.push(
                    // placeholder to fix formatting...
                    <div style={{flexBasis: '100%', padding: '10px', marginLeft: '10px', marginRight: '10px'}}></div>
                )
            }
            finishedArticles.push(
                <div style={{height: "fit-content", margin: '0 0 20px 0'}} className={'horDiv'}>
                    {tempPart2}
                </div>
            )
        }
        return finishedArticles
    }

    function generatePageSelector() {
        const pageSelections = []
        for (let i = 0; i < (articleLimit / 6); i++) {
            pageSelections.push(
                <button className={'page-button'} onClick={() => setPageNumber(i)} key={i}>{i + 1}</button>
            )
        }
        return (
            <div style={{width: '100%', justifyContent: 'center'}} className="horDiv">
                {pageSelections}
            </div>
        )
    }

    return (
        <div className={'list-of-headlines'}>
            {generateArticles()}
            {generatePageSelector()}
        </div>
    )
}