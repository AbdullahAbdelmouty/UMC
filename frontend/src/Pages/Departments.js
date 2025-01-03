import React from "react";
import {Row,Col,Image, Container, Button} from 'react-bootstrap';
import { Trash3,EyeFill,BoxArrowLeft,PencilSquare } from 'react-bootstrap-icons';
import logo from '../logo.svg';
export default function Departments() {
    return (
    <Container className="p-4">
        <Row className="g-2 flex-column bg-white rounded p-3">
            <Col xs={12} className="p-2 rounded" style={{backgroundColor: "#e3edf9"}}>
                <Row className="align-items-center">
                <Col xs={3} md={3}>
                    <p className="mb-0">John Doe</p>
                </Col>
                <Col xs={3} md={3}>
                    <p className="mb-0">John Doe</p>
                </Col>
                <Col xs={6} md={6} className="d-flex justify-content-end align-items-center gap-2" >
                    <Button variant="primary" style={{backgroundColor:"#121c3e"}} className="rounded border-0"><EyeFill/></Button>
                    <Button variant="primary" style={{backgroundColor:"#121c3e"}} className="rounded border-0"><PencilSquare/></Button>
                    <Button variant="primary" style={{backgroundColor:"#121c3e"}} className="rounded border-0"><Trash3/></Button>
                </Col>
                </Row>
            </Col>
            <Col xs={12} className="p-2 rounded" style={{backgroundColor: "#e3edf9"}}>
                <Row className="align-items-center">
                <Col xs={3} md={3}>
                    <p className="mb-0">John Doe</p>
                </Col>
                <Col xs={3} md={3}>
                    <p className="mb-0">John Doe</p>
                </Col>
                <Col xs={6} md={6} className="d-flex justify-content-end align-items-center gap-2" >
                    <Button variant="primary"  style={{backgroundColor:"#121c3e"}} className="rounded border-0"><BoxArrowLeft/></Button>
                    <Button variant="primary"  style={{backgroundColor:"#121c3e"}} className="rounded border-0"><BoxArrowLeft/></Button>
                    <Button variant="primary"  style={{backgroundColor:"#121c3e"}} className="rounded border-0"><BoxArrowLeft/></Button>
                </Col>
                </Row>
            </Col>
            
        </Row>
        
    </Container>
    );
    }