import React, { createContext, useState, useContext } from "react"
export const OverHeat = createContext()
 
export const useAuth = () => {
    return useContext(OverHeat);
};

 export const OverProvider = ({ children }) => {
    const [dashboard, setDashboard] = useState([
        { id: 1, item: "Listen to Mark's Podcast", completed: false },
        {
            id: 2,
            item: "Reading for English Language",
            completed: false,
        },
        { id:3, item:"Study for mock exams", completed:false},
        { id:4, item:"Cook healthy Foods", completed:false},
        { id:5, item:"Buy a meat for Matt's Birthday", completed:true},
        { id:6, item:"Organize my Drawers", completed:true},
        { id:7, item:"Study for mock exams", completed:true},
    ]);
    const [todo, setTodo] = useState("");
      const valuehandler = (e) => {
          e.preventDefault();
          setTodo(e.target.value);
      };
     
     

     const todoComplete = (todoID) => {
         const newTodo = dashboard.map((item) => {
             if (item.id === todoID) {
                 return { ...item, completed: true };
             } else {
                 return item;
             }
         });
         setDashboard(newTodo);
     };

     const addTodo = (e) => {
         e.preventDefault()
         if (todo === "") {
              alert("Todo cannot be empty")   
         } else {
               const newTodo = {
                   id: Math.random(),
                   item: todo,
                   completed: false,
               };
               setDashboard([newTodo, ...dashboard]);
               setTodo("");
         }
       


         
     }
     

    const value = {
        dashboard,
        setDashboard,
        todoComplete,
        addTodo,
        todo,
        setTodo,
        valuehandler,
    };
    return (
        <OverHeat.Provider value={value}>
            {children}
        </OverHeat.Provider>
    );
}


// export default OverProvider
