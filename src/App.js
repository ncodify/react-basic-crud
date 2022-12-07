import Create from "./components/Create";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Create />} />
        <Route exact path="/read" element={<Read />} />
        <Route exact path="/update" element={<Update />} />
      </Routes>
    </Router>

  );
}

export default App;
