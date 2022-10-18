import { useTodoContext } from "./Context";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

function AddTodo() {
  const context = useTodoContext();
  const [newTodo, setNewTodo] = useState();

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    // <div id='addTodoDiv'>
    //     <input type='text' className="addTodoText" onChange={handleChange}></input>
    //     <button className="pageBtn" onClick={() =>context.add(newTodo)}>Submit Todo</button>
    // </div>

    <Box
      component="form"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="Todo" variant="filled" onChange={handleChange} sx={{backgroundColor: "#f0f6ff"}} />
      <Button variant="contained" className="pageBtn" onClick={() =>context.add(newTodo)} sx={{
        marginLeft: "0.5rem",
        marginRight: "0.5rem",
        padding: "0.75rem 1rem",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "rgb(1, 152, 228)",
        color: "white"
      }}>Submit Todo</Button>
    </Box>
  );
}

export default AddTodo;
