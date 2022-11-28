import React from 'react'

const Searchbox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph4 border-box"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  )
}

export default Searchbox
