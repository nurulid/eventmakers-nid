async function getEvent() {
    // TODO: CHANGE THE STATIC ID
    const res = await fetch(
      `https://eventmakers-api.vercel.app/api/events/${id}`,
      {
        cache: "no-store",
      }
    );
    const data = await res.json();
    return data;
  }
  
  export default async function Page({params}) {
    const { id } = params;
    const { data } = await getEvent(id);
    const eventData = data[0];
    return <div>
      <h1>Single Event</h1>
      <div>{eventData.name}</div>
    </div>;
  }
  