import React, { Component } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"


export default class TaskDescription extends Component {
  constructor(props) {
    super(props);
        this.state =
         {
      description: "",
      status: "",
      dueOn: "",
      priority: "",
      category: "",
    };
      axios.get('/get_task_detail')
        .then((response) => {
          const data = response.data;
          console.log(data[0]._id)
          this.setState({ 
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

  editDetails = () => {
    
  };

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
        </Form.Group>

        <Button onClick={this.editDetails} variant="primary" type="submit" >
          Edit
        </Button>
        <Form.Group>
          <Form.Label placeholder="task Title" className="font-weight-bold">
            Descriptions:
          </Form.Label>
          <Form.Control as="label" rows={3} className="border-none"> 
            {this.state.description}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="font-weight-bold">Status:</Form.Label>
          <Form.Control as="label" rows={3} className="border-none">
            {this.state.status}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="font-weight-bold">Due on:</Form.Label>
          <Form.Control as="label" rows={3} className="border-none">
            {this.state.dueOn}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="font-weight-bold">Priority:</Form.Label>
          <Form.Control as="label" rows={3} className="border-none">
            {this.state.priority}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="font-weight-bold">Category:</Form.Label>
          <Form.Control as="label" rows={3} className="border-none">
            {this.state.category}
          </Form.Control>
        </Form.Group>
      </Form>
    );
  }
}
