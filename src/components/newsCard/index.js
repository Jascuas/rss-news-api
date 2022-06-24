

export default function newsCard({news}) {

    // Create html document to get the firts two lines of the description
    let doc = new DOMParser().parseFromString(news.content, "text/html");
    let description = doc.querySelectorAll("p")[1].textContent.slice(0, 150)

    return (
        // News Card
        <div className="border shadow rounded-xl overflow-hidden">

            {/* News Tittle */}
            <div className="p-4 bg-black">
                <p className="text-xl font-bold text-white">{news.title} </p>
            </div>

            {/* News Image */}
            <img src={news.thumbnail} alt={news.title} className="w-full" />

            {/* News Description */}
            <div className="p-4 bg-slate-500">
                <p className="text-base font-bold text-white">{description} <span className="text-sm text-blue-200"> ... Leer más</span></p>
            </div>
        </div>
    )
}
