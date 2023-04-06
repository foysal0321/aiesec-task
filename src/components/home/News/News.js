import React, { useEffect, useState } from 'react';
import Cartnews from './Cartnews';
import './News.css'

const News = () => {
    const [news,setnews] = useState([])
    useEffect(()=>{
        fetch(`https://cloud.iexapis.com/stable/stock/aapl/news/last?token=${process.env.REACT_APP_SECRET_KEY}`)
        .then(res=> res.json())
        .then(data=> setnews(data))
    },[])

    //console.log(news);
    return (
        <div>
            <div className="news py-12 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                {
                    news.map((n,i)=> <Cartnews
                    news={n}
                    key={i}
                    />
                    )
                }
            </div>
        </div>
    );
};

export default News;