import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InitialPage from './pages/InitialPage/InitialPage';
import './styles/stylesGlobals.scss' 
import SuccessPage from './pages/SuccessPage/SuccessPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<InitialPage />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
