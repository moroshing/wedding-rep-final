import "./App.css";
import "./index.css";
import { useRef, useState, useEffect } from "react";

import bgImage from "./assets/bg.jpg";
import money from "./assets/money.png";
import church from "./assets/church1.jpg";
import e1 from "./assets/1.png";
import e2 from "./assets/2.png";
import e3 from "./assets/3.png";
import musicFile from "./assets/music.mp3";
import { carouselImages } from "./utils/carouselImgs";
import timelineEvents from "./utils/timelineEvents";
import { Clock } from "lucide-react"; // import your icon at the top

import VenueCard from "./components/Card";
import Timeline from "./components/Timeline";
import Carousel from "./components/Carousel";
import TopNav from "./components/Nav";
import LoadingScreen from "./components/Loading";
import TimerGrid from "./components/Timer";
import WeddingCalendar from "./components/Calendar";
import SectionTitle from "./components/Header";
import TypewriterText from "./components/Typewriter";
import ColorPalette from "./components/ColorPalette";
import DressCodeBanner from "./components/DressCodeBanner";
import BlurFadeDemo from "./components/Gallery";
import { InteractiveHoverButton } from "./components/magicui/interactive-hover-button";

const preloadImages = (srcArray) => {
  const uniqueSrcs = Array.from(new Set(srcArray));
  return Promise.all(
    uniqueSrcs.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = () => resolve();
        })
    )
  );
};

