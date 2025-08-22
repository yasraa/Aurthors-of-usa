import React from 'react';

function Pagination({ current, total, onChange }) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  
  return (
    <div className="pagination">
      {pages.map(num => (
        <button
          key={num}
          disabled={num === current}
          onClick={() => onChange(num)}
        >
          {num}
        </button>
      ))}
      {current < total && (
        <button onClick={() => onChange(current + 1)}>Next</button>
      )}
    </div>
  );
}

export default Pagination;
