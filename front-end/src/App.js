import './App.css';
import Layout from "./Components/Layout"
import React, {useState} from "react"
import TasksData from './Tasks.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import TasksList from './Components/TasksList'
import {Row, Col, Button} from 'react-bootstrap'
import Modal from "react-bootstrap/Modal";
import Calendar from './Components/Calendar/Calendar'
import { FaTimes, FaEdit, FaPlus} from 'react-icons/fa';
import EditableTaskDescription from "./Components/EditableTaskDescription"


function App() {

  const [isEdit, setIsEdit] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [selectedTask, setSelectedTask] = useState(TasksData[0])

  const toggleEdit = () => setIsEdit(!isEdit)

  const hideModal = () => setIsAdd(false)
  const showModal = () => setIsAdd(true)

  return (
    <div>
      <Layout selectedTask={selectedTask}>
        <Modal show={isAdd} centered size="lg">
          <Modal.Body>
            <EditableTaskDescription 
              newTask={true} 
              hideModal={hideModal} 
              selectedTask={selectedTask}
              />
          </Modal.Body>
        </Modal>
        <Row style={{height: "94vh"}}>
          <Col lg={3} style={{height: "93vh"}}>
            <Row style={{height: "55%"}}>
              <TasksList setSelectedTask={setSelectedTask}/>
            </Row>
            <Row className="d-none d-lg-block">
              <Calendar />
            </Row>
          </Col>  
          <Col lg={9} className="p-2 d-none d-lg-block task-container" style={{boxShadow: "30px 0px 70px 10px grey inset"}}>
            <Row>
              <Col lg={1}>
                {(!isEdit)?
                  <div className="edit-button align-items-center"><FaEdit size="md" color="white" className="edit-button-icon" onClick={toggleEdit} /></div>
                  : <div className="edit-button align-items-center"><FaTimes size="md" color="white" className="edit-button-icon" onClick={toggleEdit} /></div>
                }
                <div className="edit-button align-items-center mt-2"><FaPlus size="md" color="white" className="edit-button-icon" onClick={showModal}/></div>
              </Col>
              <Col lg={11}>
              <EditableTaskDescription isEdit={isEdit} selectedTask={selectedTask} />
              {/* {(isEdit)? <TaskDescription className={`${(isEdit)? "d-none" : "d-block"}`} selectedTask={selectedTask} />
              :<EditableTaskDescription className={`${(isEdit)?"d-none":"d-block"}`} selectedTask={(selectedTask)} />
              } */}
              </Col>
            </Row>
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default App;
