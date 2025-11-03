import {Component} from 'react'
import homeImage from '../../assets/images/home_image.jpg'
import Header from '../Header'
import Cookies from 'js-cookie'
import {ThreeDots} from 'react-loader-spinner'
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import './index.css'

const apiStatus = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FALIURE',
    loading: 'LOADING'
}

class Profile extends Component{
    state = {userDetails:{},status:apiStatus.initial}

    componentDidMount(){
        this.getProfileDetails()
    }


    getProfileDetails = async ()=>{
        this.setState({status: apiStatus.loading})
        const token = Cookies.get('jwt_token')
        const url = "https://nife-io-assignment.onrender.com/users/profile"
        const options = {
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                },
            method: 'GET',
            }
        const response = await fetch(url,options)
        if (response.ok===true){
            const data = await response.json()
            this.setState({userDetails:data.user,status:apiStatus.success})
        }
        else{
             this.setState({status:apiStatus.failure})
        }
    }

    renderSuccessView = () =>{
        const {userDetails} = this.state
        const {username,email} = userDetails
        return(
            <div className="success-view-container">
                <div className="description-container">
                    <div className="description">
                        <h1 className="heading">JWT Authentication with Express & React</h1>
                        <p className="paragraph">A full-stack authentication system implementing JWT-based security. Users can register, login, and access protected dashboard pages containing their profile information. The Express.js backend handles token generation and verification using middleware, while the React frontend manages token storage and authenticated API requests. Features include secure password hashing with bcrypt, protected routes, token validation, and a clean, responsive user interface.</p>
                    </div>
                    <img src={homeImage} alt="profile_image" className="home-image"/>
                </div>
                <h1 className="profile-heading">Profile Details</h1>
                <ul className="user-details-list-container">
                    <li className="list-item user">
                        <FaUserCircle className="icon"/>
                        <div>
                            <p className="side-head">Username</p>
                            <p className="side-head-value">{username}</p>
                        </div>
                    </li>
                    <li className="list-item email">
                        <MdEmail className="icon"/>
                        <div>
                            <p className="side-head">Email</p>
                            <p className="side-head-value">{email}</p>
                        </div>
                    </li>
                    <li className="list-item status">
                        <GrStatusGood className="icon"/>
                        <div>
                            <p className="side-head">Status</p>
                            <p className="side-head-value">Active</p>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }

    renderLoadingView = () => (
        <div className="loader-container" data-testid="loader">
            <ThreeDots
            height="50"
            width="50"
            color="#037e62"
            ariaLabel="three-dots-loading"
            visible={true}
            />
        </div>
  )

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        alt="error view"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        className="failure-view-image"
      />
      <h1 className="user-not-found-heading">Profile Not Found</h1>
    </div>
  )

    renderProfileDetails=() =>{
        const {status} = this.state
        switch(status){
            case apiStatus.success:
                 return this.renderSuccessView()
            case apiStatus.failure:
                 return this.renderFailureView()
            case apiStatus.loading:
                 return this.renderLoadingView()
            default:
                return null
        }
    }

    render(){
        return (
            <>
                <Header/>
                <div>
                    {this.renderProfileDetails()}
                </div>
            </>
        )
    }
}

export default Profile