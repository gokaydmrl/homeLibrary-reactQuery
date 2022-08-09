import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddBook from "./components/AddBook";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Register from "./components/Register";
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import { useEffect } from "react";
import NoToken from "./components/NoToken";

// npm WARN deprecated react-query@4.0.0: Please use @tanstack/react-query for v4+

export const queryClient = new QueryClient();

function App() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // useEffect(() => {
  //   !token && navigate("../login");
  // }, []);

  return (
    <div>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <Routes>
          <Route path="/home" element={<AddBook />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NoToken />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
