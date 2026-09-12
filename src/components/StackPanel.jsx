import React from "react";
export default function StackPanel({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="stack-panel">
      <div className="stack-header">
        <h3>Your Stack</h3>
        <p>{stack.length} {stack.length === 1 ? 'Technology' : 'Technologies'} Selected</p>
      </div>

      {stack.length === 0 ? (
        <div className="stack-empty">Your stack is empty.</div>
      ) : (
        <>
          <div className="stack-list">
            {stack.map((item) => (
              <div className="stack-item" key={item.id}>
                <img src={item.icon} alt="" />
                <div>
                  <strong>{item.name}</strong>
                  <small>{item.category}</small>
                </div>
                <button aria-label={`Remove ${item.name}`} onClick={() => onRemove(item.id)}>×</button>
              </div>
            ))}
          </div>
          <button className="remove-all" onClick={onRemoveAll}>Remove All</button>
        </>
      )}
    </aside>
  );
}
