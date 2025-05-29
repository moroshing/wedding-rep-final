import { motion } from "motion/react";

const TopNav = ({
  scrollToSection,
  carouselRef,
  timelineRef,
  calendarRef,
  venueRef,
}) => {
  const navItems = [
    { label: "OUR STORY", ref: carouselRef },
    { label: "OUR JOURNEY", ref: timelineRef },
    { label: "THE DAY", ref: calendarRef },
    { label: "RSVP", ref: venueRef },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 bg-black bg-opacity-70 z-50 text-white py-2"
    >
      <motion.div
        className="flex justify-center space-x-2 sm:space-x-6"
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
      </motion.div>
    </motion.nav>
  );
};

export default TopNav;
