import React from "react";
import './Footer.css';


const Footer = () => {
    return(
        <div className="footer">
            <p>&copy; {new Date().getFullYear()} Kibiwot Moi. All rights reserved.</p>
                <p>Connect with me on <a href="https://www.linkedin.com/in/biwot-moi-8a29982b0/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="https://github.com/biwott77" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </div>
    )
}

export default Footer;
