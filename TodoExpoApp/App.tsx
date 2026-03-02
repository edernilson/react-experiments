import React, { useState } from 'react';

import TestDataButton from './components/TestDataButton';
import { View, Text, TextInput, ScrollView } from 'react-native';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoText, setTodoText] = useState<string>("");

  const addTodo = (): void => {
    if (todoText.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: todoText,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setTodoText('');
    }
  };

  const toggleTodo = (id: number): void => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };

  return (
    <View>
      <Text>My To-do List</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        value={todoText}
        onChangeText={setTodoText}
        placeholder="Enter a new to-do"
      />
      <TestDataButton onAddTestData={addTodo} />
      <Text>Tasks:</Text>
      <ScrollView style={{ maxHeight: 400 }}>
        {
          todos.length === 0 ? (
            <Text>No tasks yet!</Text>
          ) : (
            todos.map(todo => (
              
              <View                             
                key={todo.id}>
                <view>{todo.completed ? "X" : "O"}</view>
                <Text
                  onPress={() => toggleTodo(todo.id)}
                  
                >
                  {todo.text}                    
                </Text>
              </View>
            ))
          )
        }
      </ScrollView>
      <View>
          <Text>Total Tasks: {todos.length}</Text>
      </View>
    </View>
  );
}