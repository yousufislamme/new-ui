import React from 'react';

const Card = ({ title, content }) => {
   return (
      <div className="card">
         <h2>{title || 'Default Title'}</h2>
         <p>{content || 'Default Content'}</p>
      </div>
   );
};

export default Card;
