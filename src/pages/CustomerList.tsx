import React, { useEffect, useState } from 'react';
import { collection, getDocs , getFirestore, query, orderBy, onSnapshot, doc, Timestamp } from 'firebase/firestore';
import { auth } from '../firebase_settings/firebase';
// import { db } from '../firebase_settings/firebase';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
// import Pagination from './Pagination';
import CustomerListMap from './CustomerListMap';

// interface SortIconProps {
//     isHovered: boolean;
//     handleSort: () => void;
// }

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

  interface SignOutProps {
    signOutUser?: () => void;
  }

const CustomerList: React.FC<SignOutProps> = ({signOutUser}) => {
  // const [customers, setCustomers] = useState([
  //   { 
  //     idNumber: 1,
  //     name: '山田 太郎', 
  //     carNumber: '東京 200 は 2019',
  //     inspectionExpiryDate: '2023/04/01',
  //     currentCar: 'プリウスUグレード',
  //     proposedCar: 'アルファードXグレード',
  //     videoUrl: 'http://example.com/video/a',
  //     updateDate: '2023/01/01'
  //   },
  //   { 
  //     idNumber: 2,
  //     name: '鈴木 花子', 
  //     carNumber: '神奈川 300 さ 2020',
  //     inspectionExpiryDate: '2023/05/01',
  //     currentCar: 'フィットLグレード',
  //     proposedCar: 'シビックSグレード',
  //     videoUrl: 'http://example.com/video/b',
  //     updateDate: '2023/02/01'
  //   },
  // ]);

  // const [sortedCustomers, setSortedCustomers] = useState([...customers]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 10;
  // // 現在のページに表示する顧客を計算
  // const indexOfLastCustomer = currentPage * itemsPerPage;
  // const indexOfFirstCustomer = indexOfLastCustomer - itemsPerPage;
  // const [displayedCustomers, setDisplayedCustomers] = useState<Customer[]>([]); // ソートや検索に使う
  // const [currentCustomers, setCurrentCustomers] = useState<Customer[]>([]); // ページネーションに使う

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
    <Grid container justifyContent="center" alignItems="center">
      <Box p={4} width="100%">
        <CustomerListMap signOutUser={signOutUser}/>
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