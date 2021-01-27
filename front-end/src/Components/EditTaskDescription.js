import React, { Component } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import DatePicker from "react-bootstrap-date-picker" 
// var DatePicker = require("react-bootstrap-date-picker");
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-dropdown-select";
impoir


var x = 0
export default class EditTaskDescription extends Component {
  constructor(props) {
    super(props);
        this.state =
         {
           id: "",
      description: "",
      status: "",
      dueOn: "",
      priority: "",
      category: "",
      dueon: 14/1/2020, 
      options: ['fadi', 'fafaf']
    };
      axios.get('/get_task_detail')
        .then((response) => {
          const data = response.data;
          this.setState({
            id : data[0]._id, 
            description: data[0].description,
            status: data[0].status,
            dueOn: data[0].dueOn,
            priority: data[0].priority,
            category: data[0].category,
                    });
          console.log('Data has been received!!');
        })
        .catch(() => {
          alert('Error retrieving data!!!');
        });
  }
  //need to store the new data in the DB
  saveData = () => {
    axios.post("/save_data", JSON.stringify(this.state)).then(function (response){
      console.log(response)
    }) 

  }
  handleChangeDescription = (event) => {
    this.setState({
      description: event.target.value
    })
  }

  handleChangeStatus = (event) => {
    this.setState({
      status: event.target.value
     
    })
  }

  handleChangeDueon = (event) => {
    this.setState({
      dueOn: event.target.value

    })
  }

  handleChangePriority = (event) => {
    this.setState({
      priority: event.target.value
    })
  }

  handleChangeCategory = (event) => {
    this.setState({
      category: event.target.value
    })
  }
    
  render() {


        return (
      
      <Form className="p-5">


        <Form.Group controlId="exampleForm.ControlInput1">
          <div className="text-center">
            <Form.Label
              className=""
              placeholder="task Title"
              className="font-weight-bold"
            >
              LABEL
            </Form.Label>
          </div>
     
          <Form.Label placeholder="task Title" className="font-weight-bold">
            Descriptions:
          </Form.Label>
          <Form.Control onChange={this.handleChangeDescription} value={this.state.description} />
        </Form.Group>

        <Form.Group controlId="formGridState">
          <Form.Label className="font-weight-bold">Status</Form.Label>
          <Form.Control  onChange={this.handleChangeStatus} as="select" value={this.state.status}>
         <option>New</option>
         <option>In Progress</option>
         </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="font-weight-bold">Due on:</Form.Label>
          </Form.Group>
          <Form.Group >
              <DatePicker selected={this.state.dueon} onChange={date => this.setState({dueon:date})} />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="font-weight-bold">Priority:</Form.Label>
          <Form.Control rows={3} onChange={this.handleChangePriority} value={this.state.priority} />            
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="font-weight-bold">Category:</Form.Label>

          <Form.Control  onChange={this.handleChangeCategory} as="select" value={this.state.category}>
          {/* <Select options={this.options} onChange={date => this.setState({options:date})} /> */}

         <option>Do immediately</option>
         <option>Delegate</option>
         <option>Drop</option>
         <option>Defer</option>
         </Form.Control>

        </Form.Group>
        <Button onClick={this.saveData} variant="primary" type="submit" >
          Save 
        </Button>
      </Form>

          
      
    );
  }
}
