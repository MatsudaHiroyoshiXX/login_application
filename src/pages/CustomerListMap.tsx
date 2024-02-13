import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import QrCodeIcon from '@mui/icons-material/QrCode';
import UpArrow from '../img/UpArrow.png';
import DownArrow from '../img/DownArrow.png';

const CustomerListMap = () => {
  
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [hoveredColumn, setHoveredColumn] = useState<null | string>(null);

    interface SortIconProps {
      isHovered: boolean;
      handleSort: () => void;
    }

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
    
    const [customers, setCustomers] = useState<Customer[]>([
      { 
        name: 'あ山田 太郎', 
        carNumber: '東京 200 は 2019',
        inspectionExpiryDate: '2023/07/11',
        currentCar: 'プリウスUグレード',
        proposedCar: 'アルファードXグレード',
        videoUrl: 'http://example.com/video/a',
        updateDate: '2023/03/24'
      },
      { 
        name: 'か鈴木 花子', 
        carNumber: '神奈川 300 さ 2020',
        inspectionExpiryDate: '2023/05/01',
        currentCar: 'フィットLグレード',
        proposedCar: 'シビックSグレード',
        videoUrl: 'http://example.com/video/b',
        updateDate: '2023/10/22'
      },
      { 
        name: 'さ佐藤 二郎', 
        carNumber: 'さいたま 400 は 2021',
        inspectionExpiryDate: '2023/01/01',
        currentCar: 'エスティマPグレード',
        proposedCar: 'ハイエースHグレード',
        videoUrl: 'http://example.com/video/a',
        updateDate: '2023/08/30'
      },
      { 
        name: 'た北野 悠人', 
        carNumber: '旭川 500 は 2022',
        inspectionExpiryDate: '2023/06/10',
        currentCar: 'ヴェゼルRグレード',
        proposedCar: 'オデッセイYグレード',
        videoUrl: 'http://example.com/video/a',
        updateDate: '2023/11/23'
      },
      { 
        name: 'な寄谷 海斗', 
        carNumber: '札幌 600 は 2023',
        inspectionExpiryDate: '2023/08/17',
        currentCar: 'ハリアーDグレード',
        proposedCar: 'ヤリスGグレード',
        videoUrl: 'http://example.com/video/a',
        updateDate: '2023/05/01'
      },
    ]);

    const [displayedCustomers, setDisplayedCustomers] = useState<Customer[]>(customers);

    const handleSearch = () => {
      const terms = searchTerm.split(/\s+/).filter(Boolean);
      const filtered = customers.filter(customer => {
        return terms.every(term => 
          Object.values(customer).some(value => 
            String(value).includes(term)
          )
        );
      });
      setDisplayedCustomers(filtered);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newSearchTerm = event.target.value;
      setSearchTerm(newSearchTerm);

      if (newSearchTerm.trim() === '') {
        setDisplayedCustomers(customers);
      }
    }

    const handleSort = (sortBy: keyof Customer) => {
      const sortedCustomers = [...displayedCustomers].sort((a,b)=> {
        if (sortOrder === 'asc') {
          return a[sortBy].localeCompare(b[sortBy],'ja-JP');
        } else {
          return b[sortBy].localeCompare(a[sortBy],'ja-JP');
        }
      });

      setDisplayedCustomers(sortedCustomers);
      setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };

    const ArrowImage: React.FC<SortIconProps> = ({isHovered, handleSort}) => (
      isHovered ? (
      <div onClick={handleSort} style={{position: 'absolute', right:0,top: '50%', transform: 'translateY(-50%)'}}>
        <img src={UpArrow} alt="up" style={{ cursor: 'pointer', display: 'block', width: 'auto', height: '7.54px' }}/>
        <img src={DownArrow} alt="down" style={{ cursor: 'pointer', display: 'block', width: 'auto', height: '7.54px', marginTop:5 }}/>
      </div>
        ) : null
      )

  return (
    <Root>
      <PageTitle>お客様情報一覧</PageTitle>
      <SearchBox>
        <SearchTextField
          type="text"
          placeholder="検索キーワード"
          value={searchTerm}
          onChange={handleSearchChange}
          maxLength={50} 
          style={{ fontSize:'20px', padding:'20px'}}
        >
        </SearchTextField>

        <SearchButton   
          onClick={handleSearch}>
          <StartIcon><SearchIcon/></StartIcon>
        </SearchButton>

      </SearchBox>

 
      <Table>
        <thead>
          <TableRow>
            <TableHeader 
              onMouseEnter={() => setHoveredColumn('name')}
              onMouseLeave={() => setHoveredColumn(null)}
              >
                <ArrowImage isHovered={hoveredColumn === 'name'} handleSort={() => handleSort('name')} />
              お名前
            </TableHeader>
            <TableHeader
              onMouseEnter={() => setHoveredColumn('carNumber')}
              onMouseLeave={() => setHoveredColumn(null)}
              >
                <ArrowImage isHovered={hoveredColumn === 'carNumber'} handleSort={() => handleSort('carNumber')} />
              車両ナンバー
            </TableHeader>
            <TableHeader
              onMouseEnter={() => setHoveredColumn('inspectionExpiryDate')}
              onMouseLeave={() => setHoveredColumn(null)}
              >
                <ArrowImage isHovered={hoveredColumn === 'inspectionExpiryDate'} handleSort={() => handleSort('inspectionExpiryDate')} />
              車検満了日
            </TableHeader>
            <TableHeader
              onMouseEnter={() => setHoveredColumn('currentCar')}
              onMouseLeave={() => setHoveredColumn(null)}
              >
                <ArrowImage isHovered={hoveredColumn === 'currentCar'} handleSort={() => handleSort('currentCar')} />
              乗り換え提案
            </TableHeader>
            <TableHeader>動画URL</TableHeader>
            <TableHeader
              onMouseEnter={() => setHoveredColumn('updateDate')}
              onMouseLeave={() => setHoveredColumn(null)}
              >
                <ArrowImage isHovered={hoveredColumn === 'updateDate'} handleSort={() => handleSort('updateDate')} />
              更新日
            </TableHeader>
            <TableHeader>詳細&動画編集</TableHeader>
          </TableRow>
        </thead>

        <tbody>
          {displayedCustomers.map((row,index) => (
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
  width: 752px;
  height: 57px;
  margin: auto;
  position: relative; 
  display: flex;
  justify-content: space-between;
  border-bottom: solid rgba(224, 224, 224, 1);
`

const SearchTextField = styled.input`
  width: 100%;
  border: none;
  outline: none;
`
const SearchButton = styled.button`
  position: relative;
  height: 44px;
  width: 68px;
  top:5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #0000cd;
  border-radius: 99px;
  border: none;
  box-shadow:0 4px 0 #dcdcdc;
  &:hover{
    opacity: 0.8;
  }
  &:active{
    box-shadow: none;
    top: 9px;
  }
`
const StartIcon = styled.div`
  color: white;
  position: relative;
  top:2px;
`
const Table = styled.table`
  margin-top: 45px;
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