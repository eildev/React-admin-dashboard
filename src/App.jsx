import { RouterProvider } from "react-router-dom";
// Importing router configuration
import { router } from "./routes/router";
// Styling imports for different libraries
import "react-quill/dist/quill.snow.css"; // React Quill editor style
// import "jsvectormap/dist/css/jsvectormap.css";
import "react-toastify/dist/ReactToastify.css"; // React Toastify notifications style
import "react-modal-video/css/modal-video.min.css"; // Modal video player style
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import store from "./redux/store";

import "./assets/css/style.css";
import "./assets/css/remixicon.css";
import "./assets/css/extra.css";

function App() {

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
