import ListEvents from "@/components/events/components/ListEvents";

export default function Page() {
  return (
    <>
      <div className="py-6 md:py-10 px-4 md:px-20 mb-16 text-center">
        <p className="mb-3 font-semibold text-yellow-600">EventMakers</p>
        <h1 className="text-5xl md:text-[5rem] px-0 md:px-10 font-serif font-bold leading-tight mb-4">
          Let's Join The Event You Want
        </h1>
        <h4 className="text-xl">
          We don't just host events; we craft stories. Your story. Our events
          are the chapters that make your narrative extraordinary. -{" "}
          <small className="text-gray-400">ChatGPT</small>
        </h4>
      <div className="mt-16 animate-bounce text-center">
        <span className="arrow down" />
      </div>
      </div>
      <ListEvents />
    </>
  );
}
