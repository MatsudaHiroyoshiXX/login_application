import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import CustomersData from '../data/CustomersData';


const CustomerPage = () => {
  const { id } = useParams();
  const customer = CustomersData.find(customer => customer.id === id);
  console.log(customer)
  const [buttonText, setButtonText] = useState('編集');
  const toggleButton = () => {
    setButtonText((prevText) => (prevText === '編集' ? '保存' : '編集'));
  };

  return (
    <Root>
        <PageTitle>お客様詳細情報</PageTitle>
        <ProfileContainer>
          <Content>

            <ProfileContent>
              <UserName>{customer?.name}（{customer?.name_kana}）</UserName>
              <UserAge>{customer?.age}歳（{customer?.birth_date}）</UserAge>
            </ProfileContent>

            <ProfileList>
              <ProfileItem>
                <ItemTitle>種別ID：</ItemTitle>
                <ItemValue>{customer?.id}</ItemValue>
              </ProfileItem>
              <ProfileItem>
                <ItemTitle>お客様番号：</ItemTitle>
                <ItemValue>{customer?.user_number}</ItemValue>
              </ProfileItem>
              <ProfileItem>
                <ItemTitle>担当者：</ItemTitle>
                <ItemValue>山田 一郎</ItemValue>
              </ProfileItem>
            </ProfileList>

            <ProfileInformation>連絡先情報</ProfileInformation>
            <ProfileContact>
              <ContactTitle>TEL：</ContactTitle>
              <ContactValue>{customer?.tel}</ContactValue>
            </ProfileContact>
            <ProfileContact>
              <ContactTitle>MAIL：</ContactTitle>
              <ContactValue>{customer?.email}</ContactValue>
            </ProfileContact>

          </Content>
        </ProfileContainer>

        <StatusContainer>
          <StatusLeft>
            <TitleText>ステータス情報</TitleText>
            <Content>

              <ContentMain>

                <ContentLeft>
                  <StatusList>
                    <StatusItem>車両ナンバー</StatusItem>
                    <StatusValue>{customer?.carNumber}</StatusValue>
                  </StatusList>
                  <StatusList>
                    <StatusItem>車検満了日</StatusItem>
                    <StatusValue>{customer?.expiration_date}</StatusValue>
                  </StatusList>
                  <StatusList>
                    <StatusItem>乗り換え提案</StatusItem>
                    <StatusValue>{customer?.transfer_proposal.transfer_proposal_before} / {customer?.transfer_proposal.transfer_proposal_after}</StatusValue>
                  </StatusList>
                  <StatusList>
                    <StatusItem>更新日</StatusItem>
                    <StatusValue>{customer?.update_date}</StatusValue>
                  </StatusList>
                </ContentLeft>

                <ImageContainer>
                  <CarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQj1-py7Ahq39pc6noFkZqHLCulQIoSgNzA&usqp=CAU" />
                  <UrlList>
                    <UrlItem>動画URL：</UrlItem>
                    <UrlValue href={customer?.movie_url}>{customer?.movie_url}</UrlValue>
                  </UrlList>
                </ImageContainer>

              </ContentMain>

              <ProfileInformation>お客様メモ</ProfileInformation>
              <TextBox>{customer?.user_memo}</TextBox>

            </Content>
          </StatusLeft>

          <StatusRight>
          <TitleText>通知{customer?.notification.flag}</TitleText>
            <MessageContent>

              <MessageBox>
                <MessageList>
                  <MessageItem>{customer?.notification.message}</MessageItem>
                  <MessageValue></MessageValue>
                </MessageList>
                <MessageList>
                  <MessageItem>{customer?.notification.message}</MessageItem>
                  <MessageValue></MessageValue>
                </MessageList>
                <MessageList>
                  <MessageItem>{customer?.notification.message}</MessageItem>
                  <MessageValue></MessageValue>
                </MessageList>
              </MessageBox>

            </MessageContent>
          </StatusRight>
        </StatusContainer>

        <HistoryContainer>
        <TitleText>購入履歴・経歴</TitleText>
          <Content>

            <HistoryTable>
              <thead>
                <TableRow>
                  <TableHeader>No.</TableHeader>
                  <TableHeader>受注番号</TableHeader>
                  <TableHeader>受注日</TableHeader>
                  <TableHeader>対応状況</TableHeader>
                  <TableHeader>決済方法</TableHeader>
                  <TableHeader>合計</TableHeader>
                  <TableHeader>操作</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {customer?.purchase_history.map((row,index) => (
                <TableRow key={row.number}>
                  <TableData>{row.number}</TableData>
                  <TableData>{row.order_number}</TableData>
                  <TableData>{row.order_date}</TableData>
                  <TableData>{row.status}</TableData>
                  <TableData>{row.payment}</TableData>
                  <TableData>{row.total_amount}円</TableData>
                  <TableData>詳細 / <button onClick={toggleButton}>{buttonText}</button></TableData>
                </TableRow>
                ))}
              </tbody>
            </HistoryTable>

          </Content>
        </HistoryContainer>

    </Root>
  );
};

