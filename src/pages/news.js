import { useRef, useEffect } from "react";

import { useLocation, Link } from 'react-router-dom'

import Navbar from '../components/navBar';


function News() {
    // use location to get the info of the clicked news
    const location = useLocation()
    const { news } = location.state
    const myContainer = useRef(null);

    // once loaded the news content add my own clases
    useEffect(() => {
        const newsHtml = myContainer.current

        let footer = newsHtml.querySelector(".feedflare")
        footer?.classList.add('flex', 'justify-center')

        let principalP = newsHtml.querySelectorAll("P")[0]
        principalP?.classList.add('justify-self-center')

        let images = newsHtml.querySelectorAll("img")
        images?.forEach(img => {
            img.classList.add('rounded-lg', 'shadow-lg')
        })

        let footerImages = footer.querySelectorAll("img")
        footerImages?.forEach(img => {
            img.classList.remove('rounded-lg', 'shadow-lg')
        })

        let sumary = newsHtml.querySelector(".desvio-summary")
        sumary?.classList.add('text-sm')


    }, []);


    return (
        <>

            {/* Nabar */}
            <Navbar />
            {/* Left: Title */}
            <div className="p-4 w-9/12 m-auto">
                <Link to={{ pathname: "/" }}><h2 className="text-xl py-2">← Volver a las noticias</h2></Link>
            </div>

            
            {/* Use Ref to this container */}
            <div className="p-4 w-9/12 m-auto" ref={myContainer} >

                {/* Left: Title */}
                <div className="mb-4 sm:mb-0">
                    <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">Fecha de publicacion: {news.pubDate}</h1>
                </div>

                {/* RSS CONTENT */}
                <div className="grid grid-cols-1 gap-5 pt-4" dangerouslySetInnerHTML={{ __html: news.content }}>

                </div>

            </div>

        </>
    )
}

export default News