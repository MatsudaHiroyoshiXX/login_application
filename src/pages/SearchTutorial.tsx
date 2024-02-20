import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SearchTutorial = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => setUsers(data));
  }, []);
  console.log(users)

  return (
    <Container>
      <Main>
        <Title>検索アプリ</Title>
        <Input type="text"/>
        <Content>
          {users.map((user) => (
            <Box>
            <h3>名前</h3>
            <hr />
            <p>メール</p>
          </Box>
          ))}
        </Content>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

const Main = styled.div`
  padding:70px 150px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 200px;
  outline: none;
  border-radius:2px;
  padding: 10px 20px ;
  margin-bottom: 30px;
`;

const Content = styled.div`
  width:1200px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-left:60px;
`;

const Box = styled.div`
  width: 200px;
  height:150px;
  border: 1px solid #000;
  padding: 4px;
`;

export default SearchTutorial;
