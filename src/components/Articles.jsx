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

export default function Articles({sortBy, timeFrame, articleLimit, pageNumber}) {

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
            setArticleData((await data.json()).results)
        } catch (e) {
            console.log(e.message)
        }
    }
    function generateArticles() {
        const finishedArticles = []
        let tempArticle; // holds a given row of articles for rendering
        const articlesToUse = [...articleData].slice(pageNumber * 6, articleLimit - (pageNumber * 6)) // ugly pagination lol
        let count = 0


        while ((tempArticle = articlesToUse.splice(0, 2)).length > 0) {
            let tempPart2 = [] // i need better names for variables
            for (let i = 0; i < tempArticle.length; i++) {
                tempPart2.push(<Article index={count++} article={tempArticle[i]}/>)
            }
            finishedArticles.push(
                <div style={{height: "fit-content", margin: '0 0 20px 20px'}} className={'horDiv'}>
                    {tempPart2}
                </div>
            )
        }
        return finishedArticles
    }

    return (
        <div className={'list-of-headlines'}>
            {generateArticles()}
        </div>
    )
}