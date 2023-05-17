import React from 'react';
import CakeContainer from "./component/CakeContainer";
import {Provider} from "react-redux";
import Store from "./redux/Store";
import ShopComp from "./component/ShopComp";

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <ShopComp/>
    </div>
    </Provider>
  );
}

export default App;
