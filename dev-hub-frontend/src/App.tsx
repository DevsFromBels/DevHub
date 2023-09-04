import { Routes, Route, BrowserRouter } from "react-router-dom";
import { routesArray } from "../lib/routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routesArray.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
