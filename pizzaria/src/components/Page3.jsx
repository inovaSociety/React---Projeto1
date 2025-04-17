import React from 'react';
import './BannerFull.css';

const Page3 = () => {
    return (
        <div className="banner-full">
            <div className="image-block">
                <img src="./src/imgs/skatergirl.jpg" alt="Feminino" className="banner-img" />
                <div className="footer-box">
                    <h2>FEMININO</h2>
                    <button className="buy-btn">COMPRE AGORA</button>
                </div>
            </div>
            <div className="image-block">
                <img src="./src/imgs/skaterboy.jpg" alt="Masculino" className="banner-img" />
                <div className="footer-box">
                    <h2>MASCULINO</h2>
                    <button className="buy-btn">COMPRE AGORA</button>
                </div>
            </div>
        </div>
    );
};

export default Page3;
