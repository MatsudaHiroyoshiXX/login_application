import React, { useState } from 'react';
import styled from 'styled-components';
import { CustomersData } from '../data/CustomersData';

const Pagination = () => {

  interface Customer {
    name: string; // 名前
    carNumber: string; // 車両ナンバー
    inspectionExpiryDate: string; // 車検満了日
    currentCar: string; // 現在の車
    proposedCar: string; // 提案された車
    videoUrl: string; // 動画URL
    updateDate: string; // 更新日
    [key: string]: string;
  }

  return (
    <Root>
      {/* <PageContainer>
        <Button>
          <PreviousPageButton onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
            ←
          </PreviousPageButton>
          {Array.from({ length: Math.ceil(customers.length / itemsPerPage) }).map((_, index) => (
          <PageButton key={index} onClick={() => paginate(index + 1)} disabled={currentPage === index + 1}>
            {index + 1}
          </PageButton>
          ))}
          <Dot>...</Dot>
          <LastPageButton onClick={() => paginate(lastPage)} disabled={currentPage === lastPage}>
            10
          </LastPageButton>
          <NextPageButton onClick={() => paginate(currentPage + 1)} disabled={currentPage === lastPage}>
            →
          </NextPageButton>
        </Button>
      </PageContainer> */}
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

