const Gallery = () => {
  return (
      <section className="py-12 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8">Gallery</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 px-4">
          {[
            "https://cdn.pixabay.com/photo/2020/02/02/17/24/travel-4813658_1280.jpg",
            "https://cdn.pixabay.com/photo/2014/06/29/19/30/agra-fort-379666_1280.jpg",
            "https://cdn.pixabay.com/photo/2018/09/13/21/43/temple-of-heaven-3675835_1280.jpg",
            "https://cdn.pixabay.com/photo/2021/10/10/20/33/mehtab-bagh-6698669_1280.jpg",
            "https://cdn.pixabay.com/photo/2017/10/02/18/19/taj-mahal-entrance-gate-2809693_1280.jpg",
            "https://cdn.pixabay.com/photo/2020/03/14/17/11/architecture-4931240_1280.jpg",
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gallery ${i}`}
              className="rounded-xl shadow"
            />
          ))}
        </div>
      </section>
  )
}

export default Gallery