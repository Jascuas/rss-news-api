


import Navbar from '../components/navBar';
import NewsCard from '../components/newsCard';

function NewsList() {
    return (
        <div className="app">
        <Navbar />
        <div className="p-4 w-9/12 m-auto">
            <h2 className="text-2xl py-2">Recent News</h2>
            <div className="grid grid-cols-1 gap-4 pt-4">

            </div>
        </div>
    </div >
    )

}

export default NewsList