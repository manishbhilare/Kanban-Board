import React,{useContext, useState} from "react";
import { TaskContext } from "./Kanban";
import Column from "./Column";
import styled from "styled-components";

const StyledContainer = styled.div`
display:flex;
align-items:center;
`;

const Board = () =>{
    const {stateObj} = useContext(TaskContext);
    const [taskList,setTaskList] = useState(stateObj.taskList);
return(
   <>
   <h1>Board</h1>
   <StyledContainer>
   <Column id="todo" title={"To Do"}/>
   <Column id="analysis" title={"In Analysis"}/>
   <Column id="progress" title={"In Progress"}/>
   <Column id="blocked" title={"Blocked"}/>
   <Column id="verify" title={"Verify"}/>
   <Column id="Done" title={"Done"}/>
   </StyledContainer>
 
   </> 
)
}

export default Board;