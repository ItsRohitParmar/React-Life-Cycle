import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { Fragment,lazy, Suspense } from "react";

//----------------------- Static import -----------------------------------------
// import ClassComponent from "./components/ClassComponent";
// import FunctionalCom from "./components/FunctionalCom";
// import UseStateHook from "./components/UseStateHook";
// import UseContextHook from "./components/UseContextHook";
// import UseMemoHook from './components/UseMemoHook';


//----------------------- Dynamic import or lazy import -----------------------------------------
const ClassComponent = lazy(()=>import("./components/ClassComponent"))
const FunctionalCom = lazy(()=>import("./components/FunctionalCom"))
const UseStateHook = lazy(()=>import("./components/UseStateHook"))
const UseContextHook = lazy(()=>import("./components/UseContextHook"))
const UseMemoHook = lazy(()=>import("./components/UseMemoHook"))
const UseCallBackHook = lazy(()=>import("./components/UseCallBackHook"))
const Debouncing = lazy(()=>import("./components/Debouncing"))


function App() {
  return (
    <Fragment>
      
      <Router>
        <nav style={{margin:"20px 20px 50px 20px"}}>
          <Link style={{margin:"20px"}} to="/FunComponent"> FunComponent </Link>
          <Link style={{margin:"20px"}} to="/"> ClassComponent </Link>
          <Link style={{margin:"20px"}} to="/UseStateHook"> UseState Hook </Link>
          <Link style={{margin:"20px"}} to="/UseContext"> UseContext Hook</Link>
          <Link style={{margin:"20px"}} to="/UseMemoHook"> UseMemo Hook</Link>
          <Link style={{margin:"20px"}} to="/UseCallBackHook"> UseCallBack Hook</Link>
          <Link style={{margin:"20px"}} to="/Debouncing"> Debouncing </Link>
        </nav>

        
        <Suspense fallback={<h1> Loading...</h1>}>
        <Routes>
          <Route path="/" element={<ClassComponent a={10} name={"Rohit"} lastName={"Parmar"}/> } />
          <Route path="/FunComponent" element={<FunctionalCom />} />
          <Route path="/UseStateHook" element={<UseStateHook />} />
          <Route path="/UseContext" element={<UseContextHook />} />
          <Route path="/UseMemoHook" element={<UseMemoHook />} />
          <Route path="/UseCallBackHook" element={<UseCallBackHook />} />
          <Route path="/Debouncing" element={<Debouncing />} />
        </Routes>
        </Suspense>
      </Router>
    </Fragment>
  );
}

export default App;
