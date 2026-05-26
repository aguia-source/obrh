import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Routes>
          <Route path="*" element={<><Navbar /><main className="flex-1 pt-16"><HomePage /></main><Footer /></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
