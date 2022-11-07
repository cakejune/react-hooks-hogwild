import React, {useState} from "react";
import Pig from "./Pig"

export default function PigList({ pigs }) {

     const [weight, setWeight] = useState('')
    const [specialty, setSpecialty] = useState('')
    const [greasedPigs, setGreased] = useState(pigs)
    const greasedUpPigs = pigs.filter((pig)=>pig.greased===true)
    const [clicked, setClick] = useState(true)

    function handleClick(){
        clicked ? filterPigs() : restorePigs()
        setClick(!clicked)
    }
    function filterPigs() {
        setGreased(greasedUpPigs)
    }
    function restorePigs(){
        setGreased(pigs)
    }
    function alphabetize(arrayOfPigs){
      setGreased([...arrayOfPigs].sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })
      )
    }
    function sortByWeight(arrayOfPigs){
        setGreased([...arrayOfPigs].sort(function (a, b){
            if(a.weight < b.weight) {
                return -1;
            }
            if(a.weight > b.weight) {
                return 1;
            }
            return 0;
        }))
    }

  return (
    <div>
        <button onClick={handleClick}>{clicked ? "Show me greased pigs" : "Show me all pigs"}</button>
        <p></p>
        <button onClick={()=> alphabetize(greasedPigs)}>Alphabetize Pigs</button>
        <p></p>
        <button onClick={()=> sortByWeight(greasedPigs)}>Sort by Pig Weight</button>
        <br></br>
        {greasedPigs.map((pig)=>{
        return(<Pig key={pig.name} filterPigs={filterPigs} pig={pig} weight={weight} specialty={specialty} restorePigs={restorePigs}/>)
        })}
    </div>
  );
}