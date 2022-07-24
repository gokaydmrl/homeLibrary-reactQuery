import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddBook from "./components/AddBook";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import PatchBookModal from "./components/PatchBookModal";

// npm WARN deprecated react-query@4.0.0: Please use @tanstack/react-query for v4+

export const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <AddBook />
      </QueryClientProvider>
    </div>
  );
}

export default App;
