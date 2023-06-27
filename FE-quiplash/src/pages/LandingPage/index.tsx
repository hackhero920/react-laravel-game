import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./LandingPage.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

type Props = {};

function LandingPage({}: Props) {
  const navigate = useNavigate();

  //Form Logic
  const [showButtons, setShowButtons] = useState<boolean>(true);

  const showForm = function (): void {
    setShowButtons(false);
  };

  //Creating Room Logic
  const createGame = (): void => {
    //Check local storage to see if game already created
    //If not send request to create game and navigate to lobby page
    navigate("/lobby");
  };

  //Joining Room Logic
  const [roomCode, setRoomCode] = useState<any | null>("");
  const [roomError, setRoomError] = useState<string>("");

  const onRoomCodeChange = (event: any): void => {
    event.preventDefault();
    if (event.target.value.length == 5) {
      return;
    } else if (event.target.value.length > 5) {
      setRoomCode(event.target.value.slice(0, 4));
    } else {
      setRoomCode(event.target.value);
    }
  };

  const joinRoom = (code: string) => {
    //Make call to see if code works

    //If it does - navigate to room page
    if (code.length === 4) {
      navigate("/lobby");
    }
    //If it doesnt, set error
    else {
      setRoomError("Invalid code");
    }
  };

  return (
    <>
      <div className="home-page">
        <div className="container">
          <h1>Quipocalypse</h1>
          <div className="button-container mb-5">
            {showButtons ? (
              <>
                <Button
                  onClick={() => {
                    createGame();
                  }}
                  className="game-button"
                >
                  Create Game
                </Button>
                <Button
                  onClick={() => {
                    showForm();
                  }}
                  className="game-button"
                >
                  {" "}
                  Join Game
                </Button>{" "}
              </>
            ) : (
              <>
                <Form className="flex-col">
                  <Form.Group className="mb-3" controlId="formBasicRoomCode">
                    <Form.Control
                      value={roomCode}
                      onChange={onRoomCodeChange}
                      onKeyDown={(evt) =>
                        (evt.key === "e" && evt.preventDefault()) ||
                        (evt.key === "." && evt.preventDefault())
                      }
                      size="lg"
                      type="number"
                      placeholder="Enter room code"
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    onClick={() => {
                      joinRoom(roomCode);
                    }}
                  >
                    Join
                  </Button>
                  <span className="form-error">{roomError}</span>
                </Form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
