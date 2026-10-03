"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaRegClock, FaRegStar } from 'react-icons/fa';
import { TbFlameFilled } from 'react-icons/tb';

const WorkOutCard = ({post}) => {
     const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    rating,
    caloriesBurned,
    duration
  } = post;

 

    return (
        <Link href={`/workoutcard/${id}`} className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <Image
      src={image}
      alt={name}
      width={400}
      height={400}
      className="rounded-xl"
    />
  </figure>

  <div className="card-body">

    {/* Muscle Group Badges */}
    <div className="flex gap-2">
      {muscleGroups.map((muscle, index) => (
        <div key={index} className="badge text-black font-bold bg-lime-400">
          {muscle}
        </div>
      ))}
    </div>

    <h2 className="card-title text-2xl">
      {name}
    </h2>

    <p>
      {equipment}
    </p>

    <div className="card-actions">
      <div className="badge">
        <FaRegClock />
        <p>
{duration} Min</p>
      </div>
      <div className="badge">
        <TbFlameFilled />

        {caloriesBurned} kcal
      </div>
      <div className="badge">
        <FaRegStar />

        {rating}
      </div>
    </div>

  </div>
</Link>
    );
};

export default WorkOutCard;