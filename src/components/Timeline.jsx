import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "motion/react";

const Timeline = ({ events }) => {
  return (
    <div className="flex justify-center max-w-screen-md mx-auto">
      <VerticalTimeline>
        {events.map((event, index) => (
          <VerticalTimelineElement
            className="no-margin"
            key={index}
            contentStyle={{
              background: "transparent",
              color: "inherit",
              boxShadow: "none",
            }}
            contentArrowStyle={{ borderRight: "7px solid transparent" }}
            iconStyle={{
              background: "transparent",
              boxShadow: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            icon={
              <span
                style={{
                  marginTop: "20px",
                  width: "14px",
                  height: "14px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "inline-block",
                }}
              />
            }
          >
            <div className="text-left">
              <h3 className="text-2xl font-semibold">{event.title}</h3>
              <p className="text-xs italic mb-2">{event.date}</p>{" "}
              {/* 👈 Date below title */}
              {event.image && (
                <div className="mt-2 w-full aspect-video overflow-hidden rounded">
                  <motion.img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 0.95, opacity: 0.6 }}
                    whileInView={{ scale: 1.05, opacity: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                  />
                </div>
              )}
              <p className="mt-2 text-sm text-justify">{event.description}</p>
              {/* Alternating horizontal line */}
              <hr
                className={`mt-4 border-t-[2px] border-white w-full ${
                  index % 2 === 0 ? "ml-auto" : "mr-auto"
                }`}
              />
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
