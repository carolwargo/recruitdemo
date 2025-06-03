import { HashRouter, Routes, Route } from 'react-router-dom';
import Demo from './pages/Demo';
import ErrorBoundary from './ErrorBoundary';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Demo />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="*" element={<Demo />} />
          </Routes>
        </HashRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;

