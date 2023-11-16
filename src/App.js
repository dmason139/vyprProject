import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Layout from './pages/Layout';
import Code from "./pages/Code";
import Filters from "./pages/Filter";
import View from "./pages/View";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="code" element={<Code />} />
          <Route path="filters" element={<Filters />} />
          <Route path="view" element={<View />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



