import React from 'react';

const Footer = ({fecha}) => {
    return (
        <footer>
            <p id="footer" className="footer">Todos los derechos reservados &copy;</p>
            <span>{fecha}</span>
        </footer>
    );
}
 
export default Footer;