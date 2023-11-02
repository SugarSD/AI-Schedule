import { Link } from 'react-router-dom'
import './Home.css'

function Home() {

  return (
    <>
      <div className="home">
        <header>
          <div className="logo"><Link to="/">logo</Link></div>
          <nav>
            <ul>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              
            </ul>
          </nav>
        </header>
      </div>
    </>
  )
}

export default Home

/*<li>
<Link to="/login">Login</Link>
</li>*/