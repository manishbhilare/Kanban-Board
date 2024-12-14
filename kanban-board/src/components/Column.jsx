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

const Column = ({title}) =>{
return(
    <StyledList>
        <StyledHeader>{title}</StyledHeader>
        <ListItem>1</ListItem>
        <ListItem>2</ListItem>
        <ListItem>3</ListItem>
        <ListItem>1</ListItem>
        <ListItem>2</ListItem>
        <ListItem>3</ListItem>
    </StyledList>
)
}

export default Column;