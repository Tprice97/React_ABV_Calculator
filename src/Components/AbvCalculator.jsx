import { useState } from "react"
import "./AbvCalculator.css"
import Form from "./Form"
import Results from "./Results"



function AbvCalculator() {
   const [gravityUnit, setGravityUnit] = useState("Specific Gravity")
   const [originalGravity, setOriginalGravity] = useState(0)
   const [finalGravity, setFinalGravity] = useState(0)
   const [equation, setEquation] = useState("Standard")
   const [abv, setAbv] = useState()

   const gravitySelect = (event) => {
    setGravityUnit(event.target.value)
   }
   const equationSelect = (event) => {
    setEquation(event.target.value)
   }
   const handleOgChange = (event) => {
     setOriginalGravity(event.target.value)
   }
   const handleFgChange = (event) => {
    setFinalGravity(event.target.value)
  }
  const convertPlato = (plato) => (plato / (258.6 - ((plato / 258.2) * 227.1))) + 1

  const handleCalculate = (event) => {
    event.preventDefault()

    if (gravityUnit === "Plato") {

      const original = convertPlato(originalGravity)
      const final = convertPlato(finalGravity)

      if (equation === "Standard") {
        const abvCalc = ((original - final) * 131.25)
        setAbv(abvCalc.toFixed(2))
      } else if (equation === "Alternate") {
        const abvCalc = ((76.08 * (original - final) / (1.775 - original)) * (final / 0.794))
        setAbv(abvCalc.toFixed(2))
      } else {
        null
      }
    } 
    
    else if (gravityUnit === "Specific Gravity") {

        const original = originalGravity
        const final = finalGravity

        if (equation === "Standard") {
          const abvCalc = ((original - final) * 131.25)
          setAbv(abvCalc.toFixed(2))
        } else if (equation === "Alternate") {
          const abvCalc = ((76.08 * (original - final) / (1.775 - original)) * (final / 0.794))
          setAbv(abvCalc.toFixed(2))
        } else {
          null
        }
    }

    else {
      null
    }
  }
  
  return (
    <>
    <div className="flex-container" >
      <Form gravitySelect={gravitySelect} equationSelect={equationSelect} handleOgChange={handleOgChange} handleFgChange={handleFgChange} handleCalculate={handleCalculate} />
      <Results abv={abv } originalGravity={originalGravity} finalGravity={finalGravity} />
    </div>
    </>
  )
}

export default AbvCalculator
