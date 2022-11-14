// Write your code here
import {Component} from 'react'
import Body from '../Body'
import './index.css'

class Task extends Component {
  state = {
    TaskList: [],
  }

  componentDidMount = () => {
    this.getTasks()
  }

  getTasks = async () => {
    const url = 'https://gorest.co.in/public/v2/todos'
    const options = {
      headers: {
        Authorization: `Bearer`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.map(eachItem => ({
        id: eachItem.id,
        dueOn: eachItem.due_on,
        status: eachItem.status,
        title: eachItem.title,
        UserId: eachItem.user_id,
      }))
      this.setState({
        TaskList: updatedData,
      })
    }
  }

  render() {
    const {TaskList} = this.state
    return (
      <div>
        <h1>Task List</h1>
        <div>
          <button type="button">All</button>
          <button type="button">TasksMy </button>
        </div>
        <input type="search" />
        <table className="list-container">
          <tr>
            <th>task</th>
            <th>Time</th>
            <th>status</th>
            <th>Gender</th>
          </tr>
          {TaskList.map(each => (
            <Body key={each.id} TaskDetails={each} />
          ))}
        </table>
      </div>
    )
  }
}

export default Task
