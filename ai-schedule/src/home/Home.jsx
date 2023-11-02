import { Link } from 'react-router-dom'
import './Home.css'

function Home() {

  return (
    <>
      <div className="home">
        <header>
          <div className="logo">logo</div>
          <nav>
            <ul>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  )
}

export default Home