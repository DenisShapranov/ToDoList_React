import React from 'react'


const Header = ({sortTodo}) => (
  <div>
   <button className="sort"
          onClick={() => sortTodo()} >Sort by name</button>
   
    
   </div>
)

export default Header