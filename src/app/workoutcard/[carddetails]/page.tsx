

import Image from "next/image";

const Page = async ({ params }) => {
  const { carddetails } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${carddetails}`
  );
  
  if (!res.ok) {
    throw new Error("Failed to fetch workout data");
  }

  const workout = await res.json();



  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        
        <div>
          <Image
            src={workout.image}
            alt={workout.name}
            width={400}
            height={600}
            className="rounded-lg shadow-2xl"
          />
        </div>

        <div>
          <h2 className="text-5xl font-bold">
            {workout.name}
          </h2>

          <p className="py-6">
            {workout.description}
          </p>

          <div className="flex gap-3">
            {workout.muscleGroups?.map((muscle, index) => (
              <div
                key={index}
                className="badge text-black font-bold bg-lime-400"
              >
                {muscle}
              </div>
            ))}
          </div>

     
          <div className="mt-4 mb-2">
            <table className="table border">
              <tbody>
                <tr>
                  <td>Equipment</td>
                  <td>{workout.equipment}</td>
                </tr>

                <tr>
                  <td>Difficulty</td>
                  <td>{workout.difficulty}</td>
                </tr>

                <tr>
                  <td>Sets</td>
                  <td>{workout.sets}</td>
                </tr>

                <tr>
                  <td>Reps</td>
                  <td>{workout.reps}</td>
                </tr>

                <tr>
                  <td>Duration</td>
                  <td>{workout.duration} mins</td>
                </tr>

                <tr>
                  <td>Calories</td>
                  <td>{workout.caloriesBurned} kcal</td>
                </tr>

                <tr>
                  <td>Rating</td>
                  <td>{workout.rating}</td>
                </tr>
              </tbody>
            </table>
          </div>

         
          <div className="mb-2">
            <h2 className="text-2xl font-bold mb-2">
              Instructions
            </h2>

            <ol className="list-decimal list-inside">
              {workout.instructions?.map((instruction, index) => (
                <li className="mb-4" key={index}>
                  {instruction}
                </li>
              ))}
            </ol>
          </div>

          <div className="flex gap-4">
            <button className="btn bg-lime-400 text-black">
              Add to My Today's Plan
            </button>

            <button className="btn btn-outline">
              Save for Later
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page;