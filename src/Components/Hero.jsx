import { useRef, useState } from "react";

const Hero = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => {
          console.error("Playback failed:", err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const stopMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // reset to beginning
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative flex-1 flex flex-col items-center justify-center px-4">
      <div className="absolute inset-0 bg-white/20 pointer-events-none" />

      <img
        src="https://cdn.pixabay.com/photo/2016/03/31/21/15/flag-1296283_1280.png"
        alt="Indian Flag"
        className="waving-flag mt-4 w-64 md:w-80 drop-shadow-2xl"
      />

      <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-navyBlue">
        🇮🇳 Happy Independence Day 2025 🇮🇳
      </h1>
      <p className="mt-3 text-base md:text-lg max-w-2xl">
        Celebrating the spirit of freedom, unity, and pride.
      </p>

      <div className="p-4">
        <h1 className="text-2xl font-bold text-center mb-4">
          🇮🇳 Independence Day Tribute 🇮🇳
        </h1>

      </div>
      <div className="mt-6 flex gap-3">
        <audio
          ref={audioRef}
          src="/vande-mataram.mp3"
          preload="auto"
          loop
        />

        <button
          onClick={togglePlayPause}
          className=" rounded-full mb-4 px-4 py-2 font-semibold shadow bg-red-600 text-white hover:bg-red-700 transition"
        >
          {isPlaying ? "Pause Music" : "Play Music"}
        </button>

        <button
          onClick={stopMusic}
          className="rounded-full mb-4 px-4 py-2 font-semibold shadow bg-white text-black-600 hover:bg-white transition"
        >
          Stop Music
        </button>
        <a
          href="#timeline"
          className="rounded-full mb-4 px-4 py-2 font-semibold shadow bg-green-600 text-white hover:bg-green-700 hover:text-white transition"
        >
          See Timeline
        </a>
      </div>
    </section>
  )

}
export default Hero