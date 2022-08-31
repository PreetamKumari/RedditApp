import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import Cards from './components/cards/Cards'
import Filters from './components/filters/Filters'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CardDetails } from './components/cards/CardDetails'

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:id" element={<CardDetails/>}/>
    </Routes>
    </BrowserRouter>
  )
}

const Home = () => {
  let [redditData, updateRedditData] = useState([]);
  let [allData, updateAllData] = useState([])

  let api = `https://www.reddit.com/r/pics/.json?jsonp`;

  useEffect(()=>{
    (async function(){
      let result = await fetch(api).then(res=>res.json())
      updateRedditData(result.data.children)
      updateAllData((result.data.children))
    })();
  }, [api])

  return (
    <div className="d-flex flex-column align-items-center">
        <h1 className='ubuntu my-5'>
          Reddit <span className="text-primary">Wiki</span>
        </h1>
        <div className="col-4 mb-5">
            <Filters allData={allData} redditData={redditData} updateRedditData={updateRedditData} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <Cards page="/"
                redditData = {redditData}/>
              </div>
            </div>
            
          </div>
        </div>
    </div>
  );
}

export default App;
