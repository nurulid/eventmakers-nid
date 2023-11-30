async function getEvents() {
  const res = await fetch("https://eventmakers-api.vercel.app/api/events", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default async function Home() {
  const { data } = await getEvents();
  return (
    <>
      <div className="py-6 sm:py-10 px-4 sm:px-20 text-center">
        <p className="mb-3 font-semibold text-yellow-600">EventMakers</p>
        <h1 className="text-5xl sm:text-[5rem] font-serif font-bold leading-tight">
          Let's Join The Event You Want. GO!
        </h1>
      </div>

      <div>
        {data.map((item) => {
          return <div>{item.name}</div>
        })}
      </div>
    </>
  );
}
