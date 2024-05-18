import style from './Sidebar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faClock } from '@fortawesome/free-solid-svg-icons'

import { NavLink } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.menu}>
        <ul>
          <li>
            <NavLink to="/">
              <span><FontAwesomeIcon icon={faHouse} /></span>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/history">
              <span><FontAwesomeIcon icon={faClock} /></span>
              History
            </NavLink>
          </li>
        </ul>
      </div>

      <div className={style.playlists}>
        <ul>
          <li>
            <NavLink to="/playlist/1">Playlist 1</NavLink>
          </li>
          <li>
            <NavLink to="/playlist/2">Playlist 2</NavLink>
          </li>
          <li>
            <NavLink to="/playlist/3">Playlist 3</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar