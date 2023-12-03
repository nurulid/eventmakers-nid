import { Event } from "@/components/events/components/Event";

async function getEvent(id) {
  const res = await fetch(
    `https://eventmakers-api.vercel.app/api/events/${id}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
}

export default async function Page({ params }) {
  const { id } = params;
  const { data } = await getEvent(id);
  const eventData = data;

  return (
    <Event eventData={eventData}/>
  );
}
