import Button from "./button";
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootButton from 'react-bootstrap/Button';
import {Container, Row, Col}  from "react-bootstrap";

// const EmotionButton = styled.emotion`
//   background-color:blue;
//   color:white;
//   padding10px;
  
//   @:hover{
//     background-color:darkblue;
//   }
// `;

const StyledButton = styled.button`
  background-color:aquamarine;
  color:white;
  padding:10px;
  
  &:hover {
    background-color:blue;
  }
`;


function App() {
  return (
    <>
    <h2>버튼</h2>
      <Button/>
    <h2>StyledButton</h2>
      <StyledButton>StyledButton</StyledButton>
    <h2>EmotionButton</h2>
    <BootButton as ="input" type="button" value="Input" />
    <Container>
      <Row>
        <Col>
        <h1> Hello Wolrd!</h1>
        <BootButton variant='default'>버튼</BootButton>
        <BootButton variant='primary'>버튼</BootButton>
        <BootButton variant='success'>버튼</BootButton>
        <BootButton variant='info'>버튼</BootButton>
        <BootButton variant='warning'>버튼</BootButton>
        <BootButton variant='danger'>버튼</BootButton>
        <BootButton variant='link'>버튼</BootButton>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
