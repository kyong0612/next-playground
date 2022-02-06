import React, { ElementType, VFC } from "react";
import Tab from "@mui/material/Tab";
import Link from "@mui/material/Link";

type Props = {
  href: string;
  label: string;
};

const LinkTab: VFC<Props> = (props) => {
  return (
    <Tab
      component="a"
      //   onClick={(event: MouseEvent) => {
      //     event.preventDefault();
      //   }}
      //   {...props}
    />
  );
};

export default LinkTab;
