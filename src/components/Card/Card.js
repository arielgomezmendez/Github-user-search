import React from "react";
import "./Card.css";
import { useState } from "react";
import { useEffect } from "react";

const Card = () => {
  const endpoint = "https://api.github.com/graphql";

  const query = `
    query {
        user(login: "arielgomezmendez") {
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
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card">
      <div className="user-picture">
        <img src={userImage} />
      </div>
      <p className="name">
        {userName}
        <span>Bloopark Developer</span>
      </p>
    </div>
  );
};

export default Card;

{
  /*
<svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0
           96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0
            477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
          ></path>
        </svg>
*/
}
