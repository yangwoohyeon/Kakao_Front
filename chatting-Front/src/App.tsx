import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import KakaoRedirect from './KakaoRedirect';  // 카카오 리디렉션 처리 컴포넌트
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/loginSuccess" element={<KakaoRedirect />} />  {/* 카카오 로그인 후 리디렉션 처리 */}
    </Routes>
  </Router>
);

export default App;
