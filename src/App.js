
import React from "react";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App(props) {
  return (
    <React.StrictMode>
      <div>
        {props.children}
      </div>
      <ToastContainer />

    </React.StrictMode>
  );
}

export default App;
