import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';


const CustomerPage = () => {
  const { name } = useParams();
  const [buttonText, setButtonText] = useState('編集');
  const toggleButton = () => {
    setButtonText((prevText) => (prevText === '編集' ? '保存' : '編集'));
  };

  const tableData = [
    { no: 1, number: 12345, date: '2023/2/15', situ: '注文済み', set: 'クレジットカード', total: '160,000円', ope: '詳細 / ', },
    { no: 2, number: 67890, date: '2023/5/17', situ: '注文済み', set: '現金', total: '150,000円', ope: '詳細 / ', },
    { no: 3, number: 37689, date: '2023/7/30', situ: '注文済み', set: 'クレジットカード', total: '250,000円', ope: '詳細 / ', },
    { no: 4, number: 49687, date: '2023/10/26', situ: '注文済み', set: 'クレジットカード', total: '180,000円', ope: '詳細 / ', },
    { no: 5, number: 19475, date: '2023/12/12', situ: '注文済み', set: '現金', total: '75,000円', ope: '詳細 / ', },
  ];

  return (
    <Root>
        <PageTitle>お客様詳細情報</PageTitle>
        <ProfileContainer>
          <Content>

            <ProfileContent>
              <UserName>{name}（フリガナ）</UserName>
              <UserAge>30歳（2000年1月1日）</UserAge>
            </ProfileContent>

            <ProfileList>
              <ProfileItem>
                <ItemTitle>種別ID：</ItemTitle>
                <ItemValue>aa123bb456</ItemValue>
              </ProfileItem>
              <ProfileItem>
                <ItemTitle>お客様番号：</ItemTitle>
                <ItemValue>1234567890</ItemValue>
              </ProfileItem>
              <ProfileItem>
                <ItemTitle>担当者：</ItemTitle>
                <ItemValue>山田 一郎</ItemValue>
              </ProfileItem>
            </ProfileList>

            <ProfileInformation>連絡先情報</ProfileInformation>
            <ProfileContact>
              <ContactTitle>TEL：</ContactTitle>
              <ContactValue>090-XXXX-XXXX</ContactValue>
            </ProfileContact>
            <ProfileContact>
              <ContactTitle>MAIL：</ContactTitle>
              <ContactValue>sample@sample.com</ContactValue>
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
                    <StatusValue>XX12345</StatusValue>
                  </StatusList>
                  <StatusList>
                    <StatusItem>車検満了日</StatusItem>
                    <StatusValue>2000/12/12</StatusValue>
                  </StatusList>
                  <StatusList>
                    <StatusItem>乗り換え提案</StatusItem>
                    <StatusValue>日産 / トヨタ</StatusValue>
                  </StatusList>
                  <StatusList>
                    <StatusItem>更新日</StatusItem>
                    <StatusValue>2022/12/12</StatusValue>
                  </StatusList>
                </ContentLeft>

                <ImageContainer>
                  <CarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQj1-py7Ahq39pc6noFkZqHLCulQIoSgNzA&usqp=CAU" />
                  <UrlList>
                    <UrlItem>動画URL：</UrlItem>
                    <UrlValue>https://xxxxxxxxxxxxxxxxxx.com</UrlValue>
                  </UrlList>
                </ImageContainer>

              </ContentMain>

              <ProfileInformation>お客様メモ</ProfileInformation>
              <TextBox>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</TextBox>

            </Content>
          </StatusLeft>

          <StatusRight>
          <TitleText>通知</TitleText>
            <Content>

              <MessageBox>
                <MessageList>
                  <MessageItem>新着メッセージ・・・・・・・・・・・</MessageItem>
                  <MessageValue></MessageValue>
                </MessageList>
                <MessageList>
                  <MessageItem>新着メッセージ・・・・・・・・・・・</MessageItem>
                  <MessageValue></MessageValue>
                </MessageList>
                <MessageList>
                  <MessageItem>新着メッセージ・・・・・・・・・・・</MessageItem>
                  <MessageValue></MessageValue>
                </MessageList>
              </MessageBox>

            </Content>
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
                {tableData.map((row) => (
                <TableRow key={row.no}>
                  <TableData>{row.no}</TableData>
                  <TableData>{row.number}</TableData>
                  <TableData>{row.date}</TableData>
                  <TableData>{row.situ}</TableData>
                  <TableData>{row.set}</TableData>
                  <TableData>{row.total}</TableData>
                  <TableData>{row.ope} <button onClick={toggleButton}>{buttonText}</button></TableData>
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
  height:auto;
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
