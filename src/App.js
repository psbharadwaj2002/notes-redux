import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Display from "./components/Display";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Sidebar />
        <Display />
      </div>
    </Provider>
  );
}

export default App;
