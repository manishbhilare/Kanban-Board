import React, { useContext, useState } from "react";
import { Dialog,Box,Button } from "@mui/material";
import styled from 'styled-components';
import { TaskContext } from "./Kanban";

const StyledModal = styled(Dialog)`
`;

const StyledBox = styled(Box)`
min-height:400px;
min-width:300px;
margin-top:25px;
margin-left:30px;
`;

const InputLabel = styled.label`
width: 100px;
font-size: 16px;
color: #333;
`;

const InputGroup = styled.div`
display: flex;
align-items: center;
margin-bottom: 15px;
`;


const TaskModal = ({openState,setOpen})=>{
    const {stateObj,setStateObj}  = useContext(TaskContext);
    const[task,setTask] = useState({title:'',description:'',phase:'To Do',points:''});

    const createTask = () =>{ 
        if(task.title !== '')
        {
            const taskList = stateObj.taskList;
            taskList.push(task);
            setStateObj({taskList});
            alert("Task created succesfully!");
            setOpen(false);
        }
        else
        {
            alert("Please enter task details");
        }
    }
    const handleCancel = () =>{
        setOpen(false);
    }

    const handleChange=(val,key)=>{
        const result = {...task,[key] : typeof val === "string" ? val : ''};
        setTask(result);
    }
    return(
    <>
    <StyledModal open={openState}>
        <StyledBox>
          <InputGroup>
            <InputLabel htmlFor="">Title</InputLabel>
            <input type="text" id="title" onChange={(e)=>{handleChange(e.target.value,'title')}} required/>
          </InputGroup>  
          <InputGroup>
            <InputLabel htmlFor="">Description</InputLabel>
            <input type="text" id="description" onChange={(e)=>{handleChange(e.target.value,'description')}}/>
          </InputGroup>  
          <InputGroup>
            <InputLabel htmlFor="">Story Points</InputLabel>
            <input type="text" id="points" onChange={(e)=>{handleChange(e.target.value,'points')}}/>
          </InputGroup> 
          <Button onClick={createTask}>create</Button>
          <Button onClick={handleCancel}>cancel</Button>
        </StyledBox>
    </StyledModal>
    </>)
}

export default TaskModal;