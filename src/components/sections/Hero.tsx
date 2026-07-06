import Button from "../ui/Button";

export default function Hero() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center  px-6 py-4 md:px-12 min-h-screen">
      <h1 className="font-serif text-[18vw] font-bold leading-[0.82] tracking-tighter uppercase md:text-[13vw] lg:text-[11vw] flex flex-col items-center justify-center text-center md:flex-row mb-4">
        <span>Beka</span>
        <div>
          <span className="ml-6 text-stroke inline-block">Abate</span>
          <span className="">.</span>
        </div>
      </h1>
      <div className="ffont-serif flex flex-col sm:flex-row items-center justify-center uppercase font-bold gap-3 text-xl md:text-2xl mb-2 text-center">
        <h2>Full-Stack Developer</h2>
        <span className="w-2 h-2 rounded-full bg-white shrink-0 hidden sm:block" />
        <h2>Front-End Specialist</h2>
      </div>
      <p className="font-mono text-md mb-8 text-center">
        I turn complex problems into elegant interfaces.
      </p>
      <Button />
    </div>
  );
}
