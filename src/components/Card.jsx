import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";

export default function VenueCard({ imageSrc, name, time }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="rounded-md w-full md:w-1/2 flex flex-col h-[400px] overflow-hidden gap-8"
    >
      <Card
        sx={{
          background: "#dedcd4",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia sx={{ height: 200 }} image={imageSrc} title={name} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            sx={{ fontFamily: '"EB Garamond", serif', fontWeight: "bold" }}
            gutterBottom
            variant="h6"
            component="div"
          >
            {name}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", fontFamily: '"EB Garamond", serif' }}
          >
            Time: {time}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontFamily: '"EB Garamond", serif',
              mt: 1,
            }}
          >
            We look forward to celebrating with you!
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: "center",
            background: "#dedcd4",
            pb: 3, // Add more padding to the bottom
            pt: 1,
          }}
        >
          <Button
            size="small"
            component="a"
            href="https://maps.app.goo.gl/CMDTbcqyh2DezavU9"
            target="_blank"
            sx={{
              padding: "4px 16px",
              backgroundColor: "#5c522a",
              color: "#fff",
              "&:hover": { backgroundColor: "#6d4320" },
              fontFamily: '"EB Garamond", serif',
            }}
          >
            GET CHURCH LOC.
          </Button>
          <Button
            size="small"
            component="a"
            href="https://maps.app.goo.gl/anRk1SvBE3uThWr77"
            target="_blank"
            sx={{
              padding: "4px 8px",
              backgroundColor: "#5c522a",
              color: "#fff",
              "&:hover": { backgroundColor: "#6d4320" },
              fontFamily: '"EB Garamond", serif',
            }}
          >
            GET RECEPTION LOC.
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
}
