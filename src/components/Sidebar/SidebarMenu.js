import React, { useState } from 'react'
import { useLocation, NavLink, Outlet } from "react-router-dom";

import { Nav, Dropdown } from "react-bootstrap";

// const [currentMenu, setCurrentMenu] = useState('/admin/dashboard');

function RenderNavLink({ layout, path, icon, name, component, isSub }) {
  return (
    <NavLink
      to={layout + path}
      className="nav-link"
      activeClassName="active"
      key={layout + path}
      style={isSub && { color: 'black' }}
      activeRoute={component}
    >
      <i className={icon} />
      <span>{name}</span>
    </NavLink>
  )
}

function RenderDropdown({ layout, path, icon, name, component, child }) {
  return (

    <Dropdown as={Nav.Item}>
      <Dropdown.Toggle
        to={layout + path}
        as={Nav.Link}
        data-toggle="dropdown"
        className="nav-link"
        activeClassName="active"
      >
        <i className={icon} />
        <p>{name}</p>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {child.map((prop, key) => {
          return (
            <RenderNavLink
              layout={prop.layout}
              path={prop.path}
              icon={prop.icon}
              name={prop.name}
              component={prop.component}
              isSub={true}
              key={prop.layout + prop.path}
            />
          )
        })}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default function SidebarMenu({ routes }) {

  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };


  return (
    <>
      <Nav>

        {routes.map((prop, key) => {
          if (!prop.redirect)
            return (
              <li
                className={

                  // !prop.child ? activeRoute(prop.layout + prop.path) : activeRoute(prop.layout + prop.parentPath)
                  prop.upgrade
                    ? "active active-pro"
                    : activeRoute(prop.layout + prop.path)
                }
                key={prop.layout + prop.path}
              >

                {!prop.child ?
                  <RenderNavLink
                    layout={prop.layout}
                    path={prop.path}
                    icon={prop.icon}
                    name={prop.name}
                    component={prop.component}
                  />
                  :
                  <RenderDropdown
                    layout={prop.layout}
                    path={prop.path}
                    icon={prop.icon}
                    name={prop.name}
                    component={prop.component}
                    child={prop.child} />
                }
              </li>
            );
          return null;
        })}

      </Nav>
      <Outlet />
    </>
  )
}