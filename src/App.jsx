import './App.css'
import Todo from "./component/todo"
import { Provider } from "react-redux"
import { store } from './app/store'

function App() {
  return (
    <>
       <Provider store={store}> {/* passing props */}
        <Todo />
      </Provider>
    </>
  )
}

export default App
