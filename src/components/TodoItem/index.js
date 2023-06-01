// Write your code here
import './index.css'

const TodoList = props => {
  const {listItem, deleteItem} = props
  const {title, id} = listItem
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <ul className="list-item-container">
      <li className="list-title">
        <p>{title}</p>
      </li>

      <button onClick={onDelete} className="delete-button" type="button">
        Delete
      </button>
    </ul>
  )
}

export default TodoList
