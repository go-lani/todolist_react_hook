import React from 'react'

const Footer = ({ onAllComplete, onClearComplete, completedLength, activeLength }) => {
  return (
    <footer className="footer">
      <div className="complete-all">
        <input
          className="custom-checkbox"
          type="checkbox"
          id="ck-complete-all"
          onChange={onAllComplete}
        />
        <label htmlFor="ck-complete-all">Mark all as complete</label>
      </div>
      <div className="clear-completed">
        <button
          className="btn"
          onClick={onClearComplete}>
          Clear completed (<span className="completed-todos">{completedLength}</span>)
        </button>
        <strong className="active-todos">
          {activeLength}
        </strong> items left
      </div>
    </footer>
  )
}

export default Footer
