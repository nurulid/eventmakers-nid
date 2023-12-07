import { EventCard } from "./EventCard";

async function getEvents() {
  const res = await fetch("https://eventmakers-api.vercel.app/api/events", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default async function ListEvents() {
  const { data } = await getEvents();
  return (
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
  );
}
