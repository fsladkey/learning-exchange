import React, { Component } from 'react'
import { Link } from 'react-router'

export default function GroupNav({ group }) {
  const url = `/groups/${group.id}`
  const links = [
    { url: url, title: "Events" },
    { url: url + "/members", title: "Members" },
  ]
  if (group.chat_enabled) {
    links.push({ url: url + "/chat", title: "Chat" })
  }
  const linkElements = links.map(link =>
    <li key={link.title}>
      <Link to={link.url}>{ link.title }</Link>
    </li>
  )
  return (

    <nav className="sub-nav">
      <ul>
        { linkElements }
      </ul>
    </nav>
  )
}

