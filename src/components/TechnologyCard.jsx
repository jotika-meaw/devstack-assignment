import React from "react";
export default function TechnologyCard({ technology, added, onAdd }) {
  return (
    <article className={`tech-card ${added ? 'selected' : ''}`}>
      <div className="card-topline">
        <div className="tech-icon-wrap">
          <img className="tech-icon" src={technology.icon} alt="" loading="lazy" />
        </div>
        <span className="badge">{technology.badge}</span>
      </div>

      <h3>{technology.name}</h3>
      <p className="description">{technology.description}</p>

      <div className="card-meta">
        <span className="category-chip">{technology.category}</span>
        <span>{technology.difficulty}</span>
        <span className="rating">★ {technology.rating}</span>
      </div>

      <button className={`add-button ${added ? 'added' : ''}`} onClick={() => onAdd(technology)}>
        {added ? 'Undo' : 'Add to Stack'}
      </button>
    </article>
  );
}
