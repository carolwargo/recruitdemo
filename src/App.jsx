import { HashRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
 
    <div className="App">
        <ErrorBoundary>
       <HashRouter basename="/recruitdemo/">
      <h1>Recruit Demo</h1>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
      </Routes>
          </HashRouter>
      </ErrorBoundary>
        
  
    </div>

  )
}

export default App
