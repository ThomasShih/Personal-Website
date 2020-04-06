import React from "react"

var linkItems = [
    {
        name:"Work Experience",
        href:""
    },{
        name:"Hobbies and Project",
        href:""}
]

function Navbar(){
    var NavbarItems = linkItems.map(linkItems => <a className="navLink" key={linkItems.name} href={linkItems.href}>{linkItems.name}</a>)
    return(
        <div className="navbar">
            <header className="name">
                Thomas Shih
            </header>
            <div className="navLinkTop">
                {NavbarItems}
            </div>
        </div>
  )};

export default Navbar