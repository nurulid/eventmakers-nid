import { EventCard } from "@/components/events/components/EventCard";
import { cookies } from "next/headers";

async function getMyEvents() {
  const cookieStore = cookies();
  const userId = cookieStore.get("id").value;
  // console.log(userId);

  const res = await fetch(
    `https://eventmakers-api.vercel.app/api/events?userid=${userId}`, 
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
        {data.map(
          ({ id, image, name, location, date, isBanned, participants }) => {
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
          }
        )}
      </div>
    </>
  );
}
