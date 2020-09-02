import React from "react";
import Link from "next/link";
import axios from "axios";

const University = (props, a) => {
  return (
    <div>
      <h1>Universities in jordan</h1>
      <ul>
        {!props.universities
          ? ""
          : props.universities.map((name) => (
              //         / /g is a regex exp
              <Link href={"/university/" + name.replace(/ /g, "-")}>
                <a title={name}>
                  <li>{name}</li>
                </a>
              </Link>
            ))}
      </ul>
    </div>
  );
};
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
export default University;
