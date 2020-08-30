import React from "react";
import Link from "next/link";
import axios from "axios";

const university = (props) => {
  return (
    <div>
      <h1>Universities in jordan</h1>
      <ul>
        {JSON.parse(props.data).map(({ name }) => (
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

university.getInitialProps = async () => {
  const data = await axios.get(
    "http://universities.hipolabs.com/search?country=jordan"
  );

  return { data: JSON.stringify(data.data) };
};
export default university;
