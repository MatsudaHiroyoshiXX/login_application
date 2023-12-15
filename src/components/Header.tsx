import React from 'react';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase_settings/firebase';
import UserInfo from './UserInfo';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #f4f4f4;
  border-bottom: 1px solid rgba(128, 128, 128, 0.3); /* 半透明のグレー */
  `;

const Title = styled.h1`
  font-size: 24px;
`;
const Title2 = styled.h1`
  font-size: 24px;
`;
const Title3 = styled.h1`
  font-size: 24px;
`;

const UserImage = styled.img`
  height: 40px; // 画像の高さを調整
  width: 40px; // 画像の幅を調整
  border-radius: 20px; // 丸い形状にする
`;

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <HeaderContainer>
      <Title>顧客管理システム</Title>
      {user && <UserImage src={auth.currentUser?.photoURL ?? undefined} alt="User" />}
    </HeaderContainer>
  );
};

export default Header;
