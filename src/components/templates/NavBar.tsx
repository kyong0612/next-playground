import React, { VFC } from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import { pagesPath } from "lib/$path";

const NavBar = () => {
  // const preventDefault = (event:any) => event.preventDefault();

  return (
    <header>
      <Box
        sx={{
          bgcolor: "text.disabled",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          typography: "body1",
          "& > :not(style) + :not(style)": {
            ml: 2,
          },
          p: 3,
        }}
      >
        <Link href={pagesPath.$url()}>
          <a data-testid="home-nav">Home</a>
        </Link>
        <Link href={pagesPath.web_cam.$url()}>
          <a data-testid="web-com">Web-Com</a>
        </Link>
        <Link href={pagesPath.sample.$url()}>
          <a data-testid="sample">Sample</a>
        </Link>
        <Link href={pagesPath.timer.$url()}>
          <a data-testid="timer">Timer</a>
        </Link>
      </Box>
    </header>
  );
};

export default NavBar;
