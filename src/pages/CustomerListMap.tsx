import React, { useState } from 'react';
import styled from 'styled-components';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import QrCodeIcon from '@mui/icons-material/QrCode';

const CustomerListMap = () => {
  
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = () => {
    };
    const [customers, setCustomers] = useState([
      { 
        name: '山田 太郎', 
        carNumber: '東京 200 は 2019',
        inspectionExpiryDate: '2023/04/01',
        currentCar: 'プリウスUグレード',
        proposedCar: 'アルファードXグレード',
        videoUrl: 'http://example.com/video/a',
        updateDate: '2023/01/01'
      },
      { 
        name: '鈴木 花子', 
        carNumber: '神奈川 300 さ 2020',
        inspectionExpiryDate: '2023/05/01',
        currentCar: 'フィットLグレード',
        proposedCar: 'シビックSグレード',
        videoUrl: 'http://example.com/video/b',
        updateDate: '2023/02/01'
      },
    ]);

  return (
    <Root>
      <PageTitle>お客様情報一覧</PageTitle>
      <SearchBox>
        <SearchTextField
          type="text"
          placeholder="検索キーワード"
          value={searchTerm}
        >
        </SearchTextField>

        <SearchButton  
        color="primary" 
        onClick={handleSearch}
        >
        </SearchButton>

      </SearchBox>

 
      <Table>
        <thead>
          <TableRow>
            <TableHeader>お名前</TableHeader>
            <TableHeader>車両ナンバー</TableHeader>
            <TableHeader>車検満了日</TableHeader>
            <TableHeader>乗り換え提案</TableHeader>
            <TableHeader>動画URL</TableHeader>
            <TableHeader>更新日</TableHeader>
            <TableHeader>詳細&動画編集</TableHeader>
          </TableRow>
        </thead>

        <tbody>
          {customers.map((row,index) => (
            <TableRow key={index}>
              <TableData>{row.name}</TableData>
              <TableData>{row.carNumber}</TableData>
              <TableData>{row.inspectionExpiryDate}</TableData>
              <TableData>{row.currentCar} / {row.proposedCar}</TableData>
              <TableData><IconButton><QrCodeIcon /></IconButton>
              <a href={row.videoUrl}>{row.videoUrl}</a></TableData>
              <TableData>{row.updateDate}</TableData>
              <TableData>
                <IconButton><AccountCircleIcon /></IconButton>
                <IconButton><EditIcon /></IconButton>
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>

    </Root>
  
  );
};


const Root = styled.div`
  padding: 40px;
`
const PageTitle = styled.h1`
`
const SearchBox = styled.div`
`
const SearchTextField = styled.input`
`
const SearchButton = styled.button`
`
const Table = styled.table`
  margin-top: 20px;
  width:100%;
  border-collapse:collapse;
`
const TableRow = styled.tr`
  text-align: left;
`
const TableHeader = styled.th`
  padding: 15px 20px;
  font-weight: 400;
  border-bottom: solid rgba(224, 224, 224, 1);
`
const TableData = styled.td`
  padding:20px 20px;
  border-bottom: solid rgba(224, 224, 224, 1);
`
const IconButton = styled.button`

`

export default CustomerListMap;