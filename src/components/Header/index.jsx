import { useState } from "react";
import { Container, Navigation, HeaderLink, Options, Profile, Logout, LinkContainer, Content, HamburgerButton, MobileMenu, MenuOverlay } from "./styles"

import { UserCircle, ShoppingCart, List } from '@phosphor-icons/react'
import { useNavigate, useResolvedPath } from "react-router-dom"
import { useUser } from "../../hooks/UserContext";



export default function Header() {
    const navigate = useNavigate();
    const { logout, userInfo } = useUser();
    const [open, setOpen] = useState(false);

    const { pathname } = useResolvedPath()

    function logoutUser() {
        logout();
        navigate('/login')
    }

    return (
        <Container>
            <Content>
                <Navigation>
                    <div>
                        <HeaderLink to="/" $isActive={pathname === '/'}>Home</HeaderLink>
                        <hr></hr>
                        <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>Cardápio</HeaderLink>
                    </div>
                </Navigation>

                <Options>
                    <Profile>
                        <UserCircle color="${(props) => props.theme.white}" size={24} />
                        <div>
                            <p>Olá, <span>{userInfo.name}</span></p>
                            <Logout onClick={logoutUser}>Sair</Logout>
                        </div>
                    </Profile>

                    <LinkContainer>
                        <ShoppingCart color="${(props) => props.theme.white}" size={24} />
                        <HeaderLink to="/carrinho">Carrinho</HeaderLink>
                    </LinkContainer>

                    <HamburgerButton aria-label="Abrir menu" onClick={() => setOpen(true)}>
                        <List size={24} color="white" />
                    </HamburgerButton>
                </Options>

                <MenuOverlay open={open} onClick={() => setOpen(false)} />
                <MobileMenu open={open} role="dialog" aria-hidden={!open}>
                    <HeaderLink to="/" $isActive={pathname === '/'} onClick={() => setOpen(false)}>Home</HeaderLink>
                    <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'} onClick={() => setOpen(false)}>Cardápio</HeaderLink>
                    <HeaderLink to="/carrinho" onClick={() => setOpen(false)}>Carrinho</HeaderLink>
                    <hr />
                    <div style={{ paddingTop: 12 }}>
                        <p style={{ color: 'white', marginBottom: 8 }}>Olá, <strong>{userInfo.name}</strong></p>
                        <Logout onClick={() => { logoutUser(); setOpen(false); }}>Sair</Logout>
                    </div>
                </MobileMenu>

            </Content>
        </Container>
    )
}