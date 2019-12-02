import { useState } from "react"
import Link from "next/link"

import {
  MDBNavbarNav,
  MDBNavItem,
  MDBCollapse,
} from "mdbreact"

export default ({ isOpen }) => {

  // console.log('isOpen', isOpen)
if(!isOpen){
  return null
}
  let collapseID = ""
  if(isOpen){
    collapseID = "basicCollapse"
  }


  return (
    <nav>
      <MDBCollapse id="basicCollapse" isOpen={collapseID} navbar>
        <MDBNavbarNav left>
          <MDBNavItem active>
            <Link href="/checkout">
              <a>Check Out</a>
            </Link>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </nav>
  )
}
