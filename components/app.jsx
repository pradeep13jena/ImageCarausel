import React from "react";
import {items} from "../utils/foreShadow"
import Button from "./button";
import Image from "./image";
import { useState } from "react";
import '../style.css'

// Succesfully pulled out the API data
function pull(){
  return new Promise((res, rej) => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    .then(resp => resp.json())
    .then(data => res(data))
  })
}

export default function App(Props){
  const [index, setIndex] = useState(0)
  let item = items[index]

  function prev(){
    index == 0 ? setIndex(9) : setIndex(index-1)

  }

  function next(){
    index == 9 ? setIndex(0) : setIndex(index+1)
  }

  pull()
    .then(data => {
      const dataItem = data[0 ]
      return (
        <section>
          Hello
        </section>
      )
    })

  return (
    <section>
      <Image src={item["url"]}/>
      <div className="buttons">
        <Button name="Prev" handle={prev}/>
        <Button name="Next" handle={next}/>
        {/* <Button name="Pull" handle={pullData}/> */}
      </div>
    </section>
  )
}