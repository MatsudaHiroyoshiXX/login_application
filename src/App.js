import './App.css';
import Home from './pages/Home.tsx'
import styled from 'styled-components';


function App() {
  return (
    <>
    <LoginContainer>
    </LoginContainer>
      <Home />
    </>
  );
}

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
