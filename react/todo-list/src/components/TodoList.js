import React, { useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { 
  Container, 
  Card, 
  CardContent, 
  Button, 
  Typography, 
  Divider, 
  ToggleButton, 
  ToggleButtonGroup, 
  Grid, 
  TextField 
} from "@mui/material";

import Todo from "./Todo";
import { TodosContext } from "../contexts/todosContext";

export default function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);
  const [titleInput, setTitleInput] = useState("");
  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storageTodos);
  }, [setTodos]);

  const filteredTasks = todos.filter((task) => {
    if (filterType === "completed") return task.isCompleted;
    if (filterType === "non-completed") return !task.isCompleted;
    return true; 
  });

  function handleFilterChange(e, newAlignment) {
    if (newAlignment !== null) {
      setFilterType(newAlignment);
    }
  }

  function handleAddClick() {
    if (!titleInput.trim()) return;

    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "",
      isCompleted: false,
    };

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTitleInput("");
  }

  return (
    <Container maxWidth="sm">
      <Card
        sx={{ minWidth: 275 }}
        style={{
          maxHeight: "80vh",
          overflow: "scroll",
        }}
      >
        <CardContent>
          <Typography variant="h2" style={{ fontWeight: "bold", textAlign: "center" }}>
            مهامي
          </Typography>
          
          <Divider />

          <ToggleButtonGroup
            style={{ direction: "ltr", marginTop: "30px", display: "flex", justifyContent: "center" }}
            value={filterType}
            exclusive
            onChange={handleFilterChange}
            color="primary"
          >
            <ToggleButton value="non-completed">غير المنجز</ToggleButton>
            <ToggleButton value="completed">المنجز</ToggleButton>
            <ToggleButton value="all">الكل</ToggleButton>
          </ToggleButtonGroup>

          <div style={{ marginTop: "20px" }}>
            {filteredTasks.map((task) => (
              <Todo key={task.id} todo={task} />
            ))}
          </div>

          <Grid container style={{ marginTop: "20px" }} spacing={2}>
            <Grid item xs={8} display="flex" justifyContent="space-around" alignItems="center">
              <TextField
                style={{ width: "100%" }}
                label="عنوان المهمة"
                variant="outlined"
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
              />
            </Grid>

            <Grid item xs={4} display="flex" justifyContent="space-around" alignItems="center">
              <Button
                style={{ width: "100%", height: "100%" }}
                variant="contained"
                onClick={handleAddClick}
                disabled={titleInput.trim().length === 0}
              >
                إضافة
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}