import Univerities from "./university";
import axios from "axios";
import { NextSeo } from "next-seo";

export async function getServerSideProps(props) {
  try {
    const { data: universities } = await axios.get(
      "https://tryitnow.herokuapp.com/universities"
    );

    return { props: { universities } };
  } catch (e) {
    console.log(e, "9999999999999999999999999");
  }

  return { props: { data: [] } };
}
export default (props) => {
  return (
    <>
      <Univerities universities={props.universities} />;
      <NextSeo title='Universities Home page' />
    </>
  );
};
