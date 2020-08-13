import React from 'react';
import cssModule from './News.module.css'


function News(props) {
    return (
        <div className={cssModule.newsBox}>
            <p>News</p>
        </div>
    )

}

export default News;