import './index.css'

const HistoryItem = props => {
  const {browserDetails, updateDeleteButton} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = browserDetails

  const onClickDelete = () => {
    updateDeleteButton(id)
  }
  return (
    <li>
      <div className="list-item">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="instagram" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div>
        <button type="button" className="button" onClick={onClickDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
