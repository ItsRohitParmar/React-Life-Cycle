import ClassComponent from "./Components/ClassComponent"
import FunctionalCom from "./Components/FunctionalCom";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { Fragment } from "react";
function App() {
  return (
    <Fragment>
      <Router>
        <nav>
          <Link to="/">ClassComponent</Link>
          <Link to="/FunComponent"> FunComponent </Link>
        </nav>

        <Routes>
          <Route path="/" element={<ClassComponent a={10} name={"Rohit"} lastName={"Parmar"}/> } />
          <Route path="/FunComponent" element={<FunctionalCom />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
