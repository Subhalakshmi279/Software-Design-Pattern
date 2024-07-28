import React, { useCallback, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import BlurFade from '@/components/magicui/blur-fade';

const About = () => {
    return (
        <div className='about-container' style={styles.aboutContainer}>
            <BlurFade delay={0.5} inView>
            <div className='about-header' style={styles.aboutHeader}>
                <h1 style={styles.headerText}>About TTGS</h1>
                <p style={styles.descriptionText}>
                    Welcome to TTGS, a leading timetable management system designed for colleges and universities. Our platform simplifies the scheduling process, allowing institutions to create, manage, and optimize their timetables efficiently. 
                    <br /><br />
                    TTGS started as a company dedicated to building strong relationships with educational institutions to provide them with an efficient way to generate their schedules. By automating the complex process of timetable generation, TTGS saves valuable time and resources, allowing staff to focus on more critical tasks. 
                    <br /><br />
                    At TTGS, we understand the unique challenges faced by educational institutions in managing their schedules. That's why we've developed a robust system that not only meets but exceeds these needs. Our platform offers a range of features, including user account management, timetable generation using advanced algorithms, and comprehensive support services.
                </p>
                <button style={styles.contactButton}>Contact Us »</button>
            </div>
            </BlurFade>
            
            <div className='about-details' style={styles.aboutDetails}>
                <BlurFade delay={0.5} inView>
                    <MagicCard className='about-section' gradientColor="#6b9ac4">
                        <h2 style={styles.sectionHeader}>User</h2>
                        <p style={styles.sectionText}>
                            TTGS provides User accounts which gives the user the privilege to create, manipulate or delete the organization's timetable.
                        </p>
                        <button style={styles.actionButton}>Sign Up »</button>
                    </MagicCard>
                </BlurFade>
                <BlurFade delay={0.5} inView>
                    <MagicCard className='about-section' gradientColor="#6b9ac4">
                        <h2 style={styles.sectionHeader}>How does it Work?</h2>
                        <p style={styles.sectionText}>
                            TTGS makes use of a Genetic Algorithm that helps generate the most optimal and suited timetable for your organization's needs.
                        </p>
                        <button style={styles.actionButton}>Generate Timetable »</button>
                    </MagicCard>
                </BlurFade>
                <BlurFade delay={0.5} inView>
                    <MagicCard className='about-section' gradientColor="#6b9ac4">
                        <h2 style={styles.sectionHeader}>Terms & Conditions</h2>
                        <p style={styles.sectionText}>
                            If your organization has any concerns regarding the system please click below to read our Terms and Conditions.
                        </p>
                        <button style={styles.actionButton}>Terms & Conditions »</button>
                    </MagicCard>
                </BlurFade>
            </div>
        </div>
    );
};

const styles = {
    aboutContainer: {
        width: '100%',
        margin: '0 auto',
        textAlign: 'center'
    },
    aboutHeader: {
        height: '20%',
        padding: '20px',
        backgroundColor: '#f4f4f4',
        marginBottom: '20px',
    },
    headerText: {
        fontSize: '2.5rem',
        color: '#000',
        marginBottom: '10px',
    },
    descriptionText: {
        fontSize: '1rem',
        color: '#666',
        marginBottom: '20px',
    },
    contactButton: {
        fontSize: '1rem',
        padding: '10px 20px',
        backgroundColor: '#367588',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
    },
    aboutDetails: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '20px',  // Add this line to add space between the cards
    },
    aboutSection: {
        // width: '20%',
        height:'500px',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s',
    },
    sectionHeader: {
        fontSize: '1.5rem',
        color: '#000',
        marginBottom: '10px',
    },
    sectionText: {
        fontSize: '1rem',
        color: '#666',
        marginBottom: '20px',
    },
    actionButton: {
        fontSize: '1rem',
        padding: '10px 20px',
        backgroundColor: '#367588',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
    }
};

function MagicCard({
    children,
    className,
    gradientSize = 200,
    gradientColor = "#262626",
    gradientOpacity = 0.8
}) {
    const mouseX = useMotionValue(-gradientSize);
    const mouseY = useMotionValue(-gradientSize);

    const handleMouseMove = useCallback((e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    }, [mouseX, mouseY]);

    const handleMouseLeave = useCallback(() => {
        mouseX.set(-gradientSize);
        mouseY.set(-gradientSize);
    }, [mouseX, mouseY, gradientSize]);

    useEffect(() => {
        mouseX.set(-gradientSize);
        mouseY.set(-gradientSize);
    }, [mouseX, mouseY, gradientSize]);

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`group relative flex size-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white ${className}`}
            style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
        >
            <div className="relative z-10">{children}</div>
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
                    `,
                    opacity: gradientOpacity,
                }}
            />
        </div>
    );
}

export default About;
