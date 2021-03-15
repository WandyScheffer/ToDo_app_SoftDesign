import React, { useState } from "react";
import FormActivity from "./components/FormActivity";
import ListActivity from "./components/ListActivity";
import "./App.css";

function App() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     activities: [],
  //   };
  //   this.setState = this.setState.bind(this);
  // }
  // -------------------------------------------------------------------------------------
  document.title = "ToDo App";

  const linkIcon = document.head.querySelector("link[rel=icon]");
  linkIcon.href =
    "https://softdesign.com.br/wp-content/themes/bones/favicon.png";

  const styleBootstrap = document.createElement("link");
  styleBootstrap.rel = "stylesheet";
  styleBootstrap.href =
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css";
  styleBootstrap.integrity =
    "sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl";
  styleBootstrap.crossOrigin = "anonymous";
  document.head.appendChild(styleBootstrap);

  const scriptBootstrap = document.createElement("script");
  scriptBootstrap.src =
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js";
  scriptBootstrap.integrity =
    "sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0";
  scriptBootstrap.crossOrigin = "anonymous";

  document.body.appendChild(scriptBootstrap);
  // ----------------------------------------------------------------------------------------

  const [activities, setActivities] = useState([])

  return (
    <div className="app">
      <FormActivity activitiesArray={activities} setActivitiesArray={setActivities} />
      <ListActivity
        activities={activities}
        setActivities={setActivities}
      />
    </div>
  );
}

export default App;
