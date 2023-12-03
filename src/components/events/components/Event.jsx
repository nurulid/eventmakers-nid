import { Button } from "@nextui-org/react";
import Image from "next/image";

export const Event = ({ eventData }) => {
  const isParticipants = eventData.participants.length > 0;

  return (
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
        <div>
          <h2 className="font-bold text-3xl mb-6">{eventData.name}</h2>
          <div className="mb-6">
            <h3 className="font-semibold text-xl">Date</h3>
            <div className="text-gray-400">{eventData.date}</div>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-xl">Location</h3>
            <div className="text-gray-400">{eventData.location}</div>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-xl">About event</h3>
            <div className="text-gray-400">{eventData.description}</div>
          </div>
        </div>

        <div className="space-y-6 px-0 sm:px-5">
          <div className="p-6 border border-gray-200 rounded-xl text-center space-y-6">
            <div className="text-2xl font-semibold">Are you interest?</div>
            <Button className="bg-black py-6 rounded-full text-white shadow-lg text-md font-semibold w-full">
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
                    <div className="flex flex-col items-center">
                      <div className="avatar" key={id} title={participantsName}>
                        {nameShort}
                      </div>
                      <div className="text-xs text-gray-500 mt-2">
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
  );
};
