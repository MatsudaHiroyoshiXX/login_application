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
      <EraseButton onClick={handleHideButtonClick}></EraseButton>
      <QrCodeCanvasContainer>
        <QrCodeCanvas value={url} size={size} />
      </QrCodeCanvasContainer>
      </QrContainer>
    </Root>
  );
};

const Root = styled.div`
`
const QrCodeCanvasContainer = styled.div`
  padding:50px 100px 100px;
`

const QrContainer =styled.div`
  background-color: #a9a9a9;
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius:10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`
const EraseButton = styled.div`
  margin: 20px 20px 0px auto;
  cursor: pointer;
  display: block;
  position: relative;
  width: 30px;
  height: 30px;
  border: 2px solid #333; /* 枠の調整 */
  background: #fff; /* ボタンの背景色 */
  
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3px; /* 棒の幅（太さ） */
    height: 27px; /* 棒の高さ */
    background: #333; /* バツ印の色 */
    transform: translate(-50%, -50%);
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  `


export default QrCode;
