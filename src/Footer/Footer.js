import './Footer.css'

function Footer() {
    return (
        <footer>
            <div class="footer-container">
                <img src="./images/heart.png"/>
                {"Thanks to "}
                <a href="https://open-telekom-cloud.com/" target="_blank" rel="noopener noreferrer">
                    Open Telekom Cloud
                </a>
                {" "} for providing the infrastructure to host this site
            </div>
        </footer>
    )
}

export default Footer