// import React, { useState } from 'react'

// const Home = () => {
//   const [count,setCount]=useState(0);
//   function func1()
//   {
//     setCount(count + 1)
//   }

//   function func2()
//     {
//       setCount(count - 1)
//     }
  
//   return (
//     <div>
//         <div><p>{count}</p></div>
//       <button onClick={func1}>Increment</button>
//       <button onClick={func2}>Decrement</button>
//     </div>
//   )
// }

// export default Home

// import React, { useState } from 'react'

// const [city,SetCity]=useState('Bhopal');
// function func1(){
// SetCity('delhi');
// }
// const Home = () => {
//   return (
//   <>
//   <div>
//       <p>city:{city}</p>
//       <button onClick={func1}>Click me!!!</button>
//     </div>
//   </>
    
//   )
// }

// export default Home

// import React, { useEffect, useState } from 'react'

// const Home = () => {
// let[count,setCount]=useState(0)
// let[city,setCity]=useState('BHOPAL')
// let[data,setData]=useState([])
// useEffect(()=>{
//   fetch('https://dummyjson.com/recipes').then((res)=>{
//     return res.json()
//   }).then((data)=>{
//     // console.log(data)
//     setData(data.recipes)
//   })
// },[count]) //in this bracket we have to written the dependency we only want count i

// function func2(){
//   setCity('delhi')
// }

// function func1(){
//   setCount(++count)
// }

//   return (
//     <div>
//     <p>{count}</p>
//     <button onClick={func1}>add</button>
//     <p>{city}</p>
//     <button onClick={func2}>city</button>
//     {  data.map((a)=>{
//     return (
//       <>
//         <p>{a.id}</p>
//         <p>{a.name}</p>
//       </>) 
//   })
// }
//     </div>
//   )
// }
// export default Home


// import React, { useState } from 'react'

// const Home = () => {
//   let[time,setTime]=useState()
//   setInterval(()=>{
//     let date=new Date().toLocaleTimeString()
//     setTime(date)
//   })
//   return (
//     <div>
//       {
//         time
//       }
//     </div>
//   )
// }

// export default Home


import React, { useEffect, useState } from 'react'

const Home = () => {
  let[city,setCity]=useState('BHOPAL')
  let[count,setCount]=useState(0)
  let[data,setData]=useState([])

  useEffect(()=>{
    fetch('https://dummyjson.com/products').then((res)=>{
      return res.json()
      }).then((data)=>{
        setData(data.products)
    },[city])
  })

  function func1(){
    setCity('delhi')
  }

  function func2(){
    setCount(++count)
  }

  return (
    <div>
      <p>city:{city}</p>
      <button onClick={func1} >Click me!!</button>
      <p>count:{count}</p>
      <button onClick={func2}>add</button>

      {  data.map((a)=>{
    return (
      <>
        <p>{a.id}</p>
         <p>{a.name}</p>
       </>) 
   }) }
      
    </div>
  )
}

export default Home



