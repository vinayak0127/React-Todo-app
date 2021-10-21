import { React, useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { VStack, Heading } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  // const initialTodos = [
  //   {
  //     id: 1,
  //     body: '',
  //   },
  //   {
  //     id: 2,
  //     body: '',
  //   },
  // ];

  const [todos, SetTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  const deleteTodo = id => {
    const newTodos = todos.filter(todo => {
      return todo.id !== id;
    });
    SetTodos(newTodos);
  };

  const addTodos = todo => {
    SetTodos([...todos, todo]);
  };
  return (
    <VStack p={4}>
      <ColorModeSwitcher isRound="true" size="lg" alignSelf="flex-end" />
      <Heading
        mb={8}
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r,pink.500,pink.300,blue.500)"
        bgClip="text"
      >
        Todo App 🔥
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodos={addTodos} />
    </VStack>
  );
}

export default App;
