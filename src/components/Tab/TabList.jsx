import React from 'react'

const TabList = ({ category, onChangeCategory }) => {
  const { id, open } = category;
  return (
    <li id={id} className={open ? 'active' : ''} onClick={() => onChangeCategory(id)}>
      {id.charAt(0).toUpperCase() + id.slice(1)}
    </li>
  )
}

export default TabList
