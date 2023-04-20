import {useState} from 'react'  //hook

export default function Main() {
    const [count, setCount] = useState(0)

    function onClick() {
        setCount(count + 1)
    }

    return <button onClick={onClick}>{count}</button>
  
}
