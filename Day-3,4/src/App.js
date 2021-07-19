import React, { useState } from "react";
import Icons from "./components/Icons";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {Container,Col,Card,CardBody,Row,Form,FormGroup,Input,Label,} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

const tictacArray = new Array(9).fill("");

const App = () => {

  const [isCross, setIsCross] = useState(true);
  const [winMsg, setWinMsg] = useState("");
  const changeInput = (e) => {
    if (e.target.value === "cross") {
      setIsCross(true);
    } else if (e.target.value === "circle") {
      setIsCross(false);
    }
  };

  const playAgain = () => {
    setIsCross(true);
    setWinMsg("");
    tictacArray.fill("");
  };

  const findWinner = () => {
    if (tictacArray[0] === tictacArray[1] && tictacArray[0] === tictacArray[2] && tictacArray[0] !== "") 
    {
      setWinMsg(tictacArray[0] + " is the winner");
    } 
    else if (tictacArray[3] === tictacArray[4] && tictacArray[3] === tictacArray[5] && tictacArray[3] !== "") 
    {
      setWinMsg(tictacArray[3] + " is the winner");
    } 
    else if (tictacArray[6] === tictacArray[7] && tictacArray[6] === tictacArray[8] && tictacArray[6] !== "") 
    {
      setWinMsg(tictacArray[6] + " is the winner");
    } 
    else if (tictacArray[0] === tictacArray[3] && tictacArray[0] === tictacArray[6] && tictacArray[0] !== "") 
    {
      setWinMsg(tictacArray[0] + " is the winner");
    } 
    else if (tictacArray[1] === tictacArray[4] && tictacArray[1] === tictacArray[7] && tictacArray[1] !== "") 
    {
      setWinMsg(tictacArray[1] + " is the winner");
    } 
    else if (tictacArray[2] === tictacArray[5] && tictacArray[2] === tictacArray[8] && tictacArray[2] !== "") 
    {
      setWinMsg(tictacArray[2] + " is the winner");
    } 
    else if (tictacArray[0] === tictacArray[4] && tictacArray[0] === tictacArray[8] && tictacArray[0] !== "") 
    {
      setWinMsg(tictacArray[0] + " is the winner");
    } 
    else if (tictacArray[2] === tictacArray[4] && tictacArray[2] === tictacArray[6] && tictacArray[2] !== "") 
    {
      setWinMsg(tictacArray[2] + " is the winner");
    }
  };

  const changeItem = (index) => {
    if (winMsg) {
      return toast("Game is already got over", { type: "success" });
    }
    if (tictacArray[index] === "") {
      tictacArray[index] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } 
    else {
      return toast("This is already filled", { type: "error" });
    }
    findWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="top-center"></ToastContainer>
      <Row>
        <Col md={6} className="mx-auto">
            
          {/* Input Form */}
          <Form className="mb-4">
            <FormGroup>
              <Label className="mb-2" for="yourChoice">
                Select your choice:{" "}
              </Label>
              <Input
                type="select"
                name="select"
                id="yourChoice"
                onChange={(e) => {
                  changeInput(e);
                }}
              >
                <option value={"cross"}>Cross</option>
                <option value={"circle"}>Circle</option>
              </Input>
            </FormGroup>
          </Form>

          {/* Message */}
          {tictacArray.includes("") ? (
            winMsg ? (
              <h2 className="win__message">{winMsg}</h2>
            ) : (
              <h2>{isCross ? "Cross's turns" : "Circle's turn"}</h2>
            )
          ) : winMsg ? (
            <h2 className="win__message">{winMsg}</h2>
          ) : (
            <h2 className="drawn__msg">Game Drawn...Please play again...</h2>
          )}

          {/* Game */}
          <div className="grid">
            {tictacArray.map((value, index) => {
              return (
                <Card
                  className="rounded-0 card__item"
                  onClick={() => {
                    changeItem(index);
                  }}
                >
                  <CardBody className="box">
                    <Icons choice={tictacArray[index]} />
                  </CardBody>
                </Card>
              );
            })}
          </div>

          {/* Play Again Button */}
          <div className="d-flex align-items-center justify-content-center mt-2 p-4">
            <button className="play__again" onClick={playAgain}>
              Play Again
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;