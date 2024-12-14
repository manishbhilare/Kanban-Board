import React,{useState,createContext, useEffect} from "react";
import Controls from "./Controls";
import Board from "./Board";

export const TaskContext = createContext();

const Kanban = () =>{
const [stateObj,setStateObj] = useState({todo:[],analysis:[],progress:[],blocked:[],verify:[],done:[]});
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