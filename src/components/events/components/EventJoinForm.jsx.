import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import toast from "react-hot-toast";

export const EventJoinForm = ({ eventData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");

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

    setLoading(true);
    toast.success("Join event successfully!");
    // setUserName("");
    setIsOpen(false); // closed join form popup
    // router.refresh();
    // setTimeout(() => router.push("/events/invitation"), 1000);
    // console.log(data);
  }
  return (
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
  );
};
