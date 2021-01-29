import React, {useEffect, useState} from "react";
import {DropdownButton, Dropdown, Button, Form , Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Rating from "react-rating";
import "../App.css"


const EditableTaskDescription = ({isEdit, selectedTask, newTask, hideModal}) => {

    var intialPriority = 0
    if(newTask){
        intialPriority = 0
    } else {
        intialPriority = selectedTask.priority
    }
    const [priority, setPriority] = useState(intialPriority)

    const onChangePriority = (value) => {
        setPriority(value);
    }
    
    return (
        <Form className="p-5">
        
            <Form.Group controlId="exampleForm.ControlInput1">
                {(newTask)?<input placeholder="Enter task title" className="title-input"/>:
                    ((!isEdit)?<div className="text-center" style={{fontSize: "xxx-large"}}>{selectedTask.title}</div>
                :<input defaultValue={selectedTask.title} className="title-input"/>)}
            </Form.Group>


            <Form.Group className="">
                <Form.Label placeholder="task Title" className="font-weight-bold">
                    Descriptions:
                </Form.Label>
                {(newTask)?<Form.Control as="textarea" placeholder="Enter description if needed" rows={3} />
                    :<Form.Control as="textarea" defaultValue={selectedTask.name} rows={3} disabled={!isEdit} />
                }
            </Form.Group>

                
            <Row className="my-5  mx-0 p-0">
                <Col className="pl-0">
                    <Form.Label className="font-weight-bold">Status:</Form.Label>
                    {(newTask)?
                    <DropdownButton id="dropdown-basic-button" size="sm" variant="secondary" title="New">
                        <Dropdown.Item as="button">New</Dropdown.Item>
                        <Dropdown.Item as="button">In Progress</Dropdown.Item>
                    </DropdownButton>
                        :((!isEdit)?
                    <Form.Label className="font-weight-bold d-block ml-3">New</Form.Label>
                    :<DropdownButton id="dropdown-basic-button" size="sm" variant="secondary" title="New">
                        <Dropdown.Item as="button">New</Dropdown.Item>
                        <Dropdown.Item as="button">In Progress</Dropdown.Item>
                    </DropdownButton>)
                    }
                </Col>
                <Col className="py-0 mt-2">
                    <Form.Label className="font-weight-bold d-block">Due on:</Form.Label>
                    {(newTask)?<DatePicker dateFormat="YYYY-MM-DD" />
                     :((!isEdit)?
                    <Form.Label className="font-weight-bold d-block ml-3">{selectedTask.date}</Form.Label>
                    :<Form.Label className="font-weight-bold">{selectedTask.date}</Form.Label>)
                    }
                    {/* <DatePicker selected={this.props.selectedTask.date} dateFormat="YYYY-MM-DD" onChange={date => this.setState({dueon:date})} /> */}
                </Col>
            </Row>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="font-weight-bold d-block">Priority:</Form.Label>
                {(newTask)?
                    <Rating fractions="2" initialRating={priority} onClick={onChangePriority} />
                    :<Rating fractions="2" initialRating={priority} onClick={onChangePriority} readonly={!isEdit} />
                }
                
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="font-weight-bold">Category:</Form.Label>
                {/* <Select options={this.options} onChange={date => this.setState({options:date})} /> */}

                {(newTask)?
                
                <DropdownButton id="dropdown" size="sm" variant="secondary" title="Work">
                    <Dropdown.Item as="button" value="Date">Home</Dropdown.Item>
                    <Dropdown.Item as="button" value="Priority">Work</Dropdown.Item>
                    <Dropdown.Item as="button" value="Category">Home Work</Dropdown.Item>
                    <Dropdown.Item as="button" value="Category">...</Dropdown.Item>
                 </DropdownButton>
                    :((!isEdit)?
                 <Row className="mx-0 w-25" style={{backgroundColor: selectedTask.category, color: "white"}}> {selectedTask.category}</Row>
                 :<DropdownButton id="dropdown" size="sm" variant="secondary" title="Work">
                    <Dropdown.Item as="button" value="Date">Home</Dropdown.Item>
                    <Dropdown.Item as="button" value="Priority">Work</Dropdown.Item>
                    <Dropdown.Item as="button" value="Category">Home Work</Dropdown.Item>
                    <Dropdown.Item as="button" value="Category">...</Dropdown.Item>
                 </DropdownButton>)
                }
            </Form.Group>


            <Row className="justify-content-center w-100">
            {(isEdit || newTask)?<Button variant="primary" type="submit" className="w-25">Save</Button>:null}
            {(newTask)?<Button variant="secondary" type="submit" className="w-25 ml-3" onClick={hideModal}>Close</Button>:null}
            </Row>

        </Form>
    );
}

export default EditableTaskDescription
