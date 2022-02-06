import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import LinkTab from "../molecules/LinkTab";

export default function NavTabs() {
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs aria-label="nav tabs">
        <LinkTab href="/webCam" label="webCam" />
      </Tabs>
    </Box>
  );
}
