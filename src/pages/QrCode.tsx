import React from 'react';
import styled from 'styled-components';
import QrCodeCanvas from "qrcode.react";

interface handleHideButtonClickProps {
  handleHideButtonClick?:()=>void;
  url: string;
  size: number;
}

const QrCode: React.FC<handleHideButtonClickProps>= ({url,size,handleHideButtonClick}) => {

  return (
    <Root>
      <QrContainer>
      <QrCodeCanvas value={url} size={size} />
      <EraseButton onClick={handleHideButtonClick}>❌</EraseButton>
      </QrContainer>
    </Root>
  );
};

const Root = styled.div`
`

const QrContainer =styled.div`
  background-color: #a9a9a9;
  height: 700px;
  width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:10px;
  position: fixed;
  margin-left:350px;
  margin-top: -750px;
  /* top: 50%;
  left: 50%;
  transform: 'translate(-50%,-50%)'  */
`
const EraseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 15px;
  border-radius:10px;
  border:none;
  font-size: 30px;
  cursor: pointer;
  `



export default QrCode;
