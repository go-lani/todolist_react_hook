import React from 'react'

const TabList = ({ todoInfo }) => {
  const { id, open } = todoInfo;
  return (
    <li id="all" className="active">
      All
    </li>
  )
}

export default TabList
