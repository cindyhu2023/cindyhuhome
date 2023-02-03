export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark nav-pills">
                <a className="navbar-brand" href="#intro">CH.</a>
                  <ul className="navbar-nav nav justify-content-end" style={{width: "100%"}}>
                    <li className="nav-item">
                      <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#project">Experience & Project</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#contact">Contact</a>
                    </li>
                  </ul>
              </nav>
    )
}