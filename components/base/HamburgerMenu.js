import React from 'react';
import { useRouter } from 'next/router';
import { Menu, Dropdown, Button } from 'antd';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const HamburgerMenu = () => {
  const router = useRouter();

  const scrollToContact = () => {
    const section = document.getElementById( 'contact-description' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  const redirectAndScroll = () => {
    router.push('/');
    setTimeout(() => {
      scrollToContact();
    }, 2000);
  }
    const menu = (
        <Menu>
          <Menu.Item>
            <span>
            <Link
              className="font-size-14 kit__utils__link"
              href="/"
            >
              Home
            </Link>
            </span>
          </Menu.Item>
          <Menu.Item>
          <span>
            <Link
              className="font-size-14 kit__utils__link"
              href="/propiedades"
            >
              Buscar
            </Link>
            </span>
          </Menu.Item>
          <Menu.Item>
            <span>
                <Link
                  className="font-size-14 kit__utils__link"
                  href="/nosotros"
                >
                ¿Quiénes Somos?
                </Link>
            </span>
          </Menu.Item>
          <Menu.Item>
            <span>
            <Button
              className="font-size-14 kit__utils__link"
              onClick={() => router.asPath === '/' ? scrollToContact() : redirectAndScroll()}
            >
              Contacto
            </Button>
            </span>
          </Menu.Item>
        </Menu>
      );

      return (
        <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" href="#">
            <FontAwesomeIcon icon={faBars} style={{ fontSize: 25, color: "#fff" }} />
            </a>
        </Dropdown>
      )
}
 
export default HamburgerMenu; 

 