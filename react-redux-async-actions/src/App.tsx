import React from 'react';
import {Provider} from "react-redux";
import Store from "./redux/Store";
import UserComp from "./component/UserComp";

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <UserComp/>
    </div>
    </Provider>
  );
}

export default App;
