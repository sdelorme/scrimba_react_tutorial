import React from "react"

export default function Info() {
    return (
        <div className="body">
            <div className="body--no--background">            
                <div className="body--headshot"></div>
            </div>
                <h1>Calyn Dolan</h1>
                <h3>College & Career Coach</h3>
                <div className="links">
                    <button className="btn-white"><img className="btn--icon" src="./Images/mail.png" />Email</button>
                    <button className="btn-linkedin"><img className="btn--icon" src="./Images/linkedinlogo.png" />LinkedIn</button>
                </div>
        </div>
    )
}