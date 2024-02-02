import React, { useEffect, useState } from 'react';
import { collection, getDocs , getFirestore, query, orderBy, onSnapshot, doc, Timestamp } from 'firebase/firestore';
import { auth } from '../firebase_settings/firebase';
// import { db } from '../firebase_settings/firebase';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import QrCodeIcon from '@mui/icons-material/QrCode';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styled from '@emotion/styled';
// import Pagination from './Pagination';
// import upArrow from '../img/UpArrow.png';
// import downArrow from '../img/DownArrow.png';
import { useNavigate } from 'react-router-dom';

interface SortIconProps {
    isHovered: boolean;
    handleSort: () => void;
}

interface Customer {
    customerNumber: string; // 顧客番号
    name: string; // 名前
    carNumber: string; // 車両ナンバー
    inspectionExpiryDate: string; // 車検満了日
    currentCar: string; // 現在の車
    proposedCar: string; // 提案された車
    videoUrl: string; // 動画URL
    updateDate: string; // 更新日
    [key: string]: string;
  }
  

const SearchBox = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '56.37px',
  position: 'relative',
})

// 追加: 検索ボックスと検索ボタンのスタイル
const SearchTextField = styled(TextField)({
  width: '752px',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderWidth: '0 0 1px 0', // 下線のみ
      borderRadius: 0, // 角を丸くしない
    },
  },
});

const SearchIconStyled = styled(SearchIcon)({
  marginLeft: 0,
  marginRight: 0,
});

const SearchButton = styled(Button)({
  position: 'absolute',
  transform: 'translateX(500%)',
  top: '50%',
  marginTop: '-22px',
  height: '44px',
  width: '68px',
  minWidth: '68px',
  borderRadius: '99px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#6200ea',
  ':hover': {
    backgroundColor: '#6200ea', // ホバー時の背景色
    cursor: 'pointer', // ホバー時にカーソルをポインターに変更
  }
});

// ソートアイコンのコンポーネント
// const SortIcons: React.FC<SortIconProps> = ({ isHovered, handleSort }) => (
//   isHovered ? (
//     <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
//       <img 
//         src="/img/UpArrow.png" 
//         alt="Up Arrow" 
//         style={{ cursor: 'pointer', display: 'block', width: 'auto', height: '7.54px' }}
//         onClick={handleSort}
//       />
//       <img 
//         src="/img/DownArrow.png" 
//         alt="Down Arrow" 
//         style={{ cursor: 'pointer', display: 'block', width: 'auto', height: '7.54px' }}
//         onClick={handleSort}
//       />
//     </div>
//   ) : null
// );

  // ダミーデータを新しい項目に合わせて変更します
  // const customers = [  
  //   { 
  //     name: '山田 太郎', 
  //     carNumber: '東京 200 は 2019',
  //     inspectionExpiryDate: '2023/04/01',
  //     currentCar: 'プリウスUグレード',
  //     proposedCar: 'アルファードXグレード',
  //     videoUrl: 'http://example.com/video/a',
  //     updateDate: '2023/01/01'
  //   },
  //   { 
  //     name: '鈴木 花子', 
  //     carNumber: '神奈川 300 さ 2020',
  //     inspectionExpiryDate: '2023/05/01',
  //     currentCar: 'フィットLグレード',
  //     proposedCar: 'シビックSグレード',
  //     videoUrl: 'http://example.com/video/b',
  //     updateDate: '2023/02/01'
  //   },

  // ];
const firestore = getFirestore();

interface Post {
    idNumber: number;
    id: string;
    text: string;
    timestamp: Timestamp;
    title: string;
    customerNumber: string; // 顧客番号
    name: string; // 名前
    carNumber: string; // 車両ナンバー
    inspectionExpiryDate: string; // 車検満了日
    currentCar: string; // 現在の車
    proposedCar: string; // 提案された車
    videoUrl: string; // 動画URL
    updateDate: string; // 更新日
  }
  
