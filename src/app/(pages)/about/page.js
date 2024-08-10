
import Form from "@/components/Form";
import ShowBooks from "@/components/Books";

const getData = async () => {
  const req = await fetch(
    "https://online-json-server-api.up.railway.app/project/66b5ec4a340dd55056fb6a0a/books",
    {
      next: {
        revalidate: 0,
      },
    }
  );
  const data = await req.json();

  return data;
};

async function about() {
  const books = await getData();
  return (
    <div className="min-h-screen w-full">
      <div className="mx-auto w-full">
        <Form />
        <ShowBooks books={books} />
      </div>
    </div>
  );
}

export default about;
