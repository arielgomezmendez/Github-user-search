import "./App.css";
import Card from "./components/Card/Card";
import Search from "./components/Search/Search";
import { useState } from "react";

function App() {
  /*State for use the url of user image in the src of img elemnt in the Card component  */
  const [userImage, setUserImage] = useState("");
  /*State for use the name of user in p elemnt of the Card component  */
  const [userName, setUserName] = useState("");

  return (
    <div className="App">
      <h1 className="title">User Search on Github</h1>
      <Search setUserImage={setUserImage} setUserName={setUserName} />
      <Card userName={userName} userImage={userImage} />
    </div>
  );
}

export default App;