const CustomerList = () => {
  const navigate = useNavigate();

  const handleButtonClick = (idNumber: number) => {
    // ここで遷移先のパスを指定
    navigate('/CustomerPage/${idNumber}');
  };

  const [customers, setCustomers] = useState([
    { 
      idNumber: 1,
      name: '山田 太郎', 
      carNumber: '東京 200 は 2019',
      inspectionExpiryDate: '2023/04/01',
      currentCar: 'プリウスUグレード',
      proposedCar: 'アルファードXグレード',
      videoUrl: 'http://example.com/video/a',
      updateDate: '2023/01/01'
    },
    { 
      idNumber: 2,
      name: '鈴木 花子', 
      carNumber: '神奈川 300 さ 2020',
      inspectionExpiryDate: '2023/05/01',
      currentCar: 'フィットLグレード',
      proposedCar: 'シビックSグレード',
      videoUrl: 'http://example.com/video/b',
      updateDate: '2023/02/01'
    },
  ]);
  // const [posts, setPosts ] = useState<Post[]>([]);

  // const [sortField, setSortField] = useState<null | string>(null);
  // const [sortDirection, setSortDirection] = useState('default');  // 'asc', 'desc', 'default'
  // const [sortedCustomers, setSortedCustomers] = useState([...customers]);
  // const [hoveredColumn, setHoveredColumn] = useState<null | string>(null);
  // const [searchTerm, setSearchTerm] = useState('');  // 検索キーワードを管理するstate
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 10;
  // // 現在のページに表示する顧客を計算
  // const indexOfLastCustomer = currentPage * itemsPerPage;
  // const indexOfFirstCustomer = indexOfLastCustomer - itemsPerPage;
  // const [displayedCustomers, setDisplayedCustomers] = useState<Customer[]>([]); // ソートや検索に使う
  // const [currentCustomers, setCurrentCustomers] = useState<Customer[]>([]); // ページネーションに使う

  //   // 検索処理
  //   const handleSearch = () => {
  //     const terms = searchTerm.split(/\s+/).filter(Boolean);  // スペースでキーワードを分割
  //     const filtered = sortedCustomers.filter(customer => {
  //       return terms.every(term => 
  //         Object.values(customer).some(value => 
  //           String(value).includes(term)
  //         )
  //       );
  //     });
  //     setDisplayedCustomers(filtered);
  //   };

  // const handleSort = (field: string) => {
  //   let direction = '';
    
  //   if (sortField !== field) {
  //     direction = 'asc';
  //   } else {
  //     switch (sortDirection) {
  //       case 'default':
  //         direction = 'asc';
  //         break;
  //       case 'asc':
  //         direction = 'desc';
  //         break;
  //       case 'desc':
  //         direction = 'default';
  //         break;
  //       default:
  //         direction = 'default';
  //     }
  //   }
    
  //   setSortField(field);
  //   setSortDirection(direction);
  
  //   let sortedData = [];
  //   if (direction === 'default') {
  //     sortedData = [...customers];
  //   } else {
  //     const collator = new Intl.Collator('ja', { numeric: true });
  //     sortedData = [...sortedCustomers].sort((a, b) => {
  //       return collator.compare(a[field], b[field]) * (direction === 'asc' ? 1 : -1);
  //     });
  //   }
  //   setSortedCustomers(sortedData);
  //   setDisplayedCustomers(sortedData);
  // };

  // useEffect(() => {
  //   const collator = new Intl.Collator('ja', { numeric: true });
  //   const initialSortedData = [...customers].sort((a, b) => {
  //     return collator.compare(a.name, b.name);
  //   });
    
  //   setSortedCustomers(initialSortedData);
  //   setDisplayedCustomers(initialSortedData);
  //   setCurrentCustomers(initialSortedData.slice(indexOfFirstCustomer, indexOfLastCustomer));
  // }, []);

  //   // displayedCustomersが変更されたとき、またはcurrentPageが変更されたときにcurrentCustomersを更新
  //   useEffect(() => {
  //     const indexOfLastCustomer = currentPage * itemsPerPage;
  //     const indexOfFirstCustomer = indexOfLastCustomer - itemsPerPage;
  //     setCurrentCustomers(displayedCustomers.slice(indexOfFirstCustomer, indexOfLastCustomer));
  //   }, [displayedCustomers, currentPage]);
  

  // useEffect(() => {
  //   const q = query(collection(firestore, "posts"), orderBy("timestamp", "desc"));
  //   const postData = collection(db, "posts");
  //   console.log(postData);
  //   getDocs(postData).then((snapshot) => {
  //       const snapData = snapshot.docs.map((doc) => ({ ...doc.data()}))
  //       setPosts(snapData as Post[])
  //   });

  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     const customerData = querySnapshot.docs.map(doc => ({
  //       id: doc.id,
  //       ...doc.data()
  //     }));
  //   //   setCustomers(customerData);
  //   });

  //   return () => unsubscribe();
  // }, []);

  return (
    // <div>
    //   <h1>Customer List</h1>
    //   {posts.map(post => (
    //     <div key={post.id}>
    //       <h2>{post.title}</h2>
    //       <p>{post.text}</p>
    //       <p>{post.timestamp?.toDate().toString()}</p>
    //     </div>
    //   ))}
    // </div>
    <Grid container justifyContent="center" alignItems="center">
    <Box p={4} width="100%">
      <h1>お客様情報一覧</h1>
      {/* <SearchBox>
        <SearchTextField
          type="text"
          placeholder="検索キーワード"
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: "transparent",
                borderBottom: "1px solid"
              },
            },
          }}
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          inputProps={{ maxLength: 50 }}  // 最大文字数は50文字
        />
        <SearchButton 
          variant="contained" 
          color="primary" 
          startIcon={<SearchIconStyled />}
          onClick={handleSearch}
        >
        </SearchButton>
      </SearchBox> */}
      <Box mt={4}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
              // onMouseEnter={() => setHoveredColumn('name')}
              // onMouseLeave={() => setHoveredColumn(null)}
              >お名前
              {/* <SortIcons isHovered={hoveredColumn === 'name'} handleSort={() => handleSort('name')} /> */}
              </TableCell>
              <TableCell
              // onMouseEnter={() => setHoveredColumn('carNumber')}
              // onMouseLeave={() => setHoveredColumn(null)}
              >車両ナンバー
              {/* <SortIcons isHovered={hoveredColumn === 'carNumber'} handleSort={() => handleSort('carNumber')} /> */}
              </TableCell>
              <TableCell
              // onMouseEnter={() => setHoveredColumn('inspectionExpiryDate')}
              // onMouseLeave={() => setHoveredColumn(null)}
              >車検満了日
              {/* <SortIcons isHovered={hoveredColumn === 'inspectionExpiryDate'} handleSort={() => handleSort('inspectionExpiryDate')} /> */}
              </TableCell>
              <TableCell
              // onMouseEnter={() => setHoveredColumn('currentCar')}
              // onMouseLeave={() => setHoveredColumn(null)}
              >乗り換え提案
              {/* <SortIcons isHovered={hoveredColumn === 'currentCar'} handleSort={() => handleSort('currentCar')} /> */}
              </TableCell>
              <TableCell>動画URL</TableCell>
              <TableCell 
              // onMouseEnter={() => setHoveredColumn('updateDate')}
              // onMouseLeave={() => setHoveredColumn(null)}
              >更新日
              {/* <SortIcons isHovered={hoveredColumn === 'updateDate'} handleSort={() => handleSort('updateDate')} /> */}
              </TableCell>
              <TableCell>詳細＆動画編集</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {customers.map((customer, index) => (
              <TableRow key={index}>
              <TableCell onClick={() => handleButtonClick(customer.idNumber)}>{customer.name}</TableCell>
              <TableCell>{customer.carNumber}</TableCell>
              <TableCell>{customer.inspectionExpiryDate}</TableCell>
              <TableCell>
              {customer.currentCar} / {customer.proposedCar}
              </TableCell>
                <TableCell>
                <IconButton><QrCodeIcon /></IconButton>
                <a href={customer.videoUrl}>{customer.videoUrl}</a>
                </TableCell>
                <TableCell>{customer.updateDate}</TableCell>
                <TableCell>
                <IconButton><AccountCircleIcon /></IconButton>
                  <IconButton><EditIcon /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      {/* <Pagination 
  currentPage={currentPage}
  itemsPerPage={itemsPerPage}
  totalItems={displayedCustomers.length}
  setCurrentPage={setCurrentPage}
/> */}
    </Box>
  </Grid>
  );
};





export default CustomerList;