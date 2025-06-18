import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react"; // or replace with your own icons

const TopNav = ({
  scrollToSection,
  carouselRef,
  timelineRef,
  calendarRef,
  rsvpRef,
  faqRef,
  audioRef, // <-- Add this prop if you want to control a global audio
}) => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    if (audioRef?.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  const navItems = [
    { label: "OUR JOURNEY", ref: timelineRef },
    { label: "OUR STORY", ref: carouselRef },
    { label: "THE DAY", ref: calendarRef },
    { label: "RSVP", ref: rsvpRef },
    { label: "FAQ", ref: faqRef },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-black bg-opacity-70 z-50 text-white py-2"
    >
      <motion.div
        className="flex justify-between items-center max-w-screen-md mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3,
            },
          },
        }}
      >
        <div className="flex justify-center flex-1 space-x-2 sm:space-x-6">
          {navItems.map((item) => (
            <motion.button
              key={item.label}
              onClick={() => scrollToSection(item.ref)}
              className="py-2 px-1 text-[10px] sm:text-xs cursor-pointer"
              variants={{
                hidden: { y: -10, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              whileHover={{
                scale: 1.1,
                textShadow: "0 0 8px rgba(255,255,255,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Mute / Unmute Button */}
        <motion.button
          onClick={toggleMute}
          className="ml-4 p-2 text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </motion.button>
      </motion.div>
    </motion.nav>
  );
};

export default TopNav;
