import React from "react";
import {Row,Col,Image, Container, Button} from 'react-bootstrap';
import { GridFill,People,Boxes,BoxArrowLeft } from 'react-bootstrap-icons';
import logo from '../logo.svg';
export default function Sidebar() {
    return (
        <Container className="p-2" style={{backgroundColor: '#f8f9fa', height: '100vh'}}>
        <Row className="flex-column align-items-center justify-content-center"> 
            <Col>
            <Image src={logo} rounded />
            </Col>
            <Col>
              <h2 className="fs-6 text-center">Abdullah Abdelmouty</h2>
                <p className="fs-6 text-center">Software Engineer</p>
            </Col>
        </Row>
        <div className="list-group">
            <Row className="g-2 flex-column">
                <Col>
                    <Button variant="primary" className="list-group-item list-group-item-action rounded"><span><GridFill/></span> Overview</Button>
                </Col>
                <Col>
                    <Button variant="primary" className="list-group-item list-group-item-action rounded"><span><People/></span> Employees</Button>
                </Col>
                <Col>
                    <Button variant="primary" className="list-group-item list-group-item-action rounded"><span><Boxes/></span> Departments</Button>
                </Col>
                <Col>
                    <Button variant="primary" className="list-group-item list-group-item-action rounded"><span><BoxArrowLeft/></span> Logout</Button>
                </Col>
            </Row>
        </div>
        </Container>
    );
    }