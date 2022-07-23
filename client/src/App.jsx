import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import AddBook from "./components/AddBook";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import PatchBookModal from "./components/PatchBookModal";

const queryClient = new QueryClient();
// npm WARN deprecated react-query@4.0.0: Please use @tanstack/react-query for v4+

function App() {
  const id = useParams();

  return (
    <div>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<AddBook />} />
          </Routes>
          <Routes>
            <Route path="/:id" element={<PatchBookModal />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
