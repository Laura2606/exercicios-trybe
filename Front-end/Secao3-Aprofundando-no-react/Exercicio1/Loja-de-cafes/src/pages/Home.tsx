
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
      <h1>Home page</h1>
      <Link to="/coffee">
        Nossos cafés
      </Link>
      </>
    )
  }
  
  export default Home;