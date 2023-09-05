import "./App.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Routing from "./components/layout/Routing";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Layout>
          <Routing />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
