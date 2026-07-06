export default function Button() {
  return (
    <button className="relative overflow-hidden p-[1px] shadow-[0_0_2px_rgba(255,255,255,0.1)] cursor-pointer">
      {/* Animated Border */}
      <span className="absolute inset-[-1000%] animate-border-spin bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#000000_10%,#000000_90%,#ffffff_100%)]" />

      {/* Content */}
      <span className="font-mono  relative flex items-center justify-center bg-black px-8 py-2 text-white">
        Get CV
      </span>
    </button>
  );
}
