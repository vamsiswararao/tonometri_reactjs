// Write your code here
import './index.css'
import Moment from 'moment'

const Body = props => {
  const {TaskDetails} = props
  const {dueOn, status, title, UserId} = TaskDetails

  const statusValue =
    status === 'pending' ? (
      <div className="pending">.</div>
    ) : (
      <div className="completed">.</div>
    )
  // const date = new Date()
  // console.log(date.getFullYear())
  // const date = dueOn.getFullYear()
  console.log(Moment)
  return (
    <tr>
      <td>{title}</td>
      <td>{dueOn}</td>
      <td>{statusValue}</td>
      <td>{UserId}</td>
    </tr>
  )
}
export default Body
