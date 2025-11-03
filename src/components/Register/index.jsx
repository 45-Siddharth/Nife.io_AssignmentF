 import {Component} from 'react'
 import registerImage from '../../assets/images/register_image.jpg'
 import Cookies from 'js-cookie'
 import {Redirect,Link} from 'react-router-dom'
 import './index.css'
 
 class Register extends Component{
     state = {username:'',email:'',password:'',errorMsg:'',showSubmitError:false}
 
     onChangeUsername = event =>{
         this.setState({username:event.target.value})
     }

     onChangeEmail = event =>{
         this.setState({email:event.target.value})
     }
 
     onChangePassword = event =>{
         this.setState({password:event.target.value})
     }
 
      onRegisterSuccess = () => {
         const {history} = this.props
         history.push('/login')
     }
 
     onRegisterFailure = errorMsg => {
         this.setState({showSubmitError: true, errorMsg})
     }
 
     onRegister = async event =>{
         event.preventDefault()
         const {username,email,password} = this.state
         const url = "https://nife-io-assignment.onrender.com/users/register"
         const options = {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify({
                 username,
                 email,
                 password_hash: password
             })
         }
         const response = await fetch(url,options)
         const data = await response.json()
         if (response.ok === true) {
         this.onRegisterSuccess()
         } else {
         this.onRegisterFailure(data.error)
         }
     }
 
     render(){
         const {username,email,password,errorMsg} = this.state
         const jwtToken = Cookies.get('jwt_token')
 
         if (jwtToken !== undefined) {
             return <Redirect to="/" />
         }
 
         return(
             <div className="register-background">
                 <div className="register-image-container">
                     <img src={registerImage} alt="register" className="register-image"/>
                 </div>
                 <form onSubmit={this.onRegister} className="register-form-container">
                     <div className="input-container">
                         <label htmlFor="username" className="input-label">USERNAME</label>
                         <input type="text" id="username" className="input-field" value={username} placeholder="Username" onChange={this.onChangeUsername}/>
                     </div>
                     <div className="input-container">
                         <label htmlFor="email" className="input-label">EMAIL</label>
                         <input type="text" id="email" className="input-field" value={email} placeholder="Email" onChange={this.onChangeEmail}/>
                     </div>
                     <div className="input-container">
                         <label htmlFor="password" className="input-label">PASSWORD</label>
                         <input type="password" id="password" className="input-field" value={password} placeholder="Password" onChange={this.onChangePassword}/>
                     </div>
                     <button type="submit" className="register-button">Register</button>
                     {errorMsg&&<p className="error-message">*{errorMsg}</p>}
                     <p>
                         Already have an account?{' '}
                         <Link to="/login" className="signin-text">Sign in</Link>
                     </p>
                 </form>
             </div>
         )
     }
 }
 
 export default Register