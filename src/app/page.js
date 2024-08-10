import Link from "next/link";

const getData = async () => {
  const req = await fetch("https://dummyjson.com/products");
  const data = await req.json();

  return { data };
};

async function Home() {
  const { data } = await getData();
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl mb-10 text-center">Products</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.products.map((prod) => {
          return (
            <Link key={prod.id} href={`singleProduct/${prod.id}`}>
              <div className="max-w-xs h-[400px] mx-auto rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  className="w-full h-48 object-cover"
                  src={prod.thumbnail}
                  alt={prod.title}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{prod.title}</div>
                  <p className="text-gray-700 text-base">Brand: {prod.brand}</p>
                  <p className="text-gray-700 text-base">
                    Category: {prod.category}
                  </p>
                  <p className="text-gray-700 text-base">
                    Price: ${prod.price}
                  </p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${
                          index < Math.round(prod.rating)
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927a.75.75 0 011.902 0l2.162 4.382 4.842.705a.75.75 0 01.416 1.279l-3.502 3.415.826 4.816a.75.75 0 01-1.088.791L10 15.347l-4.317 2.268a.75.75 0 01-1.088-.791l.826-4.816-3.502-3.415a.75.75 0 01.416-1.279l4.842-.705L9.049 2.927z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
