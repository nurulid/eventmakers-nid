import { EventCard } from "@/components/events/components/EventCard";

async function getMyEvents() {
  // TODO: CHANGE THE STATIC USERID
  const res = await fetch(
    "https://eventmakers-api.vercel.app/api/events?userid=bb521684-5f99-4817-b0d0-afc84d56178f",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
}

export default async function Page() {
  const { data } = await getMyEvents();
  return (
    <>
    <h1 className="text-4xl font-semibold mb-10">My Events</h1>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {data.map(({ id, image, name, location, date, isBanned, participants }) => {
        return (
          <EventCard
            key={id}
            id={id}
            image={image}
            name={name}
            location={location}
            date={date}
            isBanned={isBanned}
            participants={participants}
          />
        );
      })}
    </div>
    </>
  );
}