import React from "react";
import "./LobbyPage.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

function LobbyPage() {
  return (
    <div className="lobby-container">
      <Row className="row-width">
        <Col lg={6} sm={12}>
          <div className="left-container  d-md-none d-none d-lg-block">
            <div>
              <h1>QUIPOCALYPSE</h1>
            </div>
            <div>
              <h3>
                To join this game, go to this URL and enter the following code
              </h3>
            </div>
          </div>
        </Col>
        <Col lg={6} sm={12}>
          <div className="right-container d-md-none d-none d-lg-block">
            <h1>Players:</h1>
            <div className="player-list">
              <div className="player-list-item"></div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default LobbyPage;
