import { useRef, useEffect } from "react";

import { useLocation } from 'react-router-dom'

import Navbar from '../components/navBar';


function News() {
    const location = useLocation()
    const { news } = location.state
    const myContainer = useRef(null);


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
            <Navbar />
            <div className="p-4 w-9/12 m-auto" ref={myContainer}>
                <h2 className="text-2xl py-2">Fecha de publicacion: {news.pubDate}</h2>
                <div className="grid grid-cols-1 gap-5 pt-4" dangerouslySetInnerHTML={{ __html: news.content }}>

                </div>
            </div>
        </>
    )
}

export default News