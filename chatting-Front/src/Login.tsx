import React, { useState, useEffect } from 'react'; // useEffect를 추가
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [nickname, setNickname] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('username');
    if (user) {
      setNickname(user);
      navigate('/'); // nickname이 있으면 홈으로 리디렉션
    } else {
      navigate('/login'); // nickname이 없으면 로그인 페이지로
    }
  }, [navigate]);

  const handleKakaoLogin = () => {
    // 카카오 로그인 리다이렉트
    window.location.href = 'http://localhost:8080/oauth2/authorization/kakao'; // 카카오 로그인 URL
  };

  return (
    <div>
      <h2>로그인</h2>
      {!nickname ? (
        <div>
          <button onClick={handleKakaoLogin}>카카오로 로그인</button> {/* 카카오 로그인 버튼 */}
        </div>
      ) : (
        <h3>{nickname}님 안녕하세요!</h3>
      )}
    </div>
  );
};

export default Login;
