import "./App.css";
import { Home } from "./page";
import { Switch, Route } from "react-router-dom";
import { createContext, useState } from "react";
export const userContext = createContext();

function App() {
  const [photoItems, setPhotoItems] = useState([]);
  return (
    <userContext.Provider value={[photoItems, setPhotoItems]}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </userContext.Provider>
  );
}

export default App;
