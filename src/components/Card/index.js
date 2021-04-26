// Write your code here.
import './index.css'

const Card = props => {
  const {cardData} = props
  const {title, description, imgUrl, className} = cardData

  return (
    <div className={`${className} cardContainer`}>
      <div>
        <h1 className="cardHeading">{title}</h1>
        <p className="cardDescription">{description}</p>
      </div>
      <img src={imgUrl} className="image" alt="img" />
    </div>
  )
}

export default Card
