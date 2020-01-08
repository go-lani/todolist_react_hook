import React from 'react'

const Footer = ({ onAllDone, onClearDone, onDoneLength, onActiveLength }) => {
  return (
    <footer className="footer">
      <div className="complete-all">
        <input
          className="custom-checkbox"
          type="checkbox"
          id="ck-complete-all"
          onChange={onAllDone}
        />
        <label htmlFor="ck-complete-all">Mark all as Done</label>
      </div>
      <div className="clear-completed">
        <button
          className="btn"
          onClick={onClearDone}>
          Clear Done (<span className="completed-todos">{onDoneLength}</span>)
        </button>
        <strong className="active-todos">
          {onActiveLength}
        </strong> items left
      </div>
    </footer>
  )
}

export default Footer
