import Image from "next/image";
import banner from '../assets/banner.png'

const Header = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
            <div>
                <h4 className="text-lime-400 font-bold">WORKOUT LIBRARY</h4>
                <h1 className="text-7xl font-bold mt-8">TRAIN WITH INTENT. LOG
                <br />EVERY SET.</h1>
                <p className="py-6 text-xl">
                    FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                    <br />into today's plan, and watch the week's work add up.
                </p>
                <button className="btn bg-lime-400 text-black font-bold">BROWSE WORKOUTS</button>
            </div>
            <div>
                <Image
                src={banner}
                alt="Picture of the author"
                />
             </div>
        </div>
        </div>
    );
};

export default Header;