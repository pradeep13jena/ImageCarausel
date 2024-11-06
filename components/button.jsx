import React from "react";

export default function Button(Props){
  return (
    <>
      <button onClick={Props.handle}>{Props.name}</button>
    </>
  )
}