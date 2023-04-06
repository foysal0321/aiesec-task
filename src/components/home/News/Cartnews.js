import React from 'react';
import './News.css'

const Cartnews = ({news}) => {
    console.log(news);
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={news.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{news.source}</h2>
                <p>{news.headline}</p>
                <p>{news.datetime}</p>
                
            </div>
            </div>
        </div>
    );
};

export default Cartnews;