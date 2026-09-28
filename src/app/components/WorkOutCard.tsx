import React from 'react';

const WorkOutCard = ({post}) => {
     const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    difficulty,
    rating,
    caloriesBurned,
    duration
  } = post;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image}
      alt={name}
    />
  </figure>

  <div className="card-body">

    {/* Muscle Group Badges */}
    <div className="flex gap-2">
      {muscleGroups.map((muscle, index) => (
        <div key={index} className="badge bg-lime-400">
          {muscle}
        </div>
      ))}
    </div>

    <h2 className="card-title">
      {name}
    </h2>

    <p>
      {equipment}
    </p>

    <div className="card-actions">
      <div className="badge">
        <p>{duration} Min</p>
      </div>
      <div className="badge">
        {caloriesBurned}
      </div>
      <div className="badge">
        {rating}
      </div>
    </div>

  </div>
</div>
    );
};

export default WorkOutCard;