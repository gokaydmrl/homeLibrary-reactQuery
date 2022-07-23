import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import AddBook from "./components/AddBook";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import PatchBookModal from "./components/PatchBookModal";

// npm WARN deprecated react-query@4.0.0: Please use @tanstack/react-query for v4+

function App() {
  const queryClient = new QueryClient();

  const id = useParams();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AddBook />} />
            <Route path="/:id" element={<PatchBookModal />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