function App() {
  const audioRef = useRef(null);
  const [showModal, setShowModal] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [isWeddingDay, setIsWeddingDay] = useState(false);

  const carouselRef = useRef(null);
  const timelineRef = useRef(null);
  const calendarRef = useRef(null);
  const rsvpRef = useRef(null);
  const faqRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  const handleStart = () => {
    setIsFading(true);
    setTimeout(() => {
      setShowModal(false);
      setIsFading(false);
      if (audioRef.current) {
        audioRef.current
          .play()
          .catch((e) => console.log("Audio play error:", e));
      }
    }, 300);
  };

  useEffect(() => {
    const loadAssets = async () => {
      try {
        const imageList = [...carouselImages, bgImage, church, money];
        await preloadImages(imageList);
        setLoading(false);
      } catch (error) {
        console.error("Error loading assets:", error);
        setLoading(false);
      }
    };

    loadAssets();
  }, []);

  let interval = useRef();
  const startTimer = () => {
    const weddingDateTime = new Date("2025-06-27T13:00:00"); // 1:00 PM
    const weddingDate = new Date("2025-06-27T00:00:00"); // Midnight of wedding day

    interval = setInterval(() => {
      const now = new Date();

      // Check if today is the wedding day (regardless of time)
      const isWeddingDay =
        now.getFullYear() === weddingDate.getFullYear() &&
        now.getMonth() === weddingDate.getMonth() &&
        now.getDate() === weddingDate.getDate();

      // Update wedding day state
      setIsWeddingDay(isWeddingDay);

      // Calculate time remaining until 1:00 PM
      const distance = weddingDateTime - now;

      if (distance <= 0) {
        // After 1:00 PM on wedding day
        setTimerDays("00");
        setTimerHours("00");
        setTimerMinutes("00");
        setTimerSeconds("00");
      } else {
        // Before 1:00 PM (whether on wedding day or before)
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimerDays(String(days).padStart(2, "0"));
        setTimerHours(String(hours).padStart(2, "0"));
        setTimerMinutes(String(minutes).padStart(2, "0"));
        setTimerSeconds(String(seconds).padStart(2, "0"));
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="overflow-x-hidden">
      <div
        className="w-full relative bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${bgImage})`,
          fontFamily: '"EB Garamond", serif',
        }}
      >
        {/* Modal overlay */}
        {showModal && (
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-400 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="absolute inset-0 backdrop-blur-md bg-black/30"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl shadow-black/40 flex flex-col justify-center items-center p-6 w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square mx-4 min-h-[320px]">
              {/* Inner outlined box */}
              <div
                className="w-full h-full rounded-xl p-5 flex flex-col items-center justify-center"
                style={{
                  border: "2px solid #5c522a",
                  boxSizing: "border-box",
                }}
              >
                <div className="flex flex-col items-center justify-center w-full h-full">
                  <div className="flex flex-col items-center justify-center w-full flex-grow">
                    <h2 className="text-base sm:text-lg md:text-2xl font-bold mb-4 text-[#5c522a] text-center">
                      We are getting married
                    </h2>
                    <h3
                      className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-center"
                      style={{
                        fontFamily: '"Parisienne", cursive',
                        color: "#5c522a",
                      }}
                    >
                      Jenny & Gerone
                    </h3>
                  </div>
                  <InteractiveHoverButton
                    onClick={handleStart}
                    className="bg-[#5c522a] text-white rounded-lg font-semibold transition text-lg"
                  >
                    Get Started
                  </InteractiveHoverButton>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Audio player */}
        <audio
          ref={audioRef}
          src={musicFile}
          loop
          style={{ display: showModal ? "none" : "block" }}
        />
        <div
          className="absolute inset-0 bg-black opacity-40 z-0"
          aria-hidden="true"
        />
        <main className="relative z-10 overflow-y-auto h-screen">
          {!showModal && (
            <>
              <TopNav
                scrollToSection={scrollToSection}
                carouselRef={carouselRef}
                timelineRef={timelineRef}
                calendarRef={calendarRef}
                rsvpRef={rsvpRef}
                faqRef={faqRef}
                audioRef={audioRef}
              />
              {/* Timer Section */}
              <section
                className="h-screen flex flex-col items-center justify-center text-center px-5"
                style={{ height: `calc(100vh - 50px)` }}
              >
                <h1
                  className="text-4xl sm:text-6xl font-bold"
                  style={{ fontFamily: '"Parisienne", cursive' }}
                >
                  Jenny & Gerone
                </h1>
                {isWeddingDay ? (
                  <TypewriterText text="Today, We tie the Knot!" />
                ) : (
                  <TypewriterText text="You're invited to our wedding!" />
                )}
                <TimerGrid
                  timerDays={timerDays}
                  timerHours={timerHours}
                  timerMinutes={timerMinutes}
                  timerSeconds={timerSeconds}
                />

                {/* Scroll Indicator */}
                <div className="mt-20 animate-bounce">
                  <p
                    className="text-sm text-gray-300 cursor-pointer hover:underline"
                    onClick={() => scrollToSection(carouselRef)}
                  >
                    Scroll to discover our story
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mx-auto text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </section>
              {/* Timeline Section */}
              <section className="px-5 py-10 space-y-6 text-center max-w-screen-md mx-auto scroll-mt-5 mt-5">
                <SectionTitle>
                  "He has made everything beautiful in its time."
                  <br />
                  <br /> Ecclesiastes 3:11
                </SectionTitle>
              </section>
              <section
                className="bg-black/40 text-center px-5 py-10 space-y-6 mx-auto scroll-mt-5 "
                ref={timelineRef}
              >
                <SectionTitle>Our Journey</SectionTitle>
                <Timeline events={timelineEvents} />
              </section>

              <section
                ref={carouselRef}
                className="px-5 py-10 space-y-6 text-center max-w-screen-md mx-auto scroll-mt-5"
              >
                <div className="flex flex-col space-y-8 pt-4">
                  <div className="w-full">
                    <img
                      src={e1}
                      alt="Entourage 1"
                      className="w-full h-auto rounded-lg shadow-md object-cover"
                    />
                  </div>

                  <div className="w-full">
                    <img
                      src={e2}
                      alt="Entourage 2"
                      className="w-full h-auto rounded-lg shadow-md object-cover"
                    />
                  </div>

                  <div className="w-full">
                    <img
                      src={e3}
                      alt="Entourage 3"
                      className="w-full h-auto rounded-lg shadow-md object-cover"
                    />
                  </div>
                </div>
              </section>

              <section className="px-5 py-20 space-y-6 text-center max-w-screen-md mx-auto scroll-mt-5 mb-20">
                <SectionTitle>Prenup Video</SectionTitle>
                <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/-nqlbgxFDns?si=I7le1aNTr0KfEoAI"
                    title="Our Story Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </section>

              <section className="bg-black/40 text-center py-10">
                <SectionTitle>The Wedding Chronicles</SectionTitle>
                <BlurFadeDemo />
              </section>

              {/* Carousel Section */}
              <section
                ref={carouselRef}
                className="px-5 py-10 space-y-6 text-center max-w-screen-md mx-auto scroll-mt-5 mb-15"
              >
                <SectionTitle>A Glimpse into Forever</SectionTitle>
                <Carousel images={carouselImages} />
              </section>

              {/* Wedding Day Section */}
              <section
                ref={calendarRef}
                className="px-5 py-10 space-y-6 text-center max-w-screen-md mx-auto scroll-mt-5"
              >
                <SectionTitle>Our Wedding Day</SectionTitle>

                <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6">
                  <WeddingCalendar />
                  <VenueCard
                    imageSrc={church}
                    name="Archdiocesan Shrine and Parish of the Immaculate Heart of Mary"
                    time="1:00 PM"
                  />
                </div>
              </section>
              <section className="flex flex-col items-center justify-center text-center px-5 py-10 space-y-6 max-w-screen-sm mx-auto scroll-mt-5">
                <SectionTitle>Arrival Time</SectionTitle>
                <div className="mt-6 space-y-4">
                  <Clock className="w-20 h-20 text-white mx-auto" />
                  <div className="pt-4 text-base lg:text-xl text-gray-200 text-center">
                    <p>
                      Please arrive 30 minutes before the ceremony starts at
                      1:00 in the afternoon. Welcome remarks and reception
                      starts at 4:30 in the afternoon.
                    </p>
                  </div>
                </div>
              </section>

              <section className="flex flex-col items-center justify-center text-center px-5 py-10 space-y-6 max-w-screen-md mx-auto scroll-mt-5">
                <SectionTitle>Gift Guide</SectionTitle>
                <div className="mt-6 space-y-4">
                  <img
                    src={money}
                    alt="Gift illustration"
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto rounded-lg"
                  />
                  <div className="pt-4 text-base lg:text-xl text-gray-200 text-justify">
                    <p>
                      Your presence at our wedding is the greatest gift we could
                      ask for. However, if you wish to honor us with a gift, we
                      would greatly appreciate a monetary contribution to help
                      us start our new chapter together.
                    </p>
                    <p className="pt-2">
                      Envelopes will be provided at the reception for your
                      convenience. We truly appreciate your love and support!
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-black/40 flex flex-col items-center justify-center text-center px-5 py-10 space-y-6 mx-auto scroll-mt-5">
                <SectionTitle>Attire Guidelines</SectionTitle>
                <ColorPalette />
                <DressCodeBanner />
                <div className="mt-6 space-y-2 text-left">
                  <p className="text-base lg:text-xl">
                    Please wear formal attire and follow the color palette
                    above.
                  </p>
                  <ul className="text-base lg:text-xl text-gray-200 list-disc list-inside">
                    <li>
                      Men: Suit, long sleeves or any formal attire, formal
                      pants, and shoes.
                    </li>
                    <li>
                      Women: Long dress or formal attire based on the color
                      palette above.
                    </li>
                  </ul>
                  <br />
                  <p className="text-base lg:text-xl">
                    Please avoid wearing white or ivory let’s let the bride
                    shine. Thank you for dressing with love!
                  </p>
                </div>
              </section>

              <section
                ref={rsvpRef}
                className="px-5 py-10 space-y-6 text-center max-w-screen-md mx-auto scroll-mt-5"
              >
                <SectionTitle>Respond, if you please</SectionTitle>
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdC7SwMkrj93TBR8zFCofY1G7tf3v2n__hl06H8walBkEzUbg/viewform?embedded=true"
                  width="100%"
                  height="1150"
                  style={{ background: "#dedcd4", borderRadius: "0.5rem" }}
                  title="RSVP Form"
                  className="p-5"
                >
                  Loading…
                </iframe>
              </section>

              <section
                ref={faqRef}
                className="w-full flex items-center justify-center bg-black/80"
                style={{ minHeight: "calc(100vh - 75px)" }}
              >
                <div className="text-white max-w-2xl w-full px-6">
                  <h2 className="text-4xl font-bold mb-8 text-center">FAQs</h2>
                  <div className="space-y-6">
                    <div className="bg-white/90 rounded-xl shadow-lg p-6 text-black">
                      <h3 className="text-xl font-semibold mb-2">
                        How do I RSVP?
                      </h3>
                      <p className="text-base text-gray-700">
                        Please fill out the RSVP form in the RSVP section above.
                      </p>
                    </div>
                    <div className="bg-white/90 rounded-lg shadow-lg p-6 text-black">
                      <h3 className="text-xl font-semibold mb-2">
                        Can we bring our kids to the wedding?
                      </h3>
                      <p className="text-lg text-gray-700">
                        We certainly love your kids, but due to necessity rather
                        than choice, we regretfully can't accommodate them at
                        the venue. The only kids attending are those who are
                        part of the entourage and those requested. We hope you
                        understand and enjoy the night off.
                      </p>
                    </div>
                    <div className="bg-white/90 rounded-xl shadow-lg p-6 text-black">
                      <h3 className="text-xl font-semibold mb-2">
                        Can I bring someone else to your wedding with me?
                      </h3>
                      <p className="text-lg text-gray-700">
                        Unfortunately, no. We hope you understand that we can no
                        longer accommodate those who are not in our guest list
                        due to limited seats. Each seat and table has a name
                        assigned.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <footer className="w-full py-2 bg-black text-white font-serif">
                <div className="max-w-screen-md mx-auto px-4 flex flex-col items-center text-center gap-1">
                  <p className="text-sm">
                    © {new Date().getFullYear()} Jenny & Gerone's Wedding. All
                    rights reserved.
                  </p>
                  <p className="text-xs text-gray-400">
                    Created by Kyle David Caumeran
                  </p>
                </div>
              </footer>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
