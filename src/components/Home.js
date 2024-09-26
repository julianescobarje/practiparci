import Info from "./Info"
import Feed from "./Feed"
import Detail from "./Detail"

function Home({user}) {
  const { numPosts } = user
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', backgroundColor: '#fafafa'}}>
      <Info user={user}/>
      <Feed numPosts={numPosts}/>
    </div>
  )
}

export default Home