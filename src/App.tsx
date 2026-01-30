import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Rooms from './pages/Rooms';
import ReviewPay from './pages/ReviewPay';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/review-pay" element={<ReviewPay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
