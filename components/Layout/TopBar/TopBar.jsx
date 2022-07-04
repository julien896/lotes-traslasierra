import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faSearch } from "@fortawesome/free-solid-svg-icons"
import logo from '@/public/assets/lotes.jpg'
import HamburgerMenu from "@/components/base/HamburgerMenu";

const MainTopBar = () => {

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

  return (
    <div 
      className='card top-container active'  
      style={{borderRadius: 0}}
    >
      <div className="card-body" style={{borderRadius: "0"}}>
        <div className="topBar">
          <div className="hamburger-container">
            <HamburgerMenu />
          </div>
          <div className="logo">
            <Link href="/" passHref>
              <Image src={logo} alt='' />
              {/* <div><span>L</span>otes<span> T</span>raslasierra<span>.</span></div> */}
            </Link>
          </div>
          <div className="nav navHugeScreen">
            <Link
              className="font-size-14 kit__utils__link"
              href="/propiedades"
            >
              Buscar
            </Link>
            {/* <FontAwesomeIcon icon={faSearch} style={{ fontSize: 18, marginLeft: 8, color: "#fff" }} /> */}
            <Link
              className="font-size-14 kit__utils__link"
              href="/nosotros"
            >
              ¿Quiénes Somos?
            </Link>
            <Button
              className="font-size-14 kit__utils__link"
              onClick={() => router.asPath === '/' ? scrollToContact() : redirectAndScroll()}
            >
              Contacto
            </Button>
            <div className="call-us">
              <Link
                className="font-size-14 kit__utils__link"
                href="https://api.whatsapp.com/send?phone=5493544306083&text=&source=&data"
              >
              <a className="req" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faPhone} style={{ fontSize: 25, color: "#fff" }} />
              <span>Consultenos <br /><p>+54 9 3544306083</p></span>
              </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTopBar;
