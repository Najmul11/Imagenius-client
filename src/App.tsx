import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import { Outlet, ScrollRestoration } from "react-router-dom";
import ScrollUpButton from "./pages/sharedComponents/ScrollUpButton/ScrollUpButton";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <ScrollRestoration
        getKey={(location) => {
          return location.pathname;
        }}
      />
      <Toaster />
      <ScrollToTop
        smooth
        top={500}
        component={<ScrollUpButton />}
        style={{
          backgroundColor: "black",
          zIndex: 100,
          boxShadow: "0px 2px  rgba(255, 255, 255, .6)",
        }}
      />

      <Outlet />
    </div>
  );
}

export default App;
