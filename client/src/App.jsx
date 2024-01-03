import "./App.css";
import { Routes, Route } from "react-router-dom"; 
import {Landing} from "./pages/landing/Landing";

import {Home} from "./pages/home/Home";
import {Detail} from "./pages/detail/Detail";
import { Form } from "./components/form/Form";


function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />      
         <Route
          exact
          path="/home"
          element={<Home/>}
        />
        <Route exact path="/home/:id" element={<Detail />} />
        <Route path="/create" element={<Form />} />
      </Routes>
    </div>
  );
}
export default App;
