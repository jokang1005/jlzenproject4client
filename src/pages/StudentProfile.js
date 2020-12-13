import React from 'react'

const StudentProfileSearch = (props) => {

    return(
      <div>
        <h1>Student Profiles</h1>
        <div >
        <form action="">
            <input type="text" placeholder='Look for a student...' onChange={props.handleChange} value={props.searchInput}
            />
            <button onClick={props.handleClick} >Search</button>
        </form>
        </div>
        </div>
      
    )
}

export default StudentProfileSearch;