import logo from "../assets/main-logo.svg";
const Footer = () => {
  return (
    <footer className="example-2">
      <div className="content site-footer--content">
        <div className="footer-left">
          <img src={logo} alt="logo" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            necessitatibus a pariatur, quibusdam dolorem impedit assumenda
            laborum modi nam, rem odit, doloremque commodi in consectetur vitae
            nisi. Nostrum, voluptatum quibusdam. Rpsum dolor sit amet
            consectetur adipisicing elit. Repellat necessitatibus a pariatur,
            quibusdam dolorem impedit assumenda laborum modi nam, rem odit,
            doloremque commodi in consectetur vitae nisi. Nostrum, voluptatum
            quibusdam
          </p>
        </div>
        <div className="footer-right">
          <address>
            <p>
              Email Me: <a href="mailto:hello@shihabiiuc.com">Test</a>
            </p>
            <p>
              Call me: <a href="tel:+8801947888197">+0000000</a>
            </p>
            <p>
              Office address: cairo
              <br />
              cairo
            </p>
          </address>
        </div>
      </div>
      <div className="copyright-notice">
        <p>
          © <b>2024,</b> All rights reserved by shahin
        </p>
      </div>
    </footer>
  );
};

export default Footer;
