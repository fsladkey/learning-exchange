import React from 'react'
import SearchBar from './search_bar'
import UserInfo from './user_info'
import Logo from './logo'

export default function NavBar(props) {
  return (
    <section className="nav">
      <nav className="content-container flex-row">
        <Logo />
        <SearchBar />
        <UserInfo />
      </nav>
    </section>
  )
}
