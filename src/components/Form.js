"use client";

function Form() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const author = formData.get("author");
    const photoURL = formData.get("photoURL");
    const url =
      "https://online-json-server-api.up.railway.app/project/66b5ec4a340dd55056fb6a0a/books/";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, author, photoURL }),
      });

      if (!response.ok) {
        throw new Error(`Server javobi xato: ${response.status}`);
      }

      window.location.reload();
      e.target.reset();
    } catch (error) {
      console.error("Fetch so'rovi bajarilmadi:", error);
      alert("Xatolik yuz berdi, iltimos keyinroq qayta urinib ko'ring.");
    }
  };

  return (
    <div className="w-[800px] mx-auto border-black border mt-16 items-center rounded-lg py-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full"
      >
        <div className="flex flex-col gap-2 w-full text-center">
          <label className="px-5 text-lg font-semibold" htmlFor="title">
            Title :{" "}
          </label>
          <input
            required
            name="title"
            className="py-2 mb-3 border hover:bg-blue-200  border-black px-3 mx-auto focus:border-none rounded-[25px] w-full max-w-[350px]"
            type="text"
            id="title"
          />
        </div>
        <div className="flex flex-col gap-2 w-full text-center">
          <label className="px-5 text-lg font-semibold" htmlFor="author">
            Author :{" "}
          </label>
          <input
            required
            name="author"
            className="py-2 hover:bg-blue-200 mb-3 border border-black px-3 mx-auto focus:border-none rounded-[25px] w-full max-w-[350px]"
            type="text"
            id="author"
          />
        </div>
        <div className="flex flex-col gap-2 w-full text-center">
          <label className="px-5 text-lg font-semibold" htmlFor="URL">
            Book's Photo URL :{" "}
          </label>
          <input
            required
            name="photoURL"
            className="py-2 hover:bg-blue-200 mb-3 border border-black px-3 mx-auto focus:border-none rounded-[25px] w-full max-w-[350px]"
            type="url"
            id="URL"
          />
        </div>
        <div>
          <button className="mt-5 hover:bg-blue-300 active:bg-black active:text-white py-2 px-10 rounded-3xl text-white font-semibold bg-black bg-opacity-35">
            Create a New Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
