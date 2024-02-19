import React, { useState } from 'react';
import styled from 'styled-components';
import { CustomersData } from '../data/CustomersData';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {

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

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers: React.ReactNode[] = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <PageButton key={i} className={currentPage === i ? 'active' : ''} onClick={() => handlePageChange(i)}>
          {i}
        </PageButton>
      );
    }
    return pageNumbers;
  };

  return (
    <Root>
      <PageContainer>
        <Button>
          {currentPage !== 1 ? (
            <PreviousPageButton onClick={() => handlePageChange(currentPage - 1)}>
              ←
            </PreviousPageButton>
          ):null }
          {renderPageNumbers()}
          <Dot>...</Dot>
          <LastPageButton onClick={() => handlePageChange(totalPages)}>
            {totalPages}
          </LastPageButton>
          {currentPage !== totalPages ? (
            <NextPageButton onClick={() => handlePageChange(currentPage + 1)}>
              →
            </NextPageButton>
          ) :null }
        </Button>
      </PageContainer>
    </Root>
  
  );
};

const Root = styled.div`
  
`
const PageContainer = styled.div`
  padding-top:30px;
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
