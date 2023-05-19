import React from 'react';
import {Provider} from "react-redux";
import Store from "./redux/Store";

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      
    </div>
    </Provider>
  );
}

export default App;
