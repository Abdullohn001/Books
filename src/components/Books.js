"use client";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";

const handleDelete = (id) => {
  const url = `https://online-json-server-api.up.railway.app/project/66b5ec4a340dd55056fb6a0a/books/${id}`;

  fetch(url, {
    method: "DELETE",
  })
    .then(() => {
      alert("Book deleted successfully!");
      window.location.reload();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

function ShowBooks({ books }) {
  const [editingBook, setEditingBook] = useState(null);

  return (
    <div className="w-full flex flex-wrap container mt-16 mx-auto justify-center gap-4 pb-10">
      {books.data.map((book) => {
        return (
          <div key={book.id} className="p-2">
            <div className="card border h-[530px] w-72 p-4 shadow-xl">
              <figure className=" rounded-sm overflow-hidden">
                <img
                  className="w-full h-[350px]"
                  src={book.photoURL}
                  alt="Shoes"
                />
              </figure>

              <div className="card-body p-2 text-center">
                <h2 className="">
                  <span className="font-bold">Book name:</span>{" "}
                  <span className="capitalize"> {book.title}</span>
                </h2>
                <p>
                  <span className="font-bold"> Author:</span>{" "}
                  <span className="capitalize">{book.author}</span>
                </p>
              </div>
              <div className="flex w-full bg-black rounded-lg bg-opacity-35 h-[60px] justify-between pt-2 px-5">
                <button
                  onClick={() => handleDelete(book.id)}
                  className="w-full h-full"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5 h-[40px] w-full hover:text-red-500 hover:scale-110 hover:-rotate-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShowBooks;
