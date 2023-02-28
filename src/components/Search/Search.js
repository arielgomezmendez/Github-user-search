import React from "react";
import "./Search.css";
import useSearchUser from "../apiService";

const Search = ({ setUserImage, setUserName }) => {
  const { fetchData } = useSearchUser();
  const { onchange } = useSearchUser();
  const onSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <form className="search" onSubmit={onSubmit}>
      <input
        type="text"
        className="search__input"
        placeholder="Type your text"
        onChange={onchange}
      />
      <button className="search__button">
        <svg className="search__icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path
              d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9
             4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 
             3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 
             3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
            ></path>
          </g>
        </svg>
      </button>
    </form>
  );
};

export default Search;

{
  /*
  const [inputValue, setInputValue] = useState("");

  //Function to get the input value using the onChange event
  const onchange = (event) => {
    setInputValue(event.target.value);
  };

  const endpoint = "https://api.github.com/graphql";
  let userLogin = inputValue;
  const query = `
    query {
        user(login: "${userLogin}") {
        name
        avatarUrl
        }
    }`;

  /*Send the query to the API server
  async function fetchData() {
    try {
      console.log("Fetch data");
      const data = JSON.stringify({ query });
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`,
        },
        body: data,
      });

      const result = await response.json();
      const newUserImage = result.data.user.avatarUrl;
      const newUserName = result.data.user.name;
      console.log(result);

      /*Update the states with the url and name of user
      setUserImage(newUserImage);
      setUserName(newUserName);

      let error = "Error";
    } catch (error) {
      console.log(error);
    }
  }


*/
}
