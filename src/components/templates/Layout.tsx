import { ReactNode, VFC } from "react";
import Head from "next/head";
import NavBar from "./NavBar";

type Props = {
  children: ReactNode;
  title: string;
};

const Layout: VFC<Props> = ({ children, title = "Welcome to Nextjs" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
