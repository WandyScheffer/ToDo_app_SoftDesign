import React from "react";
import FormActivity from "./components/FormActivity";
import ListActivity from "./components/ListActivity";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
    };
    this.setState = this.setState.bind(this);
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
    scriptBootstrap.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js";
    scriptBootstrap.integrity = "sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0";
    scriptBootstrap.crossOrigin = "anonymous";
  
    document.body.appendChild(scriptBootstrap);
    // ----------------------------------------------------------------------------------------
  }

  render() {

    return (
      <div className="app">
        <FormActivity state={this.state} setState={this.setState} />
        <ListActivity activities={this.state.activities} setState={this.setState}/>
      </div>
    );
  }
}

export default App;
