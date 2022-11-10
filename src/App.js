import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes'
import ScrollToTop from "react-scroll-to-top";

function App() {

  return (
    <div className="">
      <RouterProvider router={router}>

      </RouterProvider>
      <div style={{ marginTop: "0rem" }} />
                <ScrollToTop smooth />
    </div>
  );
}

export default App;
