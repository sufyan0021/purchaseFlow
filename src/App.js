import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import RequestOrder from './containers/RequestOrder';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/form" replace />} />
        <Route path="/form" element={<RequestOrder />}/>
      </Routes>
    </div>
  );
}

export default App;
