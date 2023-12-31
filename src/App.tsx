import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import { Outlet, ScrollRestoration } from "react-router-dom";
import ScrollUpButton from "./pages/sharedComponents/ScrollUpButton/ScrollUpButton";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import {
  setLoadingFalse,
  setLoadingTrue,
  setUser,
} from "./redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import CallToActions from "./pages/sharedComponents/callToAction/CallToActions";
import ScrollTopAuto from "./pages/sharedComponents/scrollToTopAuto/ScrollTopAuto";
import CustomOrderModal from "./pages/sharedComponents/callToAction/CustomOrderModal";

function App() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(setLoadingTrue());
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      try {
        const decodedToken = jwtDecode(accessToken);

        dispatch(setUser(decodedToken));
      } catch (error) {
        console.error("Error decoding access token:", error);
      }
    }
    dispatch(setLoadingFalse());
  }, [dispatch]);
  return (
    <div>
      <CallToActions />
      <CustomOrderModal user={user} />
      <ScrollTopAuto />
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
          borderRadius: "50%",
          height: "50px",
          width: "50px",
          bottom: "130px",
          right: "20px",
        }}
      />

      <Outlet />
    </div>
  );
}

export default App;
