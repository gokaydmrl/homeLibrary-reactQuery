import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddBook from "./components/AddBook";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Register from "./components/Register";
import {
  Navigate,
  Route,
  Routes,
  BrowserRouter,
  useNavigate,
} from "react-router-dom";

// npm WARN deprecated react-query@4.0.0: Please use @tanstack/react-query for v4+

export const queryClient = new QueryClient();

function App() {
  const token = localStorage.getItem("token");

  return (
    <div>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <BrowserRouter>
          <Routes>
            {token ? (
              <Route path="/home" element={<AddBook />} />
            ) : (
              <Route path="/register" element={<Register />} />
            )}
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
