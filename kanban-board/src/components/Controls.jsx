import React, { useContext,useState } from 'react';
import {TaskContext} from './Kanban';
import {Modal,Box,Typography,Button} from '@mui/material';
import TaskModal from './TaskModal';

const Controls = () =>{
const {stateObj,setStateObj} = useContext(TaskContext);
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
return(
    <>
    <Button onClick={handleOpen}>create</Button>
    <TaskModal openState={open} setOpen={setOpen}></TaskModal>
    </>

)
}

export default Controls;