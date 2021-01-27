import './App.css';
import Layout from "./Components/Layout"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import TasksList from './Components/TasksList'
import {Row, Col} from 'react-bootstrap'
import Calendar from './Components/Calendar/Calendar'

function App() {
  return (
    <div>
      <Layout>
        <Row style={{height: "94vh"}}>
          <Col lg={3} style={{height: "93vh"}}>
            <Row style={{height: "58%"}}>
              <TasksList/>
            </Row>
            <Row className="d-none d-lg-block">
              <Calendar />
            </Row>
          </Col>  
          <Col lg={9} className="p-2 d-none d-lg-block" style={{boxShadow: "30px 0px 70px 10px grey inset"}}>
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default App;
