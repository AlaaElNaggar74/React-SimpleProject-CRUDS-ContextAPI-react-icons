import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Component/LoginPage/LoginPage";
import CreatePage from "./Component/CraeteNewAccount/CreatePage";
import HomePage from "./Component/HomePage/HomePage";
import ViewProduct from "./Component/HomePage/ViewProduct";
function App() {
  return (
    <div className="App">

      <Routes>
          <Route
          path="/"
          element={
            <>
            
            < HomePage  />
            </>
          }
        />
          <Route
          path="/viewEProduct/:Pid"
          element={
            <>
            
            < ViewProduct  />
            </>
          }
        />
        <Route
          path="/LoginPage"
          element={
            <>
            
            < HomePage  />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
            
              < HomePage  />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
