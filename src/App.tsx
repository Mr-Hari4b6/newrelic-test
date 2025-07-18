import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
     const getPosts = async () => {
            try {
              const res:any = await axios.get('https://dummy-json.mock.beeceptor.com/posts');
              const res2:any = await axios.get("https://secureone.anvayaa.in/api/categories/GetAllServiceCategoriesMaster");
              console.log('resss',res?.data,res2?.data);
            } catch(error:any) {
              console.log(error?.response)
            }
       }
  useEffect(()=>{
    
       getPosts()
  },[]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        <button onClick={getPosts}>GetPosts</button>
      </p>
    </>
  )
}

export default App
