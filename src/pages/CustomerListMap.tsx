import React, { useState } from 'react';
import styled from 'styled-components';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import QrCodeIcon from '@mui/icons-material/QrCode';
import UpArrow from '../img/UpArrow.png';
import DownArrow from '../img/DownArrow.png';

const CustomerListMap = () => {
  
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = () => {
    };
    const [customers, setCustomers] = useState([
      { 
        name: 'や山田 太郎', 
        carNumber: '東京 200 は 2019',
        inspectionExpiryDate: '2023/04/01',
        currentCar: 'プリウスUグレード',
        proposedCar: 'アルファードXグレード',
        videoUrl: 'http://example.com/video/a',
        updateDate: '2023/01/01'
      },
      { 
        name: 'す鈴木 花子', 
        carNumber: '神奈川 300 さ 2020',
        inspectionExpiryDate: '2023/05/01',
        currentCar: 'フィットLグレード',
        proposedCar: 'シビックSグレード',
        videoUrl: 'http://example.com/video/b',
        updateDate: '2023/02/01'
      },
      { 
        name: 'さ佐藤 二郎', 
        carNumber: 'さいたま 400 は 2021',
        inspectionExpiryDate: '2023/06/01',
        currentCar: 'エスティマPグレード',
        proposedCar: 'ハイエースHグレード',
        videoUrl: 'http://example.com/video/a',
        updateDate: '2023/03/01'
      },
      { 
        name: 'き北野 悠人', 
        carNumber: '旭川 500 は 2022',
        inspectionExpiryDate: '2023/07/01',
        currentCar: 'ヴェゼルRグレード',
        proposedCar: 'オデッセイYグレード',
        videoUrl: 'http://example.com/video/a',
        updateDate: '2023/04/01'
      },
      { 
        name: 'よ寄谷 海斗', 
        carNumber: '札幌 600 は 2023',
        inspectionExpiryDate: '2023/08/01',
        currentCar: 'ハリアーDグレード',
        proposedCar: 'ヤリスGグレード',
        videoUrl: 'http://example.com/video/a',
        updateDate: '2023/05/01'
      },
    ]);

    const [isHovered, setIsHovered] = useState(false);
    
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    
    const [sortOrder, setSortOrder] = useState('asc');

    const handleSort = () => {
      const sortedCustomers = [...customers].sort((a,b)=> {
        if (sortOrder === 'asc') {
          return a.name.localeCompare(b.name,'ja-JP');
        } else {
          return b.name.localeCompare(a.name,'ja-JP');
        }
      });

      setCustomers(sortedCustomers);
      setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };

    const ArrowImage = () => {
      return <div onClick={handleSort} style={{position: 'absolute', right:0,top: '50%', transform: 'translateY(-50%)'}}>
        <img src={UpArrow} alt="up" style={{ cursor: 'pointer', display: 'block', width: 'auto', height: '7.54px' }}/>
        <img src={DownArrow} alt="down" style={{ cursor: 'pointer', display: 'block', width: 'auto', height: '7.54px', marginTop:5 }}/>
      </div>
    }

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
            <TableHeader 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              >{isHovered && (<ArrowImage/>)}
              お名前</TableHeader>
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
  padding:20px;
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
  position: relative;
`
const TableData = styled.td`
  padding:20px 20px;
  border-bottom: solid rgba(224, 224, 224, 1);
`
const IconButton = styled.button`

`

export default CustomerListMap;