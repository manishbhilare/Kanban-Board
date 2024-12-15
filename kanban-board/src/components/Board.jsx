import React,{useContext, useEffect, useRef, useState} from "react";
import { TaskContext } from "./Kanban";
import Column from "./Column";
import styled from "styled-components";

const StyledContainer = styled.div`
display:flex;
align-items:center;
`;

const Board = () =>{
    const {stateObj} = useContext(TaskContext);
    const [todoList,setTodoList] = useState(stateObj.todo);
    const [analysisList,setAnalysisList] = useState(stateObj.analysis);
    const [progressList,setProgressList] = useState(stateObj.progress);
    const [blockedList,setBlockedList] = useState(stateObj.blocked);
    const [verifyList,setVerifyList] = useState(stateObj.verify);
    const [doneList,setDoneList] = useState(stateObj.done);

    useEffect(()=>{
        setTodoList(stateObj.todo);
        setAnalysisList(stateObj.analysis);
        setBlockedList(stateObj.blocked);
        setVerifyList(stateObj.verify);
        setProgressList(stateObj.progress);
        setDoneList(stateObj.done);
    },[stateObj]);


return(
   <>
   <h1>Board</h1>
   <StyledContainer>
   <Column colId="todo" title={"To Do"} list={todoList}/>
   <Column colId="analysis" title={"In Analysis"} list={analysisList}/>
   <Column colId="progress" title={"In Progress"} list={progressList}/>
   <Column colId="blocked" title={"Blocked"} list={blockedList}/>
   <Column colId="verify" title={"Verify"} list={verifyList}/>
   <Column colId="done" title={"Done"} list={doneList}/>
   </StyledContainer>
 
   </> 
)
}

export default Board;