

const Form = ({ gravitySelect, equationSelect, handleOgChange, handleFgChange, handleCalculate }) => {

  return (
    <>
      
      <form onSubmit={handleCalculate}>
      <h2>ABV CALCULATOR</h2>
        <div className="gravity-unit">
          <p><strong>Gravity Unit</strong></p>
            <input type="radio" id="SG" name="gravity_type" value="Specific Gravity" onClick={gravitySelect} defaultChecked/>
            <label htmlFor="SG">Specific Gravity (1.XXX)</label>
            <input type="radio" id="P" name="gravity_type" value="Plato" onClick={gravitySelect} />
            <label htmlFor="P">Plato (°P)</label>
        </div>


        <div className="og">
          <label htmlFor="og"><p><strong>Original Gravity:</strong></p></label>
            <input type="text" id="og" name="og" onChange={handleOgChange} />
        </div>


        <div className="fg">
          <label htmlFor="fg"><p><strong>Final Gravity:</strong></p></label>
            <input type="text" id="fg" name="fg" onChange={handleFgChange}/>
        </div>


        <div className="equation">
          <p><strong>Equation</strong></p>
            <input type="radio" id="standard" name="equation" value="Standard"  onClick={equationSelect} defaultChecked />
            <label htmlFor="standard">Standard</label>
            <input type="radio" id="P" name="equation" value="Alternate" onClick={equationSelect} />
            <label htmlFor="P">Alternate</label>
        </div>

        <button type="submit">Calculate</button>

        <div>
        </div>
      </form>
    </>
  )
}

export default Form