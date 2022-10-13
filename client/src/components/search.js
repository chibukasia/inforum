import React from "react";

function Search({setSearch}){ 

    function handleChange(e){
        setSearch(e.target.value)
    }
    return(
        <div className="search-bar">
            <input type={'text'} placeholder="Search..." onChange={handleChange}/>
        </div>
    )
}

export default Search;