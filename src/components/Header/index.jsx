import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }


  return (
    <nav className="nav-header">
        <div className="nav-content">
            <div className="nav-bar-mobile-logo-container">
                <div className="app-logo-container">
                    <IoShieldCheckmarkSharp className="app-logo"/>
                    <h1 className="app-logo-text">Secur3</h1>
                </div>
                <button
                    type="button"
                    className="nav-mobile-btn"
                    onClick={onClickLogout}
                >
                    <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                    alt="nav logout"
                    className="nav-bar-img"
                    />
                </button>
            </div>

            <div className="nav-bar-large-container">
                <div className="app-logo-container">
                    <IoShieldCheckmarkSharp className="app-logo"/>
                     <h1 className="app-logo-text">Secur3</h1>
                </div>

                <button
                    type="button"
                    className="logout-desktop-btn"
                    onClick={onClickLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    </nav>
  )
}

export default withRouter(Header)
