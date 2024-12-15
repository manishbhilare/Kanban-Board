import React from "react";
import {Card,CardMedia,CardContent,Typography,Button} from '@mui/material';
import styled from "styled-components";

const StyledCardContent = styled.div`
display:flex;
&:last-child{
    float:right;
}
`;
const StyledPoints = styled.div`
border-radius:50%;
height:10px;
width:10px;

`;

const Task = ({task,colId,id}) =>{
    const handleDragStart = (event) =>{
        event.dataTransfer.setData("item",id);
        event.dataTransfer.setData("fromColumn",colId);
    }
return(
    <Card draggable onDragStart={(e)=>{handleDragStart(e)}}>
    <CardContent>
      <Typography gutterBottom component="div">
        {task.title}
      </Typography>
      <StyledCardContent>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {task.description}
      </Typography>
      <StyledPoints>
        {task.points}
      </StyledPoints>
      </StyledCardContent>
    </CardContent>
  </Card>

)
}

export default Task;