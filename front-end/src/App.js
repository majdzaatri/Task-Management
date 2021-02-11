import './App.css';
import Layout from "./Components/Layout"
import React, {useState, useEffect} from "react"
import TasksData2 from './Tasks.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import TasksList from './Components/TasksList'
import {Row, Col} from 'react-bootstrap'
import Modal from "react-bootstrap/Modal";
import Calendar from './Components/Calendar/Calendar'
import { FaTimes, FaEdit, FaPlus} from 'react-icons/fa';
import EditableTaskDescription from "./Components/EditableTaskDescription"
import axios from 'axios'
import { VscArchive } from 'react-icons/vsc';

function App() {

  const [TasksData, setTasksData] = useState([])
  const [TasksCount, setTasksCount] = useState(true)

  const getTasks = () => {
  axios.get('/get_task_detail')
  .then((response) => {
    setTasksData(response.data)
  }).catch(() => {
    alert('Error retrieving data2!!!');
  });
  }

  useEffect(() =>{
    getTasks();
  }, [TasksCount])
  

  const [deleteTask, setIsDeleteTask] = useState(false);

  const [isEdit, setIsEdit] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [selectedTask, setSelectedTask] = useState(TasksData2[0])

  const toggleEdit = () => setIsEdit(!isEdit)
  const toggleDelete = () => {setIsDeleteTask(true)
  }

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
              setIsEdit= {setIsEdit}
              setTasksCount = {setTasksCount}
              tasksCount = {TasksCount} 
              selectedTask={selectedTask}
              setSelectedTask = {setSelectedTask}
              setIsDeleteTask = {setIsDeleteTask}

              />
          </Modal.Body>
        </Modal>
        <Row style={{height: "94vh"}}>
          <Col lg={3} style={{height: "93vh"}}>
            <Row style={{height: "55%"}}>
              <TasksList setSelectedTask={setSelectedTask}
                TasksData = {TasksData}
              />
            </Row>
            <Row className="d-none d-lg-block">
              <Calendar />
            </Row>
          </Col>  
          <Col lg={9} className="p-2 d-none d-lg-block task-container" style={{boxShadow: "30px 0px 70px 10px grey inset"}}>
            <Row>
              <Col lg={1}>
    
                {(!isEdit)?
                  <div className="edit-button align-items-center "> <FaEdit size="md" color="white" className="edit-button-icon" onClick={toggleEdit} /> </div>
                  : <div className="edit-button align-items-center mt-2"><FaTimes size="md" color="white" className="edit-button-icon" onClick={toggleEdit} /></div>
                }
                <div className="edit-button align-items-center  mt-2"><FaPlus size="md" color="white" className="edit-button-icon" onClick={showModal}/></div>
                <div className="delete-button align-items-center  mt-2"> <VscArchive size="md" color="white" className="delete-button-icon" onClick={toggleDelete} /> </div>
              </Col>
              <Col lg={11}>
              : <EditableTaskDescription isEdit={isEdit}  setIsDeleteTask={setIsDeleteTask} deleteTask={deleteTask} tasksCount = {TasksCount}  setTasksCount = {setTasksCount} setIsEdit= {setIsEdit} setSelectedTask = {setSelectedTask}  selectedTask={selectedTask} />
              
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
