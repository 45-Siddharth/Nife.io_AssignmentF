import notfoundImage from '../../assets/images/notfound_image.jpg'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src={notfoundImage}
      alt="not found"
      className="not-found-img"
    />
    <h1 className="not-found-message">Oops! Page Not Found</h1>
  </div>
)

export default NotFound
