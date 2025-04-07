import './Footer.css';

const Footer = ({ 
    instagramIcon = './src/imgs/icons8-twitter.svg', 
    facebookIcon = './src/imgs/icons8-facebook.svg', 
    youtubeIcon = './src/imgs/icons8-youtube.svg', 
    twitterIcon = './src/imgs/instagram 1 1.svg'
    
 }) => {
  return (
    <footer className="footer">
        <div className='footer-inner'>
            <div className="footer-content">
                <div className="footer-section">
                <h2 className="footer-title">ADVENTURE</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                </div>
                <div className="footer-section">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                    <div className="footer-icons">
                        <img src={instagramIcon} width={35} alt="Instagram" />
                        <img src={facebookIcon} width={35} alt="Facebook" />
                        <img src={youtubeIcon} width={35} alt="YouTube" />
                        <img src={twitterIcon} width={35} alt="Twitter" /> 
                    </div>
                </div>
            </div>
        </div>
      
     
    </footer>
  );
};

export default Footer;