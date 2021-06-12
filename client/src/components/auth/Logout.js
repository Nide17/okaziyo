import React from 'react'
import PropTypes from 'prop-types'
import powerOff from '../../images/power-off.svg'

import { connect } from 'react-redux'
import { logout } from '../../redux/auth/auth.actions'

const Logout = ({ logout }) => {

  const logingout = () => {
    var signOut = window.confirm("Log out?");

    if (signOut) {
      logout()
      window.location.href = "/"
    }
    else return null
  }

  return (
    <>
      <button className="btn btn-sm btn-warning py-0 px-1" onClick={logingout}>
        <img src={powerOff} alt="logout" width="16" height="16" />
      </button>
    </>
  )
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired
}

export default connect(null, { logout })(Logout)
