import React, { useState } from 'react';
import styled from 'styled-components';

const Pagination = () => {
  
  return (
    <Root>
      <PageContainer>
        <Button>
          <PreviousPageButton>←</PreviousPageButton>
          <PageButton>1</PageButton>
          <Dot>...</Dot>
          <LastPageButton>10</LastPageButton>
          <NextPageButton>→</NextPageButton>
        </Button>
      </PageContainer>
    </Root>
  
  );
};

const Root = styled.div`
  
`
const PageContainer = styled.div`
  padding-top:10px;
`
const Button = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
`
const PreviousPageButton = styled.button`
  width: 70px;
  height: 40px;
  color: blue;
  background-color: white;
  border: 1px solid blue;
  border-radius:5px;
`
const PageButton = styled.button`
  width: 70px;
  height: 40px;
  color: blue;
  background-color: white;
  border: 1px solid blue;
  border-radius:5px;
`
const Dot = styled.div`
  margin: 10px 30px;
  color: grey;
`
const LastPageButton = styled.button`
  width: 70px;
  height: 40px;
  color: blue;
  background-color: white;
  border: 1px solid blue;
  border-radius:5px;
`
const NextPageButton = styled.button`
  width: 70px;
  height: 40px;
  color: blue;
  background-color: white;
  border: 1px solid blue;
  border-radius:5px;
`

export default Pagination;

