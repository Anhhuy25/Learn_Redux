import React from "react";
import { Link } from "react-router-dom";
import typeColors from "./typeColors";
import "./grid.css";
import "./style.css";

function Pokemon({
  name,
  id,
  types,
  sprites: {
    other: {
      "official-artwork": { front_default },
    },
  },
}) {
  return (
    <div className='col l-4'>
      <div className='pkm-img'>
        <Link to={`/pokemon/${id}`}>
          <img src={front_default} alt={name} />
        </Link>
      </div>
      <div className='pkm-nameid'>
        <p className='pkm-id'>{`#${id}`}</p>
        <Link to={`/pokemon/${id}`}>{name}</Link>
      </div>
      <div className='pkm-types'>
        {types.map((type, index) => {
          return (
            <span style={{ color: typeColors[type.type.name] }} className='pkm-type' key={index}>
              {type.type.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Pokemon;
