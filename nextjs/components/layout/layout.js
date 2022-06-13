import React from 'react'
import { Fragment } from 'react'
import Mainheader from './main-header'

export default function Layout (props) {
  return (
    <Fragment>
    <Mainheader/>
        <main>
        {props.children}
        </main>
    </Fragment>
  )
}
