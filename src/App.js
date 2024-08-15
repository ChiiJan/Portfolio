import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home.js';
import WorkOne from "./Pages/WorkNumOne.js";
import WorkTwo from "./Pages/WorkNumTwo.js";
import WorkThree from "./Pages/WorkNumThree.js";

function App() {
  return (
    <>
            <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        exact
                        path="/WorkNumOne"
                        element={<WorkOne />}
                    />

                    <Route
                        exact
                        path="/WorkNumTwo"
                        element={<WorkTwo />}
                    />
                    
                    <Route
                        exact
                        path="/WorkNumThree"
                        element={<WorkThree />}
                    />
                </Routes>
            </BrowserRouter>
        </>
  );
}

export default App;
