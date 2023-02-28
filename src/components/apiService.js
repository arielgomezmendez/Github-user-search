import { useState } from "react";

export const useApiService = (setUserImage, setUserName) => {
  const [inputValue, setInputValue] = useState("");

  const onchange = (event) => {
    setInputValue(event.target.value);
  };
  console.log(inputValue);
  const endpoint = "https://api.github.com/graphql";

  const query = `
        query {
            user(login: "${inputValue}") {
            name
            avatarUrl
            }
        }`;
  console.log(query);

  const fetchData = async () => {
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

      setUserImage(newUserImage);
      setUserName(newUserName);

      let error = "Error";
    } catch (error) {
      console.log(error);
    }
  };
  return { inputValue, onchange, fetchData };
};

export default useApiService;
