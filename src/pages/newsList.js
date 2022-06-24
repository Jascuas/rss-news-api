import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


import Navbar from '../components/navBar';
import NewsCard from '../components/newsCard';
import SearchForm from '../components/searchForm';


// create request to the API
function createRequest() {
    var url = "https://www.xatakandroid.com/index.xml";
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
                resolve(JSON.parse(xhr.responseText));
            } else {
                console.warn('request_error');
            }
        };
    });
}


function NewsList() {
    const [newsList, setNewsList] = useState(null);
    const [filterList, setFilterList] = useState(null);

    // add data from the reqquest to the list
    useEffect(() => {
        try {
            createRequest().then((data) => {
                if (data) {
                    setNewsList(data.items)
                    setFilterList(data.items)
                } else {
                    console.error("There was an error getting the news");
                }

            })
        } catch (error) {
            console.error("We couldn't make the request to get the news");
        }
    }, [])

    // filter data by tittle.
    // if no tittle add the requested data
    const setTitleFilter = (titleFilter) => {
        if (titleFilter === "" || !titleFilter) {
            setFilterList(newsList)
        }
        else {
            setFilterList(newsList.filter(news => { return news.title.search(titleFilter) > 0 }))
        }

    }

    return (
        <div className="app">
            {/* Nabvar */}
            <Navbar />

            {/* Content area */}
            <div className="p-4 w-9/12 m-auto">
                
                {/* Left: Title */}
                <div className="mb-4 sm:mb-0">
                    <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">Noticias recientes</h1>
                </div>

                {/* Right: Actions */}
                <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

                    {/* Search form */}
                    <SearchForm placeholder="Buscar por título" setTitleFilter={setTitleFilter} />
                    
                </div>

                {/* News */}
                <div className="grid grid-cols-1 gap-10 pt-4 ">
                    {filterList &&
                        filterList?.map(news => (
                            <Link to="/news" state={{ news }} key={news.pubDate}>
                                <NewsCard news={news} />
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div >
    )

}

export default NewsList