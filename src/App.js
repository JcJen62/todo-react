import './App.css';
import AddTodo from './AddTodo';
import DisplayTodos from './DisplayTodos';
import { TodoContextProvider } from './Context'

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <h1 id='pageTitle'>Your Todo App</h1>
        <AddTodo />
        <DisplayTodos />
      </TodoContextProvider>
    </div>
  );
}

export default App;
