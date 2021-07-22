import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import Pet from "./Pet";
import SearhParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
// const App = () => {
//   return React.createElement("div", {}, [
//   React.createElement("h1", {}, "Adopt Me!"),
//   React.createElement(Pet),
//   React.createElement(Pet),
//   React.createElement(Pet),
//   ]);
// };
 
const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearhParams />
            </Route>
          </Switch>
        </Router>
        
        {/* <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Pepper" animal="bird" breed="Cockatiel" />
        <Pet name="Doink" animal="cat" breed="Mix" /> */}
      </div>
    </ThemeContext.Provider>
  );
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>, 
  document.getElementById("root"));