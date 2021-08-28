import React from 'react'
import { connect } from 'react-redux'

export const Topbar = (props) => {
    return (
        <div>
            Solid Board
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Topbar)
