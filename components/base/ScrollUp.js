import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollUp = () => {

    const [showTopBtn, setShowTopBtn] = useState(false)

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 700) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    return ( 
        <>
        {showTopBtn && 
        <Button className='scroll-btn' onClick={() => goToTop()}>
            <FontAwesomeIcon icon={faAngleUp} style={{ fontSize: 25, color: "white" }} />
        </Button>
        }
        </>
     );
}
 
export default ScrollUp;