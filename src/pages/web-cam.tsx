// import type { NextPage } from "next";
import { VFC } from "react";
import { WebcamCapture } from "../components/templates/Camera";
import Layout from "../components/templates/Layout";

const WebCam: VFC = () => {
  return (
    <Layout title="webCom">
      <WebcamCapture />
    </Layout>
  );
};

export default WebCam;
