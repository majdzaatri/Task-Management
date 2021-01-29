// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "react-datepicker/dist/react-datepicker.css";
// import TaskDescription from "./TaskDescription"
// import "../App.css"
// import EditableTaskDescription from "./EditableTaskDescription";


// const EditTaskDescription = ({isEdit, selectedTask}) => {
//   // constructor(props) {
//   //   super(props);
//   //     this.state =
//   //       {
//   //         id: "",
//   //         description: "",
//   //         status: "",
//   //         dueOn: "",
//   //         priority: "",
//   //         category: "",
//   //         dueon: 14/1/2020, 
//   //         options: ['fadi', 'fafaf']
//   //       };

//       // axios.get('/get_task_detail')
//       //   .then((response) => {
//       //     const data = response.data;
//       //     this.setState({
//       //       id : data[0]._id, 
//       //       description: data[0].description,
//       //       status: data[0].status,
//       //       dueOn: data[0].dueOn,
//       //       priority: data[0].priority,
//       //       category: data[0].category,
//       //               });
//       //     console.log('Data has been received!!');
//       //   })
//       //   .catch(() => {
//       //     alert('Error retrieving data!!!');
//       //   });

  
//   //need to store the new data in the DB
//   // saveData = () => {
//   //   axios.post("/save_data", JSON.stringify(this.state)).then(function (response){
//   //     console.log(response)
//   //   }) 
//   // 
//   // }
//   handleChangeDescription = (event) => {
//     this.setState({
//       description: event.target.value
//     })
//   }

//   handleChangeStatus = (event) => {
//     this.setState({
//       status: event.target.value
//     })
//   }

//   handleChangeDueon = (event) => {
//     this.setState({
//       dueOn: event.target.value

//     })
//   }

//   handleChangePriority = (event) => {
//     this.setState({
//       priority: event.target.value
//     })
//   }

//   handleChangeCategory = (event) => {
//     this.setState({
//       category: event.target.value
//     })
//   }
  
//   if(this.props.isEdit){

//   return (
//     <EditableTaskDescription />
//   );
//   } else {
//     return (
//       <TaskDescription selectedTask={this.props.selectedTask} />
//     );
//   }
// }

//   export default EditTaskDescription
