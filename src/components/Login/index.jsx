import {Component} from 'react'
import loginImage from '../../assets/images/login_image.webp'
import Cookies from 'js-cookie'
import {Redirect,Link} from 'react-router-dom'
import './index.css'

class Login extends Component{
    state = {username:'',password:'',errorMsg:'',showSubmitError:false}

    onChangeUsername = event =>{
        this.setState({username:event.target.value})
    }

    onChangePassword = event =>{
        this.setState({password:event.target.value})
    }

     onLoginSuccess = jwtToken => {
        const {history} = this.props

        Cookies.set('jwt_token', jwtToken, {expires: 30,})
        history.replace('/')
    }

    onLoginFailure = errorMsg => {
        this.setState({showSubmitError: true, errorMsg})
    }

    login = async event =>{
        event.preventDefault()
        const {username,password} = this.state
        const url = "https://nife-io-assignment.onrender.com/users/login"
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password_hash: password
            })
        }
        const response = await fetch(url,options)
        const data = await response.json()
        if (response.ok === true) {
        this.onLoginSuccess(data.token)
        } else {
        this.onLoginFailure(data.error)
        }
    }

    render(){
        const {username,password,errorMsg} = this.state
        const jwtToken = Cookies.get('jwt_token')

        if (jwtToken !== undefined) {
            return <Redirect to="/" />
        }

        return(
            <div className="login-background">
                <div className="login-image-container">
                    <img src={loginImage} alt="login" className="login-image"/>
                </div>
                <form onSubmit={this.login} className="login-form-container">
                    <div className="input-container">
                        <label htmlFor="username" className="input-label">USERNAME</label>
                        <input type="text" id="username" className="input-field" value={username} placeholder="Username" onChange={this.onChangeUsername}/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="password" className="input-label">PASSWORD</label>
                        <input type="password" id="password" className="input-field" value={password} placeholder="Password" onChange={this.onChangePassword}/>
                    </div>
                    <button type="submit" className="login-button">Login</button>
                    {errorMsg&&<p className="error-message">*{errorMsg}</p>}
                    <p>
                        Don't have an account?{' '}
                        <Link to="/register" className="signup-text">Sign up</Link>
                    </p>
                </form>
            </div>
        )
    }
}

export default Login