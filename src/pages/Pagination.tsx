import React, { useState } from 'react';
import styled from 'styled-components';

interface PaginationProps { 
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers: React.ReactNode[] = [];
    const allayTotalPages = totalPages -1
    Array.from({ length: allayTotalPages }).forEach((_, i) => {
      const pageNumber = i + 1;
      const minPage = Math.max(1, currentPage - 3);
      const maxPage = Math.min(allayTotalPages, currentPage + 3);

      if (
        (currentPage <= 3 && pageNumber <= 7) || // currentPageが3以下の時にも7件表示
        (currentPage >= totalPages - 3 && pageNumber >= totalPages - 7) || // currentPageがtotalPagesから数えて3件未満の時にも7件表示
        (pageNumber >= minPage && pageNumber <= maxPage) 
      ) {
        pageNumbers.push(
          <PageButton
            key={pageNumber}
            isActive={currentPage === pageNumber}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </PageButton>
        );
      }
    });
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
          ):(
            <NullButton>
            </NullButton> 
          )}
          {renderPageNumbers()}
          <Dot>...</Dot>
          <LastPageButton isActive={currentPage === totalPages} onClick={() => handlePageChange(totalPages)}>
            {totalPages}
          </LastPageButton>
          {currentPage !== totalPages ? (
            <NextPageButton onClick={() => handlePageChange(currentPage + 1)}>
              →
            </NextPageButton>
          ):(
            <NullButton>
            </NullButton> 
          )}
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
`
const PreviousPageButton = styled.button`
  width: 70px;
  height: 40px;
  color: blue;
  background-color: white;
  border: 1px solid blue;
  border-radius:5px;
  cursor: pointer;
  &:hover{
    background-color: #f3e5f5;
  }
  &:active{
    background-color: blue;
    color: #fff;
  }
`
const NullButton = styled.div`
  width: 70px;
  height: 40px;
`
const PageButton = styled.button<{isActive:boolean}>`
  background-color: ${(props) => (props.isActive ? 'blue' : 'white')};
  width: 70px;
  height: 40px;
  color:  ${(props) => (props.isActive ? 'white' : 'blue')};
  border: 1px solid blue;
  border-radius:5px;
  cursor: pointer;
  &:hover{
    background-color: ${(props) => (props.isActive ? 'blue' : '#f3e5f5')};
    opacity: 0.8;
  }
  &:active{
    background-color: blue;
    color: #fff;
  }
`
const Dot = styled.div`
  margin: 10px 30px;
  color: grey;
`
const LastPageButton = styled.button<{isActive:boolean}>`
  width: 70px;
  height: 40px;
  color: ${(props) => (props.isActive ? 'white' : 'blue')};
  background-color: ${(props) => (props.isActive ? 'blue' : 'white')};
  border: 1px solid blue;
  border-radius:5px;
  cursor: pointer;
  &:hover{
    background-color: ${(props) => (props.isActive ? 'blue' : '#f3e5f5')};
  }
  &:active{
    background-color: blue;
    color: #fff;
  }
`
const NextPageButton = styled.button`
  width: 70px;
  height: 40px;
  color: blue;
  background-color: white;
  border: 1px solid blue;
  border-radius:5px;
  cursor: pointer;
  &:hover{
    background-color: #f3e5f5;
  }
  &:active{
    background-color: blue;
    color: #fff;
  }
`

export default Pagination;