const Root = styled.div`
  padding:50px;
  background-color:#DEDEDE;
  max-width:1400px;
  margin:auto;
`
const PageTitle = styled.h1`
  font-size:36px;
`
const ProfileContainer = styled.div`
  width:890px;
  margin-top:70px;
`
const ProfileContent = styled.div`
  display:flex;
`
const UserName = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin:0;
`
const UserAge = styled.p`
  margin:0;
  display:flex;
  align-items: flex-end;
`
const ProfileList = styled.div`
  display:flex;
  gap:50px;
  padding-top:5px;
`
const ProfileItem = styled.div`
  display:flex;
  align-items: center;
  gap:5px;
`
const ItemTitle = styled.h3`
  font-size: 14px;
  margin:0;
`
const ItemValue = styled.p`
  font-size: 14px;
  margin:0;
`
const ProfileInformation = styled.h3`
  font-size: 16px;
  padding: 10px 0px;
  margin:10px 0px 0px 0px;
`
const ProfileContact = styled.div`
  display:flex;
`
const ContactTitle = styled.h3`
  font-size: 14px;
  margin:0;
`
const ContactValue = styled.p`
  font-size: 14px;
  padding-top:2px;
  margin:0;
`

const StatusContainer = styled.div`
  display:grid;
  grid-template-columns:2fr 1fr;
  gap:30px;
  margin-top:70px;
  justify-content:space-between;
`
const StatusLeft = styled.div`
  height:auto;
  width:890px;
`
const ContentMain = styled.div`
  display:flex;
`
const ContentLeft = styled.div`
  display:flex;
  flex-direction: column;
  gap:20px;
`
const StatusList = styled.div`
`
const StatusItem = styled.p`
  color:#717171;
  font-size: 16px;
  margin:0;
`
const StatusValue = styled.p`
  font-size: 24px;
  margin:0;
`
const ImageContainer = styled.div`
  margin:0 0 0 auto;
`
const CarImage = styled.img`
  width:438px;
  height:255px;
`
const UrlList = styled.div`
  display:flex;
`
const UrlItem = styled.p`
  margin:0 0 0 auto;
`
const UrlValue = styled.a`
  margin-top:2px;
`

const TextBox = styled.div`
  height:100px;
  background-color:#DEDEDE;
  padding:15px;
`

const StatusRight = styled.div`
  `
  
const MessageContent = styled.div`
  height: 468px;
  background-color:#ffffff;
  border-radius: 7px;
  padding: 25px;
`

const MessageBox = styled.div`
  background-color:#DEDEDE;
  margin:0px 0px 321px 0px;
  padding:5px 20px;
`
const MessageList = styled.div`
`
const MessageItem = styled.p`
  font-size: 16px;
`
const MessageValue = styled.p`
`

const TitleText = styled.h2`
  font-size:20px;
  margin:15px 10px;
`

const Content = styled.div`
  background-color:#ffffff;
  height:auto;
  border-radius: 7px;
  padding: 25px;
`
const HistoryContainer = styled.div`
  margin-top:70px;
  
`
const HistoryTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`
const TableRow = styled.tr`
`
const TableHeader = styled.th`
  background-color: #f2f2f2;
  text-align: left;
  border: 1px solid #000000;
  padding:5px 30px; 
  text-align: center;
`

const TableData = styled.td`
  border: 1px solid #000000;
  padding:5px 30px;
  text-align: center;
  &:first-child{
    width:30px;
  }
`

export default CustomerPage;
