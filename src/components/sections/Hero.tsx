import Button from "../ui/Button";

export default function Hero() {
  return (
    <div
      id="home"
      className="flex-1 flex flex-col items-center justify-center  px-6 py-4 md:px-12 min-h-screen"
    >
      <h1 className="font-serif text-[18vw] font-bold leading-[0.82] tracking-tighter uppercase md:text-[13vw] lg:text-[11vw] flex flex-col items-center justify-center text-center md:flex-row mb-4">
        <span>Beka</span>
        <div>
          <span className="md:ml-6 mt-2 md:mt-0 text-stroke inline-block">
            Abate
          </span>
        </div>
      </h1>
      <div className="ffont-serif flex flex-col sm:flex-row items-center justify-center uppercase font-medium gap-2 text-xl md:text-2xl mb-2 text-center">
        <h2>Full-Stack Developer</h2>
        <span className="w-1 h-1 rounded-full bg-white shrink-0 hidden sm:block" />
        <h2>Front-End Specialist</h2>
      </div>
      <p className="font-mono text-md mb-8 text-center text-muted-foregroud">
        I turn complex problems into elegant interfaces.
      </p>
      <Button />
    </div>
  );
}
