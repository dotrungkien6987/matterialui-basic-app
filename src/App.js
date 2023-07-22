import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import JobDetailModal from "./components/JobDetailModal";
import { useContext } from "react";


function App() {
  const location = useLocation();
  
  return (
    <>
      <Routes
        location={
          location.state?.backgroundLocation
            ? location.state.backgroundLocation
            : location
        }
      >
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
         
        </Route>
        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
         </>
  );
}

export default App;
