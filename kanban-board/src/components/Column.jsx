import React from "react";
import List from '@mui/material/List';
import { ListItem,Typography } from "@mui/material";
import styled from "styled-components";

const StyledHeader = styled(Typography)`
font-size:15px;
font-weight:600;
color:#5e6c84;
`;

const StyledList = styled(List)`
width:100vh;
height:75vh;
border: 5px solid green;
&.MuiList-root{
    margin:3px;
}
`;

const Column = ({title,list}) =>{
return(
    <StyledList>
        <StyledHeader>{title}</StyledHeader>
        {list && list.map((task,i)=>(
            <ListItem id={i} draggable={true}>{task.title}</ListItem>
        ))}
    </StyledList>
)
}

export default Column;