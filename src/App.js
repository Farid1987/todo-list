import './App.css';

import TodoForm from './component/todo-form/todo-form.component';
import TodoWrapper from './component/todo-wrapper/todo-wrapper.component';

const App = () => {
  return (
    <div className="container" id="app">
      <div className="row">
        <div className="col-md-4">
          <TodoForm/>
        </div>
        <div className="col-md-8">
          <TodoWrapper/>
        </div>
      </div>
    </div>
  );
}


export default App;
