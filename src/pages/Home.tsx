import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase_settings/firebase'; // Firebaseの設定をインポート
import { signInWithPopup, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import UserInfo from '../components/UserInfo'
import Header from '../components/Header'


const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // サインイン成功時の処理
      console.log('サインイン成功:', result.user);
    })
    .catch((error) => {
      // エラー処理
      console.error('サインインエラー:', error);
    });
};

// サインアウト機能（オプション）
const signOutUser = () => {
  signOut(auth).then(() => {
    // サインアウト成功時の処理
    console.log('サインアウト成功');
  }).catch((error) => {
    // エラー処理
    console.error('サインアウトエラー:', error);
  });
};

function Home() {
  // ログイン認証状況の状態管理
  const [ user, loading ] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Header />
    {user ? (
      <>
        <UserInfo user={user} />
        <ButtonContainer>
        <SignUpButton onClick={signOutUser}>ログアウト</SignUpButton>
    </ButtonContainer>
      </>
    ) : (
      <LoginContainer>
        <LoginBox>
        <Title>ログインへ進む</Title>
        <SignInButton onClick={signInWithGoogle}>Googleでサインイン</SignInButton>
        </LoginBox>
      </LoginContainer>

    )}
    <ButtonContainer>
    </ButtonContainer>
    </>
  )
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  height: 100vh;
  background-color: #fcfcfc;
  `;

const LoginBox = styled.div`
  background: #fff;
  padding: 40px;
  height: 250px;
  display:flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  min-width: 420px; /* 最小幅を設定 */
  max-width: 500px; /* 最大幅を設定 */
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 37px;
  margin-top: 15px;
`;


const Button = styled.button`
  padding: 15px 35px;
  margin-top: 30px;
  border: none;
  border-radius: 5px;
  background-color: #6200ea; // プライマリーカラーにはモダンな色を選択
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: background-color 0.3s, transform 0.3s;
  box-sizing: border-box; // これを設定する

  &:hover {
    background-color: #7f39fb; // ホバー時は少し明るい色
    transform: translateY(-2px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }

  &:active {
    background-color: #4b0082; // クリック時はより濃い色
    transform: translateY(1px);
  }
`;

// サインインボタン
const SignInButton = styled(Button)`
  margin-right: 0px; // 隣接する要素との間にスペースを確保
  border: 2px solid transparent; // 透明な境界線を設定する

`;

// サインアップボタン
const SignUpButton = styled(Button)`
  background-color: #ffffff; // サインアップは白色の背景
  color: #6200ea;
  border: 2px solid #6200ea; // プライマリーカラーの枠線
  margin-left: 20px;
  &:hover {
    background-color: #f3e5f5; // ホバー時は薄いプライマリーカラー
  }

  &:active {
    background-color: #e1bee7; // クリック時は少し濃い色
  }
`;



export default Home