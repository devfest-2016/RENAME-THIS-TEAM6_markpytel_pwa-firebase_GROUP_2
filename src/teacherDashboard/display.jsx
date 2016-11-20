import React from 'react'

const Display = (props) => (
  (props.if) ? <div>{props.children}</div> : null
)

export default Display