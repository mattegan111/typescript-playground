import React from 'react'

// App.tsx

function App () {
  return (
    <>
      <TextField text="hello world"/>
    </>
  )
}


// TextField.tsx

type textFieldProps = {
  text: string
}

function TextField(props: textFieldProps) {
  return <>
    <h1>{ props.text }</h1>
  </>
}

//TODO: Show the cheatsheet
//  https://www.freecodecamp.org/news/content/images/size/w1600/2022/01/TypeScript-Cheat-Sheet--DARK-.png