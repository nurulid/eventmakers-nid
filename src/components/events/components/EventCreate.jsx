"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input } from "@nextui-org/react";

export const EventCreate = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDate, setEventDate] = useState("");

  async function handleCreateEvent() {
    const res = await fetch("https://eventmakers-api.vercel.app/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: eventName,
        description: eventDescription,
        location: eventLocation,
        date: eventDate,
        authorId: "bb521684-5f99-4817-b0d0-afc84d56178f", // TODO: CHANGE TO DINAMIC USERID
      }),
    });
    const data = await res.json();

    if (!data) {
      setLoading(false);
      console.log("Error -..-"); // TODO: CHANGE PAKE TOAST
      return;
    }

    setLoading(false);
    console.log("Event created successfully!"); // TODO: CHANGE PAKE TOAST
    setEventName(""); 
    setEventDescription("");
    setEventLocation("");
    setEventDate("");
    router.refresh();
    setTimeout(() => router.push("/dashboard/events"), 1000);
    // console.log(data);
  }
  return (
    <div className="space-y-5 max-w-[500px] mx-auto">
      <Input
        value={eventName}
        label="Event name"
        onChange={(e) => setEventName(e.target.value)}
      />
      <Input
        value={eventDescription}
        label="Event description"
        onChange={(e) => setEventDescription(e.target.value)}
      />
      <Input
        value={eventLocation}
        label="Event location"
        onChange={(e) => setEventLocation(e.target.value)}
      />
      <Input
        value={eventDate}
        label="Event date"
        onChange={(e) => setEventDate(e.target.value)}
      />
      <Button className="bg-black py-6 rounded-full text-white shadow-lg text-md font-semibold w-full" isDisabled={loading} onClick={handleCreateEvent}>
        Add event
      </Button>
    </div>
  );
};
