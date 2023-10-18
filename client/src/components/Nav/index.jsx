import React from 'react'

//ui-components
import {Button} from "reactstrap"

//react-router-dom
import { Link , Outlet,useLocation} from 'react-router-dom'


const index = () => {
    const location = useLocation();
  const activePath = location.pathname.split("/")[2];

  return (
    <div >
        <div className='nav'>
        <Link to="projects">
        <Button
    className={activePath=="projects"?'activeButton':'Button'}
  >
     Projects
  </Button>
        </Link>
    <Link to="tasks">
    <Button className={activePath=="tasks"?'activeButton':'Button'}>
    Tasks
  </Button>
    </Link>
        </div>
     
    <Outlet/>
    </div>
  )
}

export default index