import logo from "../assets/main-logo.svg";
const Footer = () => {
  return (
    <footer class="example-2">
      <div class="content site-footer--content">
        <div class="footer-left">
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
        <div class="footer-right">
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
      <div class="copyright-notice">
        <p>
          © <time datetime="2024">2024,</time> All rights reserved by shahin
        </p>
      </div>
    </footer>
  );
};

export default Footer;
