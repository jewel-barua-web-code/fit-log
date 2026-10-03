

const page = () => {
    return (
        <div className="container mx-auto">
            <h2>MY PLAN</h2>
            <p>Cap of five lifts for today. Finish them, then load more.</p>
            
                
            <div className="grid grid-cols-3 bg-base-200 mb-4 p-24">
                <div>
                    <h4>Exercise</h4>
                    <p>2</p>
                </div>
                <div>
                   <h4>Exercise</h4>
                    <p>2</p>
                </div>
                <div>
                    <h4>Exercise</h4>
                    <p>2</p>
                </div>
            </div>
            <div className="flex justify-between items-center mb-4">
                <div className="tabs tabs-box">
                    <input type="radio" name="my_tabs_1" className="tab" aria-label="Today's Plan" defaultChecked/>
                    <input type="radio" name="my_tabs_1" className="tab" aria-label="Saved" />
                </div>
                <div className="flex">
                    <span>Sort by:</span>
                    <select defaultValue="Duration" className="select">
                        <option disabled={true}>Duration</option>
                        <option>Calories</option>
                        <option>Rating</option>
                    </select>
                </div>
            </div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Nothing Here Yet</h1>
                    <p className="py-6">
                        Browse the library and add a lift to get today moving.
                    </p>
                    <button className="btn btn-primary">Go To Workouts</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default page;