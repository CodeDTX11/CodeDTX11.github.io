import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ResumePage } from './pages/ResumePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
