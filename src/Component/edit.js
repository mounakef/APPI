import {Modal, Button} from 'react-bootstrap'
import React,{useState} from 'react'   
import { useDispatch} from  'react-redux'
import {editTask} from '../Redux/action'

function EditTask({task}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
const[ edit, setEdit ] = useState (task.description);
 const dispatch =useDispatch() ;
 const handelChange =(e)=> {
setEdit (e.target.value);
 }
 const handelEdit =()=>{
    dispatch (editTask(task.id,edit));
    setEdit({id:"",description:"",isDone:""});
    handleClose() ;
 }
    return (
      <>
      
        <Button variant="primary" onClick={handleShow}>
            Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Edit your task</Modal.Title>
          </Modal.Header>
          <Modal.Body> <input defaultValue ={edit} onChange={handelChange}/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handelEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
export default EditTask ;