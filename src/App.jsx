import "./App.css";
import { useRef, useState, useEffect } from "react";
import bgImage from "./assets/bg.jpg";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/church1.jpg";

import VenueCard from "./components/Card";
import Timeline from "./components/Timeline";
import Carousel from "./components/Carousel";
import TopNav from "./components/Nav";
import LoadingScreen from "./components/Loading";
import TimerGrid from "./components/Timer";
import WeddingCalendar from "./components/Calendar";
import SectionTitle from "./components/Header";
import TypewriterText from "./components/Typewriter";
//import RSVPForm from "./components/Rsvp";

function App() {
  const carouselImages = [image1, image2, image3];
  const carouselRef = useRef(null);
  const timelineRef = useRef(null);
  const calendarRef = useRef(null);
  const venueRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const [loading, setLoading] = useState(true);
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

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
    <div>
      {loading ? (
        <LoadingScreen bgImage={bgImage} />
      ) : (
        <div
          className="relative bg-cover bg-center h-screen text-white"
          style={{
            backgroundImage: `url(${bgImage})`,
            fontFamily: '"EB Garamond", serif',
          }}
          role="img"
          aria-label="Wedding invitation background"
        >
          <div
            className="absolute inset-0 bg-black opacity-40 z-0"
            aria-hidden="true"
          />
          <main className="relative z-10 overflow-y-auto h-screen">
            <TopNav
              scrollToSection={scrollToSection}
              carouselRef={carouselRef}
              timelineRef={timelineRef}
              calendarRef={calendarRef}
              venueRef={venueRef}
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
                <p className="text-sm text-gray-300">
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
              className="px-5 py-10 space-y-6 text-center max-w-screen-md mx-auto scroll-mt-5"
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
                  churchName="Archdiocesan Shrine and Parish of the Immaculate Heart of Mary"
                  massTime="1:00 PM"
                  reception="Pardo Social Hall"
                />
              </div>
            </section>
            <section
              ref={venueRef}
              className="px-5 py-10 space-y-6 text-center max-w-screen-md mx-auto scroll-mt-5"
            >
              <SectionTitle>Respond, if you please</SectionTitle>
              <div className="w-full flex justify-center">
                <div className="p-3 rounded-lg shadow-lg overflow-hidden max-w-2xl w-full bg-black/30">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdC7SwMkrj93TBR8zFCofY1G7tf3v2n__hl06H8walBkEzUbg/viewform?embedded=true"
                    width="100%"
                    height="500"
                    title="RSVP"
                    allowFullScreen
                    className="w-full"
                    style={{ border: "none" }}
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
            </section>

            {/* Note */}
            <section className="px-5 py-10 space-y-6 text-center max-w-screen-md mx-auto">
              <p>
                Please note: Not wearing the dress code is not allowed in the
                picture taking.
              </p>
            </section>
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
