import Layout from "../components/templates/Layout";
import { VFC } from "react";
import Timer from "components/templates/Timer";

const Sample: VFC = () => {
  return (
    <Layout title="sample">
      <Timer limit={200} />
    </Layout>
  );
};

export default Sample;
