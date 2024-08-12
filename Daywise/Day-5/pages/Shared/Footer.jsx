import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={styles.footerContainer}>
            <div style={styles.footerContent}>
                <div style={styles.footerSection}>
                    <h2 style={styles.footerHeader}>About TTGS</h2>
                    <p style={styles.footerText}>
                        TTGS is a leading timetable management system designed to streamline scheduling processes for educational institutions. Our platform helps colleges and universities create, manage, and optimize their timetables with ease.
                    </p>
                </div>
                <div style={styles.footerSection}>
                    <h2 style={styles.footerHeader}>Contact Us</h2>
                    <p style={styles.footerText}>
                        Have questions or need support? Get in touch with our team for assistance.
                        <br />
                        Email: support@ttgs.com
                        <br />
                        Phone: +1 234 567 890
                    </p>
                </div>
                <div style={styles.footerSection}>
                    <h2 style={styles.footerHeader}>Follow Us</h2>
                    <div style={styles.socialMediaIcons}>
                        <a href="https://instagram.com" style={styles.iconLink}>
                            <FaInstagram size={30} />
                        </a>
                        <a href="https://linkedin.com" style={styles.iconLink}>
                            <FaLinkedin size={30} />
                        </a>
                        <a href="https://twitter.com" style={styles.iconLink}>
                            <FaTwitter size={30} />
                        </a>
                    </div>
                </div>
            </div>
            <div style={styles.footerBottom}>
                <p style={styles.footerText}>© {new Date().getFullYear()} TTGS. All rights reserved.</p>
            </div>
        </footer>
    );
};

const styles = {
    footerContainer: {
        backgroundColor: '#2c3e50',
        color: '#ecf0f1',
        padding: '20px 0',
        marginTop: '40px'
    },
    footerContent: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '20px 0',
    },
    footerSection: {
        flex: 1,
        maxWidth: '300px',
        margin: '0 10px',
    },
    footerHeader: {
        fontSize: '1.5rem',
        marginBottom: '10px',
    },
    footerText: {
        fontSize: '1rem',
        lineHeight: '1.6',
    },
    socialMediaIcons: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '10px',
    },
    iconLink: {
        color: '#ecf0f1',
        margin: '0 10px',
        transition: 'color 0.3s',
    },
    footerBottom: {
        borderTop: '1px solid #34495e',
        padding: '10px 0',
        textAlign: 'center',
    }
};

export default Footer;
