import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


import Navbar from '../components/navBar';
import NewsCard from '../components/newsCard';

function createRequest() {
    var url = "http://feeds.weblogssl.com/xataka2";
    var corsUrl = "https://api.rss2json.com/v1/api.json?rss_url=";
    var xhr = new XMLHttpRequest();
    xhr.open('GET', corsUrl + url, true);
    xhr.send();
    return new Promise((resolve) => {
  
      xhr.onreadystatechange = () => {
  
        if (xhr.readyState !== 4) {
            return;
          }
        if (xhr.status === 200) {
          console.log('SUCCESS');
          resolve(JSON.parse(xhr.responseText));
        } else {
          console.warn('request_error');
        }
      };

    });
  }


function NewsList() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newsList, setNewsList] = useState(null);


    useEffect(() => {
        if (isLoading) {
            try {
                createRequest().then((data) => {
                    if (data) {
                        console.log(data.items)
                        setNewsList(data.items)
                        setIsLoading(false)
                        setError(null);
                    } else {
                        setError("There was an error getting the news");
                    }

                })
            } catch (error) {
                setError("We couldn't make the request to get the news");
            }
        }
    }, [isLoading])

    return (
        <div className="app">
            <Navbar />
            <div className="p-4 w-9/12 m-auto">
                <h2 className="text-2xl py-2">Noticias recientes</h2>
                <div className="grid grid-cols-1 gap-10 pt-4 ">
                    {newsList &&
                        newsList?.map(news => (
                            <Link to="/news" state={{news}} key={news.pubDate}>
                                <NewsCard news={news}/>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div >
    )

}

export default NewsList