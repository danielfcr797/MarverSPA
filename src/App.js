
import React from "react";
import { ToastContainer} from "react-toastify";

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
