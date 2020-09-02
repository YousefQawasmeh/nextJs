import axios from "axios";
import Link from "next/link";

const university = (props) => {
  const universityInfo = props ? props.universityInfo : "";
  if (!universityInfo)
    return (
      <div>
        <h1>not found this university</h1>
        <Link href={"/university/"}>
          <a>click here to go the universities page</a>
        </Link>
      </div>
    );
  return (
    <div>
      <h1>{universityInfo.name}</h1>

      <h4>web_page</h4>
      <p>{universityInfo.web_page}</p>

      <h4>domain</h4>
      <p>{universityInfo.domain}</p>
      <br />
      <br />
      <br />
      <br />
      <Link href='/'>
        <a>click here to go the universities page</a>
      </Link>
    </div>
  );
};

export async function getServerSideProps(props) {
  const {
    data: [university],
  } = await axios.get(
    "https://tryitnow.herokuapp.com/university/" + props.query.university
  );
  return {
    props: { universityInfo: university || "" },
  };
}

export default university;
