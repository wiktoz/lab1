import './App.css'
import TasksWrapper from './components/TasksWrapper'
import TasksProvider from './context/TaskContext'
import Form from './components/Form'

function App() {
  return (
    <TasksProvider>
      <div className="flex flex-col gap-large">
        <div>
          <div className="header">
            Twoje zadania na dziś
          </div>
          <TasksWrapper/>
        </div>
        <div>
          <Form/>
        </div>
      </div>
    </TasksProvider>
  );
}

export default App;
