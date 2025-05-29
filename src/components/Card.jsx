import React from "react";
import { motion } from "motion/react";
import { Card, Image } from "antd";
import { ClockCircleOutlined, EnvironmentOutlined } from "@ant-design/icons";

const { Meta } = Card;

const VenueCard = ({ imageSrc, churchName, massTime, reception }) => {
  return (
    <motion.div
      className="rounded-md w-full md:w-1/2 flex flex-col h-[400px] overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      <Card
        className="h-full"
        cover={
          <Image
            src={imageSrc}
            alt={churchName}
            className="object-cover h-48 w-full"
          />
        }
      >
        <Meta
          title={
            <div className="flex items-center">
              <EnvironmentOutlined className="mr-2" />
              {churchName}
            </div>
          }
          description={
            <div className="flex flex-col">
              <div className="flex items-center">
                <ClockCircleOutlined className="mr-2" />
                {massTime}
              </div>
              <p className="mt-2">{reception}</p>
            </div>
          }
        />
      </Card>
    </motion.div>
  );
};

export default VenueCard;
