import "./App.css";
import Card from "./components/Card/Card";
import Search from "./components/Search/Search";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const endpoint = "https://api.github.com/graphql";
  //String template for change the login
  const userLogin = "rejamen";

  const query = `
    query {
        user(login: "${userLogin}") {
        name
        avatarUrl
        }
    }`;

  /*State for use the url of user image in the src of img elemnt in the Card component  */
  const [userImage, setUserImage] = useState("");
  /*State for use the name of user in p elemnt of the Card component  */
  const [userName, setUserName] = useState("");

  /*Send the query to the API server*/
  async function fetchData() {
    try {
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

      /*Update the states with the url and name of user*/
      setUserImage(newUserImage);
      setUserName(newUserName);
      let error = "Error";
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1 className="title">User Search on Github</h1>
      <Search />
      <Card />
    </div>
  );
}

export default App;
