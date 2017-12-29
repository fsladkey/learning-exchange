import React from "react"
import { Link } from "react-router"
import UserPhoto from "../shared/user_photo"

export default function Member({ member, type, children }) {
    return (
        <li className={`member ${type}-member`}>
            <Link to={`/profile/${member.username}`}>
                <UserPhoto user={member} className="thumb" />
                <h4>{member.fullname}</h4>
            </Link>
            { children }
        </li>
    )
}
