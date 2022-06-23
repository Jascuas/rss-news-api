

export default function newsCard({news}) {

    let doc = new DOMParser().parseFromString(news.content, "text/html");
    let description = doc.querySelectorAll("p")[1].textContent.slice(0, 150)
    console.log(doc.querySelectorAll("p")[1])
    return (
        <div className="border shadow rounded-xl overflow-hidden">
            <div className="p-4 bg-black">
                <p className="text-xl font-bold text-white">{news.title} </p>
            </div>
            <img src={news.thumbnail} alt={news.title} className="w-full" />
            <div className="p-4 bg-slate-500">
                <p className="text-base font-bold text-white">{description} <span className="text-sm text-blue-200"> ... Leer más</span></p>
            </div>
        </div>
    )
}
