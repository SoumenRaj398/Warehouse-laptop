import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="text-success text-center mt-5 mb-5">
            <h3><small>copyright @ {year} </small></h3>
            
            
        </footer>
    );
};

export default Footer;