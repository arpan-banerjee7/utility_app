import React from 'react';

function NavDropdown(props) {
    const [state,setState]= React.useState({isToggleOn:false})
    const classDropdownMenu = 'dropdown-menu' + (state.isToggleOn ? ' show' : '')

    const showDropdown=(e)=> {
        e.preventDefault();
        setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }

      return (
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false"
            onClick={(e) => {showDropdown(e)}}>
            {props.name}
          </a>
          <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
            {props.children}
          </div>
        </li>
      )

  }

  export default NavDropdown;