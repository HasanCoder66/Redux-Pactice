import './App.css'
import {toggleTheme} from '../redux/Slices/themeReducer'
import { useDispatch } from 'react-redux'
function App() {
  const dispatch = useDispatch()
const themeChanger = () => {
dispatch(toggleTheme())
}
  return (
    
    <>
     <button onClick={themeChanger}>
      Theme Changer Button
     </button>
    </>
  )
}

export default App
