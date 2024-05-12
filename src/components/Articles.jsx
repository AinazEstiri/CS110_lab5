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

    function leftArticles(articlesToUse) {
        const finishedArticles = []
        for (let i = 0; i < articlesToUse.length; i++) {
            if (i % 2 === 0) {
                finishedArticles.push(
                    <Article index={i} article={articlesToUse[i]}/>
                )
            }
        }
        return (
            <div style={{height: '100%', justifyContent: "space-evenly"}} className={'vertDiv'}>
                {finishedArticles}
            </div>
        )
    }

    function rightArticles(articlesToUse) {
        const finishedArticles = []
        for (let i = 0; i < articlesToUse.length; i++) {
            if (i % 2) {
                finishedArticles.push(
                    <Article index={i} article={articlesToUse[i]}/>
                )
            }
        }
        return (
            <div style={{height: '100%', justifyContent: "space-evenly"}} className={'vertDiv'}>
                {finishedArticles}
            </div>
        )
    }

    function generateArticles() {
        const articlesToUse = [...articleData].slice(pageNumber * 6, articleLimit - (pageNumber * 6)) // ugly pagination lol
        return (
            <div style={{height: "fit-content", flexBasis: '100%', justifyContent: 'center'}} className={'horDiv'}>
                {[leftArticles(articlesToUse), rightArticles(articlesToUse)]}
            </div>
        )
    }

    return (
        <div className={'list-of-headlines'}>
            {generateArticles()}
        </div>
    )
}