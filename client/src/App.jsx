import logo from "./logo.svg";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import AddBook from "./components/AddBook";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const queryClient = new QueryClient();
// npm WARN deprecated react-query@4.0.0: Please use @tanstack/react-query for v4+

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <AddBook />
      </QueryClientProvider>
    </div>
  );
}

export default App;
