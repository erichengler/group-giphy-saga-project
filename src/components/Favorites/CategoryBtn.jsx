

function CategoryBtn({gif, open, setToggleOpen}) {
  const toggleDropdown = (e) => {
    // console.log(open)
    setToggleOpen(!open)
    console.log(gif.id)
  }

  return (
    <>
      <div className="btnContainer" key={gif.id}>
        <button onClick={e => toggleDropdown(e)} className="dropButton">set category:</button>
        {/* Drop down still needs work. Had issues with previous idea. */}
        {
          open === false ? (
            <h2>false</h2>
            
          ) : (
            <h2>true</h2>
          )
        }
      </div>
    </>
  )
}

export default CategoryBtn;