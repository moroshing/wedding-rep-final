import "./App.css";
import "./index.css";
import { useRef, useState, useEffect } from "react";
import bgImage from "./assets/bg.jpg";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/church1.jpg";
import musicFile from "./assets/music.mp3";
//import musicFile from "./assets/music1.mp3";

import VenueCard from "./components/Card";
import Timeline from "./components/Timeline";
import Carousel from "./components/Carousel";
import TopNav from "./components/Nav";
import LoadingScreen from "./components/Loading";
import TimerGrid from "./components/Timer";
import WeddingCalendar from "./components/Calendar";
import SectionTitle from "./components/Header";
import TypewriterText from "./components/Typewriter";
import Entourage from "./components/Entourage";
import ColorPalette from "./components/ColorPalette";
import DressCodeBanner from "./components/DressCodeBanner";
import BlurFadeDemo from "./components/Gallery";
import { InteractiveHoverButton } from "./components/magicui/interactive-hover-button";

function App() {
  const audioRef = useRef(null);
  const [showModal, setShowModal] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [appReady, setAppReady] = useState(false);

  const carouselImages = [image1, image2, image3];
  const carouselRef = useRef(null);
  const timelineRef = useRef(null);
  const calendarRef = useRef(null);
  const rsvpRef = useRef(null);
  const faqRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const [loading, setLoading] = useState(true);
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
        audioRef.current.play();
      }
    }, 300);
  };

  useEffect(() => {
    if (!loading) {
      setAppReady(true);
    }
  }, [loading]);

  const timelineEvents = [
    {
      title: "First Meeting",
      image: image1,
      date: "January 2015",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "First Date",
      image: image2,
      date: "March 2015",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Engagement",
      image: image3,
      date: "December 2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Wedding Day",
      image: image4,
      date: "May 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  let interval = useRef();
  const startTimer = () => {
    const weddingDate = new Date("2025-06-27T13:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
        setTimerDays("00");
        setTimerHours("00");
        setTimerMinutes("00");
        setTimerSeconds("00");
      } else {
        setTimerDays(String(days).padStart(2, "0"));
        setTimerHours(String(hours).padStart(2, "0"));
        setTimerMinutes(String(minutes).padStart(2, "0"));
        setTimerSeconds(String(seconds).padStart(2, "0"));
      }
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    const savedInterval = interval.current;
    return () => {
      clearInterval(savedInterval);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {loading ? (
        <LoadingScreen bgImage={bgImage} />
      ) : (
        <div
          className="w-full relative bg-cover bg-center text-white"
          style={{
            backgroundImage: `url(${bgImage})`,
            fontFamily: '"EB Garamond", serif',
          }}
        >
          {/* Modal overlay */}
          {appReady && showModal && (
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
                  <TypewriterText text="You're invited to our wedding!" />

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
                {/* Carousel Section */}
                <section
                  ref={carouselRef}
                  className="px-5 py-10 space-y-6 text-center max-w-screen-md mx-auto scroll-mt-5 mb-15"
                >
                  <SectionTitle>Our Memories</SectionTitle>
                  <Carousel images={carouselImages} />
                </section>

                {/* Timeline Section */}
                <section
                  className="bg-black/40 text-center py-10"
                  ref={timelineRef}
                >
                  <SectionTitle>Our Journey</SectionTitle>
                  <Timeline events={timelineEvents} />
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
                      imageSrc={image4}
                      name="Archdiocesan Shrine and Parish of the Immaculate Heart of Mary"
                      time="1:00 PM"
                    />
                  </div>
                </section>
                <section className="flex flex-col items-center justify-center text-center px-5 py-10 space-y-6 max-w-screen-md mx-auto scroll-mt-5">
                  <SectionTitle>Dress Code</SectionTitle>
                  <ColorPalette />
                  <DressCodeBanner />
                  <div className="mt-6 space-y-2">
                    <p className="text-lg">
                      Please wear formal attire and follow the color palette
                      above.
                    </p>
                    <ul className="text-base text-gray-200 list-disc list-inside">
                      <li>
                        Men: Barong or long sleeves, formal pants, and dress
                        shoes.
                      </li>
                      <li>
                        Women: Long dress or formal attire in earth tones or
                        pastel colors.
                      </li>
                      <li>
                        Please avoid wearing white or the same color as the
                        entourage.
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="bg-black/40 text-center py-10">
                  <SectionTitle>Gallery</SectionTitle>
                  <BlurFadeDemo />
                </section>

                <section className="px-5 py-10 space-y-6 text-center max-w-screen-md mx-auto scroll-mt-5">
                  <SectionTitle>Meet the Entourage</SectionTitle>
                  <Entourage />
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
                  className="w-screen flex items-center justify-center bg-black/80"
                  style={{ minHeight: "calc(100vh - 75px)" }} // 60px = footer height, adjust if needed
                >
                  <div className="text-white max-w-2xl w-full px-6">
                    <h2 className="text-4xl font-bold mb-8 text-center">
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                      <div className="bg-white/90 rounded-xl shadow-lg p-6 text-black">
                        <h3 className="text-xl font-semibold mb-2">
                          What is the dress code?
                        </h3>
                        <p className="text-lg text-gray-700">
                          Formal attire. Please refer to the dress code section
                          above for details.
                        </p>
                      </div>
                      <div className="bg-white/90 rounded-xl shadow-lg p-6 text-black">
                        <h3 className="text-xl font-semibold mb-2">
                          Can I bring a plus one?
                        </h3>
                        <p className="text-lg text-gray-700">
                          Please check your invitation or contact us if you have
                          questions about your guest list.
                        </p>
                      </div>
                      <div className="bg-white/90 rounded-xl shadow-lg p-6 text-black">
                        <h3 className="text-xl font-semibold mb-2">
                          Where is the venue?
                        </h3>
                        <p className="text-lg text-gray-700">
                          Archdiocesan Shrine and Parish of the Immaculate Heart
                          of Mary. See the "Our Wedding Day" section for
                          details.
                        </p>
                      </div>
                      <div className="bg-white/90 rounded-xl shadow-lg p-6 text-black">
                        <h3 className="text-xl font-semibold mb-2">
                          How do I RSVP?
                        </h3>
                        <p className="text-base text-gray-700">
                          Please fill out the RSVP form in the RSVP section
                          above.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Note */}
                {/* <section className="px-5 py-10 space-y-6 text-center max-w-screen-md mx-auto">
                  <p>
                    Please note: Not wearing the dress code is not allowed in
                    the picture taking.
                  </p>
                </section> */}
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
      )}
    </div>
  );
}

export default App;
