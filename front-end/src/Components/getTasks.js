import axios from 'axios';

export function fetch(){ 
    axios.get('/get_task_detail')
.then((response) => {
return response.data
}).catch(() => {
  alert('Error retrieving data!!!');
});
}