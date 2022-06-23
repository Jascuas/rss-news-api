

export default function newsCard({news}) {
    return (
        <div className="border shadow rounded-xl overflow-hidden">
            <img src={news.image} alt={news.title}className="rounded" />
            <div className="p-4 bg-black">
                <p className="text-2xl font-bold text-white">{news.title}</p>
            </div>
        </div>
    )
}
