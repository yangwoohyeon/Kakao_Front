import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [username, setUsername] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    const user = localStorage.getItem('username');

    if (!token || !user) {
      navigate('/login'); // 로그인되지 않은 경우 로그인 화면으로 리디렉션
    } else {
      setUsername(user); // 사용자 이름 설정
    }
  }, [navigate]);

  return (
    <div>
      {username ? (
        <h1>안녕하세요, {username}님!</h1>  // 로그인된 사용자에게 이름 표시
      ) : (
        <p>로딩 중...</p>
      )}
    </div>
  );
};

export default Home;
