

import { useLocation } from 'react-router-dom'

import Navbar from '../components/navBar';

function News() {
    const location = useLocation()
    const { news } = location.state
    return (
        <>
        <Navbar />
            <div className="p-4 w-9/12 m-auto">
                <h2 className="text-2xl py-2">{news.pubDate}</h2>
                <div className="grid grid-cols-1 gap-5 pt-4 " dangerouslySetInnerHTML={{ __html: news.content }}>
                    
                </div>
            </div>
        </>
    )
}

export default News