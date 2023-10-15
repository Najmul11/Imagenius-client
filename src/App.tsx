import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import { Outlet, ScrollRestoration } from "react-router-dom";
import ScrollUpButton from "./pages/sharedComponents/ScrollUpButton/ScrollUpButton";

function App() {
  return (
    <div>
      <ScrollRestoration
        getKey={(location) => {
          return location.pathname;
        }}
      />
      <ScrollToTop
        smooth
        top={500}
        component={<ScrollUpButton />}
        style={{
          backgroundColor: "black",
          zIndex: 100,
          border: "1px solid white",
        }}
      />

      <Outlet />
    </div>
  );
}

export default App;
