import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Login from './pages/Login';
import { DashboardProvider } from './pages/DashboardContext';

const App = () => {
  return (
    <DashboardProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </div>
      </Router>
    </DashboardProvider>
  );
}

export default App;
