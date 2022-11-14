// Write your code here
import './index.css'

import {IoNotificationsCircle} from 'react-icons/io5'
import {CgProfile} from 'react-icons/cg'
import {GrAppsRounded} from 'react-icons/gr'
import {MdLogout} from 'react-icons/md'
import {AiOutlineSetting} from 'react-icons/ai'
import {FiHome} from 'react-icons/fi'

import Lefter from '../Lefter'
import Task from '../Task'

const Header = () => (
  <div className="main-container">
    <div className="left-container">
      <img
        alt="logo"
        src="https://res.cloudinary.com/dmswymrzt/image/upload/v1663617271/new/cait_lqkam3.png"
        className="logo"
      />
      <div>
        <div className="side">
          <GrAppsRounded />
          <p>Resources</p>
        </div>
        <div className="side">
          <FiHome />
          <p>My Organisation</p>
        </div>
        <div className="side">
          <AiOutlineSetting />
          <p>settings</p>
        </div>

        <div className="side">
          <MdLogout />
          <p>Logout</p>
        </div>
      </div>
    </div>
    <div className="header_bg">
      <div className="header_container">
        <h1>my apps</h1>
        <IoNotificationsCircle />
        <CgProfile />
      </div>
      <Lefter />
      <Task />
    </div>
  </div>
)
export default Header
