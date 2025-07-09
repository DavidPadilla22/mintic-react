
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import HomePage from './pages/HomePage/HomePage';
import MyComponent from './pages/Playground/useState';
import Contador from './pages/Playground/useState';
import ContadorConMensaje from './pages/Playground/useEffect';
import EnfocarInput from './pages/Playground/useRef';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot" element={<ForgotPasswordPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/use" element={<ContadorConMensaje/>} />
      <Route path="/contar" element={<MyComponent/>} />
      <Route path="/enfocar" element={<EnfocarInput/>} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;