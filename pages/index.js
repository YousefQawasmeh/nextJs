import Univerities from "./university";
import axios from "axios";

export async function getServerSideProps(props) {
  console.log("data props", props);

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
export default Univerities;
