import React from "react";
import { Timeline as AntTimeline } from "antd";

const Timeline = ({ events }) => {
  // Prepare the items array for Ant Design Timeline
  const timelineItems = events.map((event) => ({
    label: (
      <span className="text-white block text-left mt-1">
        {event.date}
        <br />
        {event.image && (
          <img
            src={event.image}
            alt=""
            className="mt-2 w-full h-32 object-cover rounded"
          />
        )}
      </span>
    ),
    dot: (
      <span
        style={{
          display: "inline-block",
          width: 14,
          height: 14,
          borderRadius: "100%",
          background: "white",
          border: "2px solid white",
        }}
      />
    ),
    children: (
      <div className="w-full text-right">
        <h3 className="text-lg font-semibold  text-white">{event.title}</h3>
        <p className="mt-2 text-right text-xs md:text-sm lg:text-base text-white">
          {event.description}
        </p>
      </div>
    ),
    color: "white",
  }));

  return (
    <>
      <div className="flex px-3 justify-center">
        <AntTimeline
          mode="left"
          className="custom-timeline"
          items={timelineItems}
        />
      </div>
      <style>
        {`
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
