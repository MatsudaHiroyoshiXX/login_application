import React from 'react';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase_settings/firebase';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; // アイテムを中央揃えにする
  padding: 10px 20px;
  background-color: #f4f4f4;
  border-bottom: 1px solid rgba(128, 128, 128, 0.3);
`;

const Title = styled.h1`
  font-size: 24px;
`;

const UserActions = styled.div`
  display: flex;
  align-items: center; // アイテムを中央揃えにする
`;

const UserImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin-left: 15px; // ログアウトボタンとの間隔を開ける
`;

const LogoutButton = styled.button`
  padding: 10px 20px;
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  border-radius: 50px;
  border: none;
  background-color: #f4f4f4; // ボタンの背景色を設定
  color: #656D76; // ボタンのテキスト色を白に設定
  cursor: pointer; // ホバー時にカーソルをポインターに設定
  border: 1px solid rgba(128, 128, 128, 0.3);

`;

interface HeaderProps {
  signOutUser?: () => void;
}

const Header: React.FC<HeaderProps> = ({ signOutUser }) => {
  const [user] = useAuthState(auth);

  return (
    <HeaderContainer>
      <Title>顧客管理システム</Title>
      {user && (
        <UserActions>
          <LogoutButton onClick={signOutUser}>ログアウト</LogoutButton>
          <UserImage src={auth.currentUser?.photoURL ?? undefined} alt="User" />
        </UserActions>
      )}
    </HeaderContainer>
  );
};

export default Header;
