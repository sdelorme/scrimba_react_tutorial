import React from "react"

export default function Info() {
    return (
        <div>
            <img className="body--headshot" src="/Images/headshot.png" />
            <div className="body">
                <h1 className="body--name">Calyn Dolan</h1>
                <h2 className="body--title">College & Career Coach</h2>
                <div className="links">
                    <button className="btn-white">Email</button>
                    <button className="btn-linkedin">LinkedIn</button>
                </div>
            </div>
        </div>
    )
}