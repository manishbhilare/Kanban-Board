import React,{useContext} from "react";
import List from '@mui/material/List';
import { ListItem,Typography } from "@mui/material";
import styled from "styled-components";
import { TaskContext } from "./Kanban";

const StyledHeader = styled(Typography)`
font-size:15px;
font-weight:600;
color:#5e6c84;
background-color:skyblue;
margin-bottom:5px;
`;

const StyledList = styled.div`
width:100vh;
height:75vh;
border: 5px solid #41416e;
margin:3px;
&.MuiList-root{
    margin:3px;
}
`;

const Column = ({title,list,colId}) =>{
    const {stateObj, setStateObj} = useContext(TaskContext);
    const handleDragStart = (event,index) =>{
        event.dataTransfer.setData("item",index);
        event.dataTransfer.setData("fromColumn",colId);
    }
    const drop = (e,id) => {
        const from = e.dataTransfer.getData("fromColumn");
        const to = id;
        const item = e.dataTransfer.getData("item");
        const newFromList = stateObj[from].filter((older)=>older!=stateObj[from][item]);
        const newToList = stateObj[to];
        newToList.push(stateObj[from][item]);
        setStateObj({...stateObj,[from]:newFromList,[to]:newToList});

      }
return(
    <StyledList onDrop={(e)=>{drop(e,colId)}} onDragOver={(e)=>e.preventDefault()}>
        <StyledHeader>{title}</StyledHeader>
        {list && list.map((task,i)=>(
            <div key={i} id={i} draggable onDragStart={(e)=>{handleDragStart(e,i)}}>{task.title}</div>
        ))}
    </StyledList>
)   
}

export default Column;