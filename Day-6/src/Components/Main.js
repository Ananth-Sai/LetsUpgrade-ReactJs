import {useEffect, useState} from 'react';

function Main () {

    const[articles,setarticles] = useState([]);
    const [search,setSearch] = useState("tesla")

    useEffect (() => {
       
        let url =" https://newsapi.org/v2/everything?q=tesla&from=2021-06-17&sortBy=publishedAt&apiKey=cbf212be51b64878b46e798303ecc743"
        fetch(url)
        .then((response) => response.json())
        .then((news) => {
            console.log(news.articles);
            setarticles(news.articles);
        })

    },[])

    function readValue (value) {
        setSearch(value);
    }

    function searchNews() {

        let url =`https://newsapi.org/v2/everything?q=${search}&from=2021-06-17&sortBy=publishedAt&apiKey=cbf212be51b64878b46e798303ecc743`
        fetch(url)
        .then((response) => response.json())
        .then((news) => {
            console.log(news.articles);
            setarticles(news.articles);
        })

    }

    useEffect (() => {
       
        let url =`https://newsapi.org/v2/everything?q=${search}&from=2021-06-17&sortBy=publishedAt&apiKey=cbf212be51b64878b46e798303ecc743`
        fetch(url)
        .then((response) => response.json())
        .then((news) => {
            console.log(news.articles);
            setarticles(news.articles);
        })

    },[search])

    return (
        <div className="container">
            <div className="padd">

                <div className="filter">
                    <input type="search" onChange={(event) =>{readValue(event.target.value)}} placeholder="Enter Topic"/>
                    <button className="btn" onClick={searchNews}>Search</button>
                </div>

                <h1>All news</h1>
                {
                    articles.length==0?( <h2>No data available</h2> ) :
                    articles.map((article,index) =>(
                        <div key={index} className="article">
                            <div className="padd-article">
                                <div className="news-img">
                                    <img src={article.urlToImage}/>
                                </div>
                                <div className="news-detail">
                                    <h2>{article.title}</h2>
                                    <p>{article.author}</p>
                                    <p>{article.description}</p>
                                    <p>
                                        <a href = {article.url} target="_blank">
                                            <button className="btn">Read Full Article</button>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Main;