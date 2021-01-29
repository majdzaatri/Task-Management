// import React from "react";
// import {Form , Row, Col} from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "react-datepicker/dist/react-datepicker.css";
// import Rating from "react-rating";
// import "../App.css"


// const TaskDescription = ({selectedTask}) => {
//   console.log(selectedTask)
//   return (
//       <Form className="p-5">
//       <Form.Group controlId="exampleForm.ControlInput1">
//         <div className="text-center">
//             {selectedTask.title}
//         </div>
//       </Form.Group>

//       <Form.Group>
//         <Form.Label placeholder="task Title" className="font-weight-bold">
//           Descriptions:
//         </Form.Label>
//         <Form.Control as="textarea" defaultValue="None" rows={3}>
//           {selectedTask.name}
//         </Form.Control>
//       </Form.Group>

//       <Row className="my-5  mx-0 p-0">
//         <Col className="pl-0">
//         <Form.Label className="font-weight-bold d-block">Status:</Form.Label>
//         <Form.Label className="font-weight-bold d-block ml-3">
//           {/* {selectedTask.date} */}
//         </Form.Label>
//         </Col>
//         <Col className="pr-0">
//         <Form.Label className="font-weight-bold">Due on:</Form.Label>
//         <Form.Label className="font-weight-bold d-block ml-3">
//           {/* {selectedTask.date} */}
//         </Form.Label>
//         </Col>
//       </Row>

//       <Form.Group controlId="exampleForm.ControlTextarea1">
//         <Form.Label className="font-weight-bold d-block">Priority:</Form.Label>
//         {/* <Rating fractions="2" readonly="true" initialRating={selectedTask.priority} /> */}
//       </Form.Group>

//       <Form.Group controlId="exampleForm.ControlTextarea1">
//         <Form.Label className="font-weight-bold">Category:</Form.Label>
//         {/* <Row className="mx-0 w-25" style={{backgroundColor: selectedTask.category, color: "white"}}> */}
//           {/* {selectedTask.category} */}
//         {/* </Row> */}
//       </Form.Group>
//     </Form>
//   );

// }


// export default TaskDescription