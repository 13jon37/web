import React from "react"
import Menu from "./menu"


interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <header
    style={{
      background: `#4287f5`,
      marginBottom: `1.45rem`,
    }}
  >
    
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Menu/>
      
    </div>
  </header>
)

export default Header
