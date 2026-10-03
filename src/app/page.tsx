import Header from "./components/Header";
import WorkOutCard from "./workoutcard/WorkOutCard";


export default async function Home() {
    const data = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const posts = await data.json()
    
  return (
    <div>
        <Header></Header>
        <div className="container mx-auto p-4">
          <h2 className="text-4xl font-bold">THE LIBRARY</h2>
          <p>Twelve lifts covering every major muscle group.</p>
        </div>
        <div>
            <div className="grid grid-cols-3 container mx-auto gap-8">
            
            {
              posts.map(post => <WorkOutCard key={post.id} post={post}></WorkOutCard>)
            }
          </div>
        </div>
    </div>
  );
}
