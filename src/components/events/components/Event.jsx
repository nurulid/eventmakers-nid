"use client";

import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const Event = ({ eventData }) => {
  const isParticipants = eventData.participants.length > 0;
  const bodyEl = document.body;
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");

  //   console.log(bodyEl);

  // why do we need to use useEffect ???
  //   useEffect(() => {
  //     if (setIsOpen !== true) {
  //       bodyEl.classList.toggle("overflow-hidden");
  //     }
  //   });

  async function handleJoinEvent() {
    const res = await fetch(
      "https://eventmakers-api.vercel.app/api/join-events",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          email: userEmail,
          phone: userPhone,
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
    setUserName("");
    setUserEmail("");
    setUserPhone("");
    setIsOpen(false); // closed join form popup
    router.refresh();
    setTimeout(() => router.push("/events/invitation"), 1000);
    // console.log(data);
  }

  return (
    <div id="body" className="relative">
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
                  value={userName}
                  variants="bordered"
                  color="warning"
                  label="Name"
                  onChange={(e) => setUserName(e.target.value)}
                />
                <Input
                  type="email"
                  value={userEmail}
                  color="warning"
                  label="Email"
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                <Input
                  value={userPhone}
                  color="warning"
                  label="Phone"
                  onChange={(e) => setUserPhone(e.target.value)}
                />
              </div>
              <Button
                className="bg-black py-6 rounded-full text-white shadow-lg text-md font-semibold w-full"
                isLoading={loading}
                onClick={handleJoinEvent}
                spinner={
                  <svg
                    className="animate-spin h-5 w-5 text-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      fill="currentColor"
                    />
                  </svg>
                }
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
