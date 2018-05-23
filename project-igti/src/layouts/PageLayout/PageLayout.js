import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import { Tabs, Tab } from 'react-bootstrap'

export const PageLayout = ({ children }) => (

  <div>
    <div className="wrapper">
      <div className="header">

        <div style={{ float: "left", position: "absolute" }}>

          <Link className="btn btn-default" style={{ float: "right", marinLeft: "20px" }} to='/userlist'>Buscar Contato</Link>

          <div style={{ float: "left" }}>
            <textarea type="text" style={{ width: "250px" }} />
          </div>
        </div>

        <div style={{ float: "right", width: "5%" }}>
          <Link className="btn btn-default" to='/user'>Add</Link>
        </div>

      </div>

      {children}
    </div>
  </div>
)

PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
