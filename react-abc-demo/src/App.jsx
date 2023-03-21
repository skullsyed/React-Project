import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<Counter/>
    </div>
  )
}


//like component creation with Hooks (use state)
function Counter() {
// let like = 10;
const [like, setLike] = useState(0);
const [disLike, setDisLike] = useState(0)
return (
     <div>
      <button onClick={()=>setLike(like+1)}>👍 {like}
      </button>
      <button onClick={()=>setDisLike(disLike+1)}>👎  {disLike}
      </button>
      <p>{like}</p>
     </div>


)}

export default App
