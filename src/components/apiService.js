import { useState } from "react";

export const useApiService = (setUserImage, setUserName) => {
  const [inputValue, setInputValue] = useState("");

  const onchange = (event) => {
    setInputValue(event.target.value);
  };

  const endpoint = "https://api.github.com/graphql";

  const fetchData = async () => {
    try {
      console.log("Fetch data");
      const query = `
        query {
            user(login: "${inputValue}") {
            name
            avatarUrl
            }
        }`;
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
  return { inputValue, onchange, onSubmit, fetchData };
};

export default useSearchUser;
