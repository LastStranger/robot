import React from "react";

const searchBox = ({searchField, search_change}) => {
    return (
        <div className='pa'>
            <input className='pa3 ba b--green bg-lightest-blue'
                   type="text"
                   placeholder="search robots"
                   onChange={search_change}
            />
        </div>
    );
};

export default searchBox;