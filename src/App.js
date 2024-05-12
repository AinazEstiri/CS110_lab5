import './styles/style.css';
import Title from "./components/Title";
import Sidebar from "./components/Sidebar";
import {useEffect, useState} from "react";
import Article from "./components/Article";
import Articles from "./components/Articles";

function App() {

    const [sortBy, setSortBy] = useState('viewed')
    const [timeFrame, setTimeFrame] = useState('day')
    const [articleLimit, setArticleLimit] = useState(15)
    const [pageNumber, setPageNumber] = useState(0)

  return (
      <div className={'back-ground'}>
        <div className="App">
            <Title sortBy={sortBy} timeFrame={timeFrame}/>
            <div className={'horDiv'}>
                <Sidebar sortBy={sortBy} setSortBy={setSortBy} timeFrame={timeFrame} setArticleLimit={setArticleLimit} articleLimit={articleLimit} setTimeFrame={setTimeFrame}/>
                <Articles articleLimit={articleLimit} pageNumber={pageNumber} sortBy={sortBy} timeFrame={timeFrame}/>
            </div>
        </div>
      </div>
  );
}

export default App;
