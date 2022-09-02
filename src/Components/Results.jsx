

const Results = ({ abv, originalGravity, finalGravity }) => {

  return (
    <>
      <div>
        <p><strong>ABV:</strong> {abv}%</p>
        <p><strong>ORIGINAL GRAVITY (SG):</strong> {originalGravity}</p>
        <p><strong>FINAL GRAVITY (SG):</strong> {finalGravity}</p>
      </div>
    </>
  )
}

export default Results