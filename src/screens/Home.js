import React from "react";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import BattingRankings from "../components/BattingRankings";
import BowlingRankings from "../components/BowlingRankings";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ p: 2 }}>
      {/* Club logo */}
      <Box sx={{ mb: 2, textAlign: "center" }}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/logo.png`}
          alt="Club Logo"
          style={{
            width: "100px", // Adjust the size as needed
            height: "100px", // Adjust the size as needed
            marginBottom: "10px", // Space between logo and text
          }}
        />
      </Box>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          mb: 2,
          ml: 1,
          background: `linear-gradient(45deg, #0a1f40, #ad0773)`,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontWeight: "800",
          letterSpacing: "-0.5px",
          fontSize: { xs: "1.2rem", sm: "1.8rem", md: "2.5rem" },
          lineHeight: 1.2,
          textAlign: "center",
        }}
      >
        WESTERN CRICKET CLUB
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="cricket stats tabs"
      >
        <Tab
          sx={{
            background: `linear-gradient(45deg, #0a1f40, #ad0773)`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: "800",
            letterSpacing: "-0.5px",
            "&.Mui-selected": {
              background: `linear-gradient(45deg, #0a1f40, #ad0773)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            },
          }}
          label="Batting Rankings"
        />
        <Tab
          sx={{
            background: `linear-gradient(45deg, #0a1f40, #ad0773)`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: "800",
            letterSpacing: "-0.5px",
            "&.Mui-selected": {
              background: `linear-gradient(45deg, #0a1f40, #ad0773)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            },
          }}
          label="Bowling Rankings"
        />
      </Tabs>
      {value === 0 && <BattingRankings />}
      {value === 1 && <BowlingRankings />}
        {/* Copyright Notice */}
        <Typography
        variant="body2"
        sx={{
          mt: 4,
          textAlign: "center",
          color: "#555", // Adjust color if needed
          fontSize: "0.8rem",
        }}
      >
        &copy; {new Date().getFullYear()} Dumanga Dissanayake. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Home;
