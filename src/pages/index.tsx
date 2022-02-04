import type { NextPage } from "next";
import { WebcamCapture } from "../components/template/camera";

const Home: NextPage = () => {
  return (
    <>
      <h1>Hello Next</h1>
      <WebcamCapture />
    </>
  );
};

export default Home;
