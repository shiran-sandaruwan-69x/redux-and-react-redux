import React from 'react';
import CakeContainer from "./component/CakeContainer";
import {Provider} from "react-redux";
import Store from "./redux/Store";

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <CakeContainer/>
    </div>
    </Provider>
  );
}

export default App;
