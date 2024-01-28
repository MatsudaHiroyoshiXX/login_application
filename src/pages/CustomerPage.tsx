import React, { useState } from 'react';
import styled from 'styled-components';


const CustomerPage = () => {
  const [buttonText, setButtonText] = useState('編集');
  const [aaa, setAaa] = useState(true);
  const toggleButton = () => {
    setButtonText((prevText) => (prevText === '編集' ? '保存' : '編集'));
  };
  const toggleAaa = () => {
    setAaa(false)
    console.log('文字列でクリック')
    console.log(aaa)

  };

  return (
    <Root>
        <button onClick={toggleAaa}></button>
        <PageTitle>お客様詳細情報</PageTitle>
        <ProfileContainer>
          <Content>

            <ProfileContent>
              <UserName>田中 太郎（タナカ タロウ）</UserName>
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
                  <TableHeader>操作 <button onClick={toggleButton}>{buttonText}</button></TableHeader>
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
                  <TableData>{row.ope}</TableData>
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
`
const PageTitle = styled.h1`
  font-size:36px;
`
const ProfileContainer = styled.div`
  width:890px;
  margin:50px 0px 0px 0px;
`
const ProfileContent = styled.div`
  display:flex;
  margin-top:-30px
`
const UserName = styled.p`
  font-size: 24px;
  font-weight: 400;
`
const UserAge = styled.p`
  margin:30px 0px 0px 0px;
  
`
const ProfileList = styled.div`
  display:flex;
  margin:-30px 0px 0px 0px;
`
const ProfileItem = styled.div`
  display:flex;
  justify-content: space-between;
`
const ItemTitle = styled.h3`
  font-size: 14px;
  padding-right: 10px;
`
const ItemValue = styled.p`
  font-size: 14px;
  padding-right: 50px;
`
const ProfileInformation = styled.h3`
  font-size: 16px;
  margin-top:-5px;
`
const ProfileContact = styled.div`
  display:flex;
  margin:-25px 0px -10px 0px;
`
const ContactTitle = styled.h3`
  font-size: 14px;
`
const ContactValue = styled.p`
  font-size: 14px;
  padding-top:2px;
`

const StatusContainer = styled.div`
  display:grid;
  grid-template-columns:2fr 1fr;
  gap:30px;
  margin-top:70px;
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
`
const StatusList = styled.div`

`
const StatusItem = styled.p`
  color:#717171;
  font-size: 16px;
  margin-top:0px;
`
const StatusValue = styled.p`
  font-size: 24px;
  margin-top:-5px;
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
  margin-left:120px;
`
const UrlItem = styled.p`
  margin-top:0px;
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
  margin:0px 0px 377px 0px;
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
  margin-left:10px;
`

const Content = styled.div`
  background-color:#ffffff;
  height:auto;
  border-radius: 7px;
  padding: 25px;
`
const HistoryContainer = styled.div`
  margin-top:70px;
  width:100%;
`
const HistoryTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top:-10px;
  table-layout:fixed;
`
const TableRow = styled.tr`
  
`
const TableHeader = styled.th`
  background-color: #f2f2f2;
  text-align: left;
  border:solid;
  padding:5px 30px; 
`
const tableData = [
  { no: 1, number: 12345, date: '2000/12/12', situ: '注文済み', set: 'クレジットカード', total: '100,000円', ope: '詳細', },
  { no: 2, number: 12345, date: '2000/12/12', situ: '注文済み', set: '現金', total: '100,000円', ope: '詳細', },
  { no: 3, number: 12345, date: '2000/12/12', situ: '注文済み', set: 'クレジットカード', total: '100,000円', ope: '詳細', },
  { no: 4, number: 12345, date: '2000/12/12', situ: '注文済み', set: 'クレジットカード', total: '100,000円', ope: '詳細', },
  { no: 5, number: 12345, date: '2000/12/12', situ: '注文済み', set: 'クレジットカード', total: '100,000円', ope: '詳細', },
];

const TableData = styled.td`
  border: 1px solid #ddd;
  border:solid;
  padding:5px 30px;
  /* width: calc(100%/7); */
  &:first-child{
    width:50px;
  }
`

export default CustomerPage;
