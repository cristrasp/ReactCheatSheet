import {
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink
} from "reactstrap"

export default function NavbarComponent() {
    return (
        <div>
            <Navbar color='light' light >
                <NavbarBrand href='/'>React Cheat Sheet</NavbarBrand>
                <Nav>
                    <NavItem >
                        <NavLink href='/react-table'>
                            React Table
                        </NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink href='/react-list'>
                            React List
                        </NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink href='/react-components'>
                            React Components
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}