import React, { useEffect, useState } from 'react';
import { collection, getDocs , getFirestore, query, orderBy, onSnapshot, doc, Timestamp } from 'firebase/firestore';
import { auth } from '../firebase_settings/firebase';
// import { db } from '../firebase_settings/firebase';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import CustomerListMap from './CustomerListMap';


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

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Box p={4} width="100%">
        <CustomerListMap signOutUser={signOutUser}/>
      </Box>
    </Grid>
  );
};




export default CustomerList;