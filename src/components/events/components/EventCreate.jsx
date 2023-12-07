"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input } from "@nextui-org/react";
import { useUser } from "@/components/auth/hooks/useUser";
import toast from "react-hot-toast";

export const EventCreate = () => {
  const { user } = useUser();
  const userId = user?.id;
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [event, setEvent] = useState({
    name: "",
    description: "",
    location: "",
    date: "",
  });

  const handleEventChange = (e) => {
    const {name, value} = e.target; // decluter or shorthand
    setEvent({
      ...event,
      // [e.target.name]: e.target.value, 
      [name]: value,
    });
  };

  async function handleCreateEvent() {
    setLoading(true);
    const { name, description, location, date } = event;
    const res = await fetch("https://eventmakers-api.vercel.app/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        location,
        date,
        authorId: userId,
      }),
    });
    const data = await res.json();

    if (!data) {
      setLoading(false);
      toast.error("Error -..-");
      return;
    }

    setLoading(false);
    toast.success("Event created successfully!");
    setEvent("");
    router.refresh();
    setTimeout(() => router.push("/dashboard/events"), 1000);
    // console.log(data);
  }
  return (
    <>
      <h1 className="text-4xl mb-7 text-center">
        Fill this form to create your event
      </h1>
      <div className="space-y-5 max-w-[500px] mx-auto">
        <Input name="name" label="Event name" onChange={handleEventChange} />
        <Input
          name="description"
          label="Event description"
          onChange={handleEventChange}
        />
        <Input
          name="location"
          label="Event location"
          onChange={handleEventChange}
        />
        <Input name="date" label="Event date" onChange={handleEventChange} />
        <Button
          className="bg-black py-6 rounded-full text-white shadow-lg text-md font-semibold w-full"
          isLoading={loading}
          isDisabled={loading}
          onClick={handleCreateEvent}
        >
          Add event
        </Button>
      </div>
    </>
  );
};
