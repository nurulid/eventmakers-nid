"use client";

import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useUser } from "@/components/auth/hooks/useUser";

export const Event = ({ eventData }) => {
  const { user } = useUser();
  const isUser = user?.role === "USER";
  const participants = eventData.participants;
  const isParticipants = participants.length > 0;
  // const bodyEl = document.body;
  const router = useRouter();
  // const [banned, setBanned] = useState(eventData.isBanned);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [joinEvent, setJoinEvent] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleJoinChange = (e) => {
    const { name, value } = e.target;
    setJoinEvent({
      ...joinEvent,
      // [e.target.name]: e.target.value
      [name]: value,
    });
  };

  // console.log(userName);

  // why do we need to use useEffect ???
  // useEffect(() => {
  //   if (setIsOpen !== true) {
  //     bodyEl.classList.toggle("overflow-hidden");
  //   }
  // });

  async function handleJoinEvent() {
    setLoading(true);
    const { name, email, phone } = joinEvent;
    const res = await fetch(
      "https://eventmakers-api.vercel.app/api/join-events",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          eventId: eventData.id,
        }),
      }
    );
    const data = await res.json();

    if (!data) {
      setLoading(false);
      toast.error("Error -..-");
      return;
    }

    setLoading(false);
    toast.success("Join event successfully!");
    setJoinEvent("");
    setIsOpen(false); // closed join form popup
    router.refresh();
    setTimeout(() => router.push("/events/invitation"), 1000);
    // console.log(data);
  }

  // async function handleBanned() {
  //   if (!banned === true) {
  //     setBanned(false);
  //   } else {
  //     setBanned(true);
  //   }

  //   const res = await fetch("https://eventmakers-api.vercel.app/api/events", {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       id: eventData.id,
  //       isBanned: !banned,
  //     }),
  //   });
  //   const data = await res.json();
  //   console.log(data);
  //   router.refresh();
  // }

  return (
    <div className="relative">
      {/* Single Event */}
      <div>
        <div className="p-8 mb-10 bg-gray-100 rounded-xl">
          <Image
            src={"/event-thumb.png"} // temporary using static
            width={500}
            height={100}
            alt="Picture of the author"
            className="rounded-tl-xl rounded-tr-xl object-cover mx-auto"
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-5 mx-auto max-w-[800px]">
          <div className="space-y-6">
            <h2 className="font-bold text-3xl">{eventData.name}</h2>
            <div>
              <h3 className="font-semibold text-xl">Date</h3>
              <div className="text-gray-400">{eventData.date}</div>
            </div>
            <div>
              <h3 className="font-semibold text-xl">Location</h3>
              <div className="text-gray-400">{eventData.location}</div>
            </div>
            <div>
              <h3 className="font-semibold text-xl">About event</h3>
              <div className="text-gray-400">{eventData.description}</div>
            </div>
          </div>

          <div className="space-y-6 px-0 sm:px-5">
            {/* {isUser ? (
              <h3
                onClick={handleBanned}
                className="text-2xl text-center font-bold text-blue-600"
              >
                <span className={banned ? "text-red-700" : ""}>
                  BAN THIS EVENT
                </span>
              </h3>
            ) : null} */}

            <div className="p-6 border border-gray-200 rounded-xl text-center space-y-6">
              <div className="text-2xl font-semibold">Are you interest?</div>
              <Button
                className="bg-black py-6 rounded-full text-white shadow-lg text-md font-semibold w-full"
                onClick={() => setIsOpen(true)}
              >
                Join event
              </Button>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl text-center space-y-4">
              <div className="text-2xl font-semibold mb-5">Participants:</div>
              {isParticipants ? (
                <div className="grid grid-cols-4 mt-2 items-center gap-y-4">
                  {eventData.participants.map(({ id, name }) => {
                    const participantsName = name;
                    const nameShort = participantsName.slice(0, 3);
                    const fullName = participantsName.split(" ");
                    const firstName = fullName[0];
                    return (
                      <div key={id} className="flex flex-col items-center">
                        <div
                          className="avatar"
                          key={id}
                          title={participantsName}
                        >
                          {nameShort}
                        </div>
                        <div className="text-xs text-gray-500 mt-2 capitalize">
                          {firstName}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-gray-300 text-sm py-3">No participant</div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* END OF: Single Event */}

      {/* Join Form Pop Up */}
      {isOpen ? (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-[#8c8c8cd6] py-10 backdrop-blur-sm">
          <div className="flex justify-center items-center h-full">
            <div className="p-16 space-y-6 max-w-[600px] bg-gray-100 rounded-xl relative">
              <h3 className="text-2xl text-center">
                Please fill this form to join the event 😺
              </h3>
              <p className="text-center">
                You will get a <span className="font-bold">surprise</span> after
                joining the event.
              </p>
              <div className="space-y-5">
                <Input
                  name="name"
                  variants="bordered"
                  color="warning"
                  label="Name"
                  onChange={handleJoinChange}
                />
                <Input
                  type="email"
                  name="email"
                  color="warning"
                  label="Email"
                  onChange={handleJoinChange}
                />
                <Input
                  name="phone"
                  color="warning"
                  label="Phone"
                  onChange={handleJoinChange}
                />
              </div>
              <Button
                className="bg-black py-6 rounded-full text-white shadow-lg text-md font-semibold w-full"
                isLoading={loading}
                isDisabled={loading}
                onClick={handleJoinEvent}
              >
                Join
              </Button>
              <div
                className="cursor-pointer hover:bg-gray-200 rounded-full text-md font-bold w-8 h-8 text-center leading-8 absolute top-0 right-4 transition-all"
                onClick={() => setIsOpen(false)}
              >
                X
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* END OF: Join Form Pop Up */}
    </div>
  );
};
