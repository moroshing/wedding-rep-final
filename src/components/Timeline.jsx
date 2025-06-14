import React from "react";
import { Timeline as AntTimeline } from "antd";
import { motion } from "motion/react";

const Timeline = ({ events }) => {
  // Prepare the items array for Ant Design Timeline
  const timelineItems = events.map((event) => ({
    label: (
      <span className="text-white text-lg font-semibold block text-left mb-10 mr-4">
        {event.date}
        <br />
        {event.image && (
          <motion.img
            src={event.image}
            alt=""
            className="mt-2 w-full h-50 object-cover rounded"
            initial={{ scale: 0.9, opacity: 0.7 }}
            whileInView={{ scale: 1.05, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          />
        )}
      </span>
    ),
    dot: (
      <span
        style={{
          display: "inline-block",
          width: "14px",
          height: "14px",
          borderRadius: "100%",
          background: "white",
          border: "2px solid white",
        }}
      />
    ),
    children: (
      <div className="w-full text-right mb-30">
        <h3 className="text-lg font-semibold text-white">{event.title}</h3>
        <p className="mt-2 text-justify text-xs md:text-sm lg:text-base text-white">
          {event.description}
        </p>
      </div>
    ),
    color: "white",
  }));

  return (
    <>
      <div className="flex justify-center px-8 py-10 space-y-6 text-center max-w-screen-md mx-auto scroll-mt-5">
        <AntTimeline
          mode="left"
          className="custom-timeline"
          items={timelineItems}
        />
      </div>
      <style>
        {`
        .custom-timeline .ant-timeline-item-head {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          width: auto !important;
          height: auto !important;
          min-width: 0 !important;
          min-height: 0 !important;
          padding: 0 !important;
        }
        .custom-timeline-dot {
          display: inline-block;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: white;
          border: 2px solid white;
          box-sizing: border-box;
        }
        .custom-timeline .ant-timeline-item-tail {
          border-color: white !important;
        }
        .custom-timeline {
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
      `}
      </style>
    </>
  );
};

export default Timeline;
