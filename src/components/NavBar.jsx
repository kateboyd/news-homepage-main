import Logo from "../assets/images/Logo"
import "./NavBar.css"

const NavBar = () => {
  return (
    <>
      <section className="nav-bar">
        <div className="logo">
          <Logo />
        </div>
        <div className="nav">
          <h2>Home</h2>
          <h2>New</h2>
          <h2>Popular</h2>
          <h2>Trending</h2>
          <h2>Categories</h2>
        </div>
      </section>
    </>
  )
}

export default NavBar
