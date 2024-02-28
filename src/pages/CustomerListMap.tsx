import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import QrCodeIcon from '@mui/icons-material/QrCode';
import UpArrow from '../img/UpArrow.png';
import DownArrow from '../img/DownArrow.png';
import { Link } from 'react-router-dom';
import { CustomersData } from '../data/CustomersData'
import Pagination from './Pagination'
// import SearchTutorial from './SearchTutorial'
import QrCode from './QrCode'

interface SignOutProps {
  signOutUser?: () => void;
}

const CustomerListMap: React.FC<SignOutProps> = ({signOutUser}) => {
  
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [hoveredColumn, setHoveredColumn] = useState<null | string>(null);
    const [displayedElement, setDisplayedElement] = useState<boolean>(false);
    const [url,setUrl] = useState('');

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

    const [customers, setCustomers] = useState<Customer[]>(CustomersData);

    const [searchedCustomers, setSearchedCustomers] = useState<Customer[]>(customers);

    const handleSearch = () => {
      const terms = searchTerm.split(/\s+/).filter(Boolean);
      const filtered = customers.filter(customer => {
        return terms.every(term => 
          Object.values(customer).some(value => 
            String(value).includes(term)
          )
        );
      });
      setSearchedCustomers(filtered);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newSearchTerm = event.target.value;
      setSearchTerm(newSearchTerm);

      if (newSearchTerm.trim() === '') {
        setSearchedCustomers(customers);
      }
    }

    const handleSort = (sortBy: keyof Customer) => {
      const sortedCustomers = [...searchedCustomers].sort((a,b)=> {
        if (sortOrder === 'asc') {
          return a[sortBy].localeCompare(b[sortBy],'ja-JP');
        } else {
          return b[sortBy].localeCompare(a[sortBy],'ja-JP');
        }
      });

      setSearchedCustomers(sortedCustomers);
      setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };

    const handleButtonClick = (videoUrl:string) => {
      // ボタンがクリックされたら、指定された要素を表示
      setDisplayedElement(true);
      setUrl(videoUrl);
    };

    const handleHideButtonClick = () => {
      // 非表示ボタンがクリックされたら、要素を非表示にする
      setDisplayedElement(false);
    };

    const ArrowImage: React.FC<SortIconProps> = ({isHovered, handleSort}) => (
      isHovered ? (
      <div onClick={handleSort} style={{position: 'absolute', right:0,top: '50%', transform: 'translateY(-50%)'}}>
        <img src={UpArrow} alt="up" style={{ cursor: 'pointer', display: 'block', width: 'auto', height: '7.54px' }}/>
        <img src={DownArrow} alt="down" style={{ cursor: 'pointer', display: 'block', width: 'auto', height: '7.54px', marginTop:5 }}/>
      </div>
        ) : null
      )

      const [data, setData] = useState<Customer[]>(searchedCustomers);
      const [currentPage, setCurrentPage] = useState<number>(1);
      const itemsPerPage = 3;
      const maxPageNumbers = 7;
    
      const indexOfLastCustomer = currentPage * itemsPerPage;
      const indexOfFirstCustomer = indexOfLastCustomer - itemsPerPage;
      const displayedCustomers = data.slice(indexOfFirstCustomer, indexOfLastCustomer);
    
      const lastPage = Math.ceil(data.length / itemsPerPage);

      const handlePageChange = (page: number) => {
        setCurrentPage(page);
      };

      useEffect(() => {
        setData(searchedCustomers)
      }, [searchedCustomers])
      
      
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
        >
        </SearchTextField>

        <SearchButton   
          onClick={handleSearch}>
          <StartIcon><SearchIcon/></StartIcon>
        </SearchButton>

      </SearchBox>

      <TableWrapper>
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
                <TableData>
                  <UrlContainer>
                    <CustomQrCodeIcon onClick={() => handleButtonClick(row.videoUrl)} />
                    <a href={row.videoUrl}>{row.videoUrl}</a>
                  </UrlContainer>
                </TableData>
                <TableData>{row.updateDate}</TableData>
                <TableData>
                    <Link to={`/customer/${row.name}`}>
                      <CustomAccountCircle />
                    </Link>
                  <CustomEditIcon />
                </TableData>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
        <Pagination 
          currentPage={currentPage} 
          totalPages={lastPage} 
          onPageChange={handlePageChange}
        />
        <ButtonBox>
          <SignOutButton onClick={signOutUser}>ログアウト</SignOutButton>
        </ButtonBox>
        {/* <SearchTutorial/> */}

        {displayedElement && (
          <QrCode handleHideButtonClick={handleHideButtonClick} 
            url={url} 
            size={450}
            />
        )}
        
        
    </Root>
  
  );
};

const CustomAccountCircle = styled(AccountCircleIcon)({
  marginLeft:'10px',
})

const CustomEditIcon = styled(EditIcon)({
  marginLeft:'20px',
  color:'gray'
})

const CustomQrCodeIcon = styled(QrCodeIcon)({
  marginLeft:'10px',
  cursor:'pointer',
  color:'gray'
})

const UrlContainer = styled.div`
  display: flex;
  align-items:center;
`

const Root = styled.div`
  padding:20px;
  max-width: 1600px;
  margin: auto;
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
  font-size:20px;
  padding:20px;
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
const TableWrapper = styled.div`
  height: 280px;
`
const Table = styled.table`
  width:1410px;
  margin: 45px auto;
  border-collapse:collapse;
`
const TableRow = styled.tr`
  text-align: left;
  border-bottom: solid rgba(224, 224, 224, 1);
`
const TableHeader = styled.th`
  padding: 15px 20px;
  font-weight: 400;
  position: relative;
`
const TableData = styled.td`
  padding:20px 20px;
`
const IconButton = styled.button`

`
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`
const SignOutButton = styled.button`
  padding: 15px 35px;
  font-size: 16px;
  font-weight: bold;
  border-radius:5px;
  background-color: #ffffff; // サインアップは白色の背景
  color: #6200ea;
  border: 2px solid #6200ea; // プライマリーカラーの枠線
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: background-color 0.3s,transform 0.3s;
  box-sizing: border-box;
  &:hover {
    background-color: #f3e5f5; // ホバー時は薄いプライマリーカラー
    transform: translateY(-2px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }

  &:active {
    background-color: #e1bee7; // クリック時は少し濃い色
    transform: translateY(1px);
  }
`

export default CustomerListMap;