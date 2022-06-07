import React from 'react';
import './App.css';
import Main from "./component/main"
import { Provider } from 'react-redux';
import store from "./redux/store"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
      <Main/>
    </div>
    </Provider>
  );
}

export default App;
