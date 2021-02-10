import React, {useState} from "react";
import {DropdownButton, Dropdown, Button, Form , Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Rating from "react-rating";
// import "../App.css"
import axios from 'axios'
import useFormFields from '@usereact/use-form-fields'
var dateFormat = require("dateformat");


const EditableTaskDescription = ({isEdit, selectedTask, setIsEdit,newTask,setTasksCount,tasksCount,setSelectedTask ,hideModal}) => {
    

    var intialPriority = 0
    if(newTask){
        intialPriority = 0
    } else {
        intialPriority ='5'
    }
    const [priority, setPriority] = useState(intialPriority)

    const onChangePriority = (value) => {
        setPriority(value);
        values.priority = value
    }


    const initialValues = {
        "id": Math.floor(Math.random() * 99999999),
        "name": "",
        "title": "",
        "priority": 0,
        "category": "red",
        "categoryDetails": "Home",
        "date": new Date(),
        "status": "New"
      }

    
      var inistialSelectedTask = {
        "id": selectedTask.id,
        "name": selectedTask.name,
        "title": selectedTask.title,
        "priority": selectedTask.priority,
        "category": selectedTask.category,
        "date": selectedTask.date,
        "status": selectedTask.status
      }     

      const handleSubmit = e => {
        e.preventDefault();
        console.log('values: ', values)

        axios.post('/add_task', {
            id: values.id,
            name: values.name,
            title: values.title,
            priority: values.priority,
            category: values.category,
            categoryDetails: values.categoryDetails,
            date: values.date,
            status: values.status
        }).then((response) => {
        console.log(response)
        }).catch(() => {
          alert('Error retrieving data!!!');
        });  
        console.log(values)
        setTasksCount(!tasksCount) 
      }



      const handleEdit = e => {
        e.preventDefault();
        console.log('values: ', editValues)
        axios.post('/update_task', {
            id: selectedTask.id,
            name: selectedTask.name,
            title: selectedTask.title,
            priority: selectedTask.taskPriority,
            category: selectedTask.category,
            categoryDetails: selectedTask.categoryDetails,
            date: selectedTask.date,
            status: selectedTask.status
        }).then((response) => {
        console.log(response)
        }).catch(() => {
          alert('Error retrieving data!!!');
        });          
        setIsEdit(!isEdit)
        setTasksCount(!tasksCount) 

  }

      const { values, fields } = useFormFields(initialValues)
      const [choosenStatus, setChoosenStatus] = useState("New")
      const [choosenCategory, setchoosenCategory] = useState("red")
      const [choosenCategoryDetails, setchoosenCategoryDetails] = useState("Home")

      const [editValues, seteditValues] = useState(inistialSelectedTask)


      const [startDate, setStartDate] = useState(new Date());

      const onDateChange = (date) => {
        setStartDate(date)
        values.date = date
    }
    console.log(selectedTask)

    return (
        
        <Form onSubmit={handleSubmit} className="p-5">
        
            <Form.Group controlId="exampleForm.ControlInput1">
                {(newTask)?<input placeholder="Enter task title" {...fields.title} className="title-input"  / >:
                    ((!isEdit)?<div className="text-center" style={{fontSize: "xxx-large"}}>{selectedTask.title}</div>
                :<input value={selectedTask.title} onChange={(e)=> setSelectedTask({...selectedTask ,title:e.target.value})}
                 className="title-input"/>)}
            </Form.Group>


            <Form.Group className="">
                <Form.Label placeholder="task Title" className="font-weight-bold">
                    Descriptions:
                </Form.Label>
                {(newTask)?<Form.Control as="textarea" {...fields.name} placeholder="Enter description if needed" rows={3} />
                    :<Form.Control as="textarea" value={selectedTask.name} onChange={(e)=> setSelectedTask({...selectedTask ,name:e.target.value})} rows={3} disabled={!isEdit} />
                }
            </Form.Group>

                
            <Row className="my-5  mx-0 p-0">
                <Col className="pl-0">
                    <Form.Label className="font-weight-bold">Status:</Form.Label>
                    {(newTask)?
                    <DropdownButton id="dropdown-basic-button"  size="sm" variant="secondary" title={choosenStatus}>
                        <Dropdown.Item as="button"  value = 'New' onClick={(e) =>  {setChoosenStatus("new") 
                        e.preventDefault()
                        values.status = 'new'}}  >New</Dropdown.Item>
                        <Dropdown.Item as="button"  value = 'in progress'  onClick={(e) =>  {
                        e.preventDefault()
                        setChoosenStatus("In Progress") 
                        values.status = 'In Progress'}} >In Progress</Dropdown.Item>
                    </DropdownButton>
                        :((!isEdit)?
                    <Form.Label className="font-weight-bold d-block ml-3">{selectedTask.status}</Form.Label>




                    :<DropdownButton id="dropdown-basic-button" size="sm" variant="secondary" title={selectedTask.status}>
                        <Dropdown.Item as="button" value = "New"  onClick={(e) =>  {setSelectedTask({...selectedTask, status:e.target.value})
                        e.preventDefault()
                        }}>  New   </Dropdown.Item>
                        <Dropdown.Item as="button" value = "In Progress"  onClick={(e) =>  {setSelectedTask({...selectedTask, status:e.target.value})
                        e.preventDefault()
                        }}>In Progress</Dropdown.Item>
                    </DropdownButton>)
                    }
                </Col>
                <Col className="py-0 mt-2">
                    <Form.Label className="font-weight-bold d-block">Due on:</Form.Label>
                    {(newTask)?<DatePicker  selected={startDate} onChange={date=> onDateChange(date)}  />
                     :((!isEdit)?
                    <Form.Label className="font-weight-bold d-block ml-3">{dateFormat(new Date(selectedTask.date), "dd/mm/yyyy")} </Form.Label>
                    :<DatePicker  selected={new Date(selectedTask.date)} onChange={date=> setSelectedTask({...selectedTask, date : date})}  />)
                    }
                    {/* <DatePicker selected={this.props.selectedTask.date} dateFormat="YYYY-MM-DD" onChange={date => this.setState({dueon:date})} /> */}
                </Col>
            </Row>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="font-weight-bold d-block">Priority:</Form.Label>
                {(newTask)?
                    <Rating fractions="2" initialRating={priority} {...fields.priority} onClick={onChangePriority} />
                    :<Rating fractions="2" initialRating={selectedTask.taskPriority}
                     onClick={(e) => {
                        setSelectedTask({...selectedTask, taskPriority:e})
                    }
                    } readonly={!isEdit} />
                }
                
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="font-weight-bold">Category:</Form.Label>
                {/* <Select options={this.options} onChange={date => this.setState({options:date})} /> */}

                {(newTask)?
                
                <DropdownButton id="dropdown" size="sm" variant="secondary" title={choosenCategoryDetails}>
                    <Dropdown.Item as="button" value="Home"  onClick={(e) =>  {setchoosenCategory("red") 
                        e.preventDefault()
                        values.categoryDetails = e.target.value
                        values.category = "red"}}> Home</Dropdown.Item>
                    <Dropdown.Item as="button" value="Work" onClick={(e) =>  {setchoosenCategory("blue") 
                        e.preventDefault()
                        values.categoryDetails = e.target.value
                        values.category = "blue"}}>Work</Dropdown.Item>
                    <Dropdown.Item as="button" value="Homework" onClick={(e) =>  {setchoosenCategory("green") 
                        e.preventDefault()
                        values.categoryDetails = e.target.value
                        values.category = "green"}}>HomeWork</Dropdown.Item>
                    <Dropdown.Item as="button" value="Category">...</Dropdown.Item>
                 </DropdownButton>
                    :((!isEdit)?
                 <Row className="mx-0 w-25" style={{backgroundColor: selectedTask.category, color: "white"}}> {selectedTask.categoryDetails}</Row>


                 :<DropdownButton id="dropdown" size="sm" variant="secondary" title={selectedTask.categoryDetails}>
                    <Dropdown.Item as="button" value="Home" onClick={(e) =>  {setSelectedTask({...selectedTask, category:"red", categoryDetails:e.target.value })
                        e.preventDefault()
                        }} >Home</Dropdown.Item>
                    <Dropdown.Item as="button" value="Work"  onClick={(e) =>  {setSelectedTask({...selectedTask, category:"blue",  categoryDetails:e.target.value})
                        e.preventDefault()
                        }} >Work</Dropdown.Item>
                    <Dropdown.Item as="button" value="Homework"  onClick={(e) =>  {setSelectedTask({...selectedTask, category:"green",  categoryDetails:e.target.value})
                        e.preventDefault()
                        }} >HomeWork</Dropdown.Item>
                    <Dropdown.Item as="button" value="..."  onClick={(e) =>  {setSelectedTask({...selectedTask, category:e.target.value,  categoryDetails:e.target.value})
                        e.preventDefault()
                        }} >...</Dropdown.Item>
                 </DropdownButton>)
                }
            </Form.Group>


            <Row className="justify-content-center w-100">
            {(newTask)?<Button variant="primary" type="submit" className="w-25" onClick={(e) =>{handleSubmit(e)
                hideModal()
            }}>Save</Button>:null}
            {(isEdit)?<Button variant="primary" type="submit" className="w-25"  onClick={(e) => {handleEdit(e)
                e.preventDefault()
            }}> Save</Button>:null}

            {(newTask)?<Button variant="secondary" type="submit" className="w-25 ml-3" onClick={(e) => {hideModal()
                e.preventDefault()
            }}>Close</Button>:null}
            </Row>

        </Form>
    );
}

export default EditableTaskDescription
