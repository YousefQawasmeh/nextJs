import axios from "axios";
const university = (props) => {
  const universityInfo = JSON.parse(props.data)[0];
  return (
    <div>
      <h1>{universityInfo.name}</h1>
      <p>web_pages</p>
      <ul>
        {universityInfo.web_pages.map((web_page) => (
          <li>{web_page}</li>
        ))}
      </ul>
      <p>domains</p>

      <ul>
        {universityInfo.domains.map((domain) => (
          <li>{domain}</li>
        ))}
      </ul>
    </div>
  );
};

university.getInitialProps = async (props) => {
  const data = await axios.get(
    "http://universities.hipolabs.com/search?country=jordan"
  );

  return {
    data: JSON.stringify(
      data.data.filter(
        ({ name }) => name.replace(/ /g, "-") === props.query.university
      )
    ),
  };
};

export default university;
