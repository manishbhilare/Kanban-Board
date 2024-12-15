import React,{useState,createContext, useEffect} from "react";
import Controls from "./Controls";
import Board from "./Board";

export const TaskContext = createContext();

const Kanban = () =>{
const [stateObj,setStateObj] = useState({todo:[{title:'Jira1',description:'',phase:'To Do',points:'3'},{title:'Jira2',description:'',phase:'To Do',points:'3'}],analysis:[],progress:[],blocked:[],verify:[{title:'Jira101',description:'',phase:'Verify',points:''}],done:[{title:'Jira101',description:'',phase:'Verify',points:''}]});
return(
    <div>
        <TaskContext.Provider value={{stateObj,setStateObj}}>
        <Controls/>
        <Board/>
        </TaskContext.Provider>
    </div>
)
}

export default Kanban;