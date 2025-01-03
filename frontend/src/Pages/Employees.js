import React from "react";
import {Row,Col,Image, Container, Button, Card} from 'react-bootstrap';
import { Trash3,EyeFill,BoxArrowLeft,PencilSquare } from 'react-bootstrap-icons';
import logo from '../logo.svg';
export default function Sidebar() {
    return (
        <Container className="p-4">
            <Row className="g-2 flex-column bg-white rounded p-3">
                <Col className="p-2 rounded" style={{backgroundColor: "#e3edf9"}}>
                 <Row className="align-items-center">
                    <Col xs={3} md={2} >
                        <Image src={logo} width={90} roundedCircle />
                    </Col>
                    <Col xs={3} md={2}>
                        <p className="mb-0">John Doe</p>
                        <p className="mb-0 d-block d-lg-none">Position</p>
                    </Col>
                    <Col xs={3} md={2} className="d-none d-lg-block">
                        <p className="mb-0">Position</p>
                    </Col>
                    <Col xs={3} md={2} className="d-none d-md-block">
                        <p className="mb-0">Sales</p>
                    </Col>
                    <Col xs={3} md={2} className="d-none d-md-block">
                        <p className="mb-0">1/1/2010</p>
                    </Col>
                    <Col xs={6} md={2} className="d-flex justify-content-center align-items-center gap-2" >
                        <Button variant="primary" style={{backgroundColor:"#121c3e"}} className="rounded border-0"><EyeFill/></Button>
                        <Button variant="primary" style={{backgroundColor:"#121c3e"}} className="rounded border-0"><PencilSquare/></Button>
                        <Button variant="primary" style={{backgroundColor:"#121c3e"}} className="rounded border-0"><Trash3/></Button>
                    </Col>
                 </Row>
                </Col>
                <Col className="p-2 rounded" style={{backgroundColor: "#e3edf9"}}>
                 <Row className="align-items-center">
                    <Col xs={3} md={2} >
                        <Image src={logo} width={90} roundedCircle />
                    </Col>
                    <Col xs={3} md={2}>
                        <p className="mb-0">John Doe</p>
                        <p className="mb-0 d-block d-lg-none">Position</p>
                    </Col>
                    <Col xs={3} md={2} className="d-none d-lg-block">
                        <p className="mb-0">Position</p>
                    </Col>
                    <Col xs={3} md={2} className="d-none d-md-block">
                        <p className="mb-0">Sales</p>
                    </Col>
                    <Col xs={3} md={2} className="d-none d-md-block">
                        <p className="mb-0">1/1/2010</p>
                    </Col>
                    <Col xs={6} md={2} className="d-flex justify-content-center align-items-center gap-2" >
                        <Button variant="primary" style={{backgroundColor:"#121c3e"}} className="rounded border-0"><BoxArrowLeft/></Button>
                        <Button variant="primary" style={{backgroundColor:"#121c3e"}} className="rounded border-0"><BoxArrowLeft/></Button>
                        <Button variant="primary" style={{backgroundColor:"#121c3e"}} className="rounded border-0"><BoxArrowLeft/></Button>
                    </Col>
                 </Row>
                </Col>
            </Row>
            
        </Container>
    );
    }