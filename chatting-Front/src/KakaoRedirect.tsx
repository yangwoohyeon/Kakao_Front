import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const KakaoRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // URL에서 인증 코드 가져오기
    const code = new URLSearchParams(window.location.search).get('code');
    
    if (code) {
      // 인증 코드를 백엔드로 보내 JWT와 사용자 이름 받기
      axios
        .get(`http://localhost:8080/loginSuccess?code=${code}`)
        .then((response) => {
          const { jwtToken, nickname } = response.data;
          localStorage.setItem('jwtToken', jwtToken); // JWT를 로컬 스토리지에 저장
          localStorage.setItem('username', nickname); // 사용자 이름을 로컬 스토리지에 저장
          
          // 로그인 후 홈 화면으로 리디렉션
          navigate('/');
        })
        .catch((error) => {
          console.error('로그인 실패:', error);
        });
    }
  }, [navigate]);

  return <p>로그인 처리 중...</p>; // 처리 중 메시지
};

export default KakaoRedirect;
