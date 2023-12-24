import React from 'react';
import styled from 'styled-components';
import { User } from 'firebase/auth';

type UserInfoProps = {
  user: User;
};

const UserInfoContainer = styled.div`
  padding: 20px;
  margin: 10px 0;
  background-color: #f3f4f6;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const UserName = styled.h2`
  color: #6200ea;
  font-size: 1.5em;
  margin-bottom: 0.5em;
`;

const UserEmail = styled.p`
  color: #333;
  font-size: 1em;
`;

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <UserInfoContainer>
      {/* <UserName>{user.displayName || '名無しさん'}</UserName>
      <UserEmail>{user.email}</UserEmail> */}
      ユーザー情報
    </UserInfoContainer>
  );
};

export default UserInfo;
