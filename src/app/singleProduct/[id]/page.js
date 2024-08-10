import React from "react";

const getData = async (id) => {
  const req = await fetch("https://dummyjson.com/products/" + id);
  const data = await req.json();

  return data;
};

async function SingleProduct({ params }) {
  const data = await getData(params.id);

  return (
    <div className="product-details lg:flex flex-col justify-center  flex max-w-6xl gap-12 mx-auto p-4">
      <div className="product-image  lg:w-[500px] lg:h-[400px] border rounded-lg">
        <figure>
          <img className="" src={data.thumbnail} alt={data.title} />
        </figure>
      </div>
      <div className="product-info gap-16">
        <h1 className="product-title text-4xl font-bold">{data.title}</h1>
        <p className="product-description mt-5 text-xl">{data.description}</p>
        <p className="product-category mt-5 ">Category: {data.category}</p>
        <p className="product-price mt-5 text-xl">Price: ${data.price}</p>
        <p className="product-stock mt-5 text-xl">Stock: {data.stock}</p>
        <div className="flex items-center mt-5">
          <p className="product-rating  text-xl">Rating:</p>
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${
                index < Math.round(data.rating)
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
  );
}

export default SingleProduct;
