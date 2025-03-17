import React from 'react';
import './HomePage.css';
import {LocalImage, LocalVideo} from "./LocalFiles";

export default function HomePage() {
    return (
        <div className="homepage-container">
            {/* Header Section */}
            <header className="header-section">
                <h1 className="header-title">
                    Callen Egan
                </h1>
                <p className="header-description">
                    Passionate <strong>Mobile Software Engineer</strong> with a deep-rooted foundation in object-oriented programming.
                    I started my journey in game development, writing C++ code to bring interactive experiences to life.
                    This early exposure to performance optimization and scalable architecture laid the groundwork for my career in building robust, multi-platform applications.
                    Today, I leverage a diverse skill set across <strong>Swift</strong>, <strong>Kotlin</strong>, <strong>TypeScript</strong>, <strong>Dart</strong>, and <strong>C#</strong> to craft seamless mobile experiences.
                    Whether it's optimizing gameplay features or designing an intuitive user interface, my focus is on delivering efficient, scalable, and maintainable solutions.
                </p>
            </header>

            <section className="projects-section">
                <h2 className="section-title">✨ Projects Showcase</h2>

                {/* SHADE TATTOO -------------------- */}
                <div className="project-card">
                    <h3 className="project-title">✒️ Shade Tattoo</h3>
                    <p className="project-description">
                        Shade is a <strong>two-sided marketplace</strong> designed to connect tattoo artists with clients looking for an easy, frictionless way to <strong>discover, book, and pay</strong> for their tattoos.
                        It consists of two main interfaces, the Artist portal and the client mobile app.
                    </p>

                    <h4>Achievements:</h4>
                    <ul>
                        <li><strong>Simplified design</strong>, catering to non-technical audience.</li>
                        <li>Direct <strong>Stripe integration</strong> for payments.</li>
                        <li>oAuth 2.0 architecture with <strong>short-lived access token authentication.</strong></li>
                        <li>Http/2 server connection with <strong>live data updates</strong></li>
                        <li><strong>Powerful messaging service with media attachments</strong>, timeline of events, and session creation.</li>
                        <li>Maximum browser compatability with <strong>optimized performance</strong></li>
                    </ul>

                    {/* Artist Portal --------------------- */}
                    <div className="project-subsection">
                        <h3 className="project-subtitle">Artist Portal</h3>
                        <p className="project-text">
                            The artist web portal is a powerful SPA built with Typescript and React. This is where artists manage their presence on Shade.
                            Features include:
                        </p>
                        <ul className="project-list">
                            <li>📅 Calendar-based scheduling system</li>
                            <li>💳 Secure payment processing and deposits</li>
                            <li>🖼️ Portfolio management with artwork uploads</li>
                            <li>📢 Integrated messaging for direct client communication</li>
                            <li>📋 Custom inquiry form design</li>
                        </ul>

                        <div className="image-gallery">
                            <img src={LocalImage.Shade.artistPage} alt="shade-portal" />
                            <img src={LocalImage.Shade.skills} alt="shade-portal" />
                            <img src={LocalImage.Shade.inquiry} alt="shade-portal" />
                            <img src={LocalImage.Shade.messaging} alt="shade-portal" />
                            <img src={LocalImage.Shade.newSession} alt="shade-portal" />
                            <img src={LocalImage.Shade.bookings} alt="shade-portal" />
                            <img src={LocalImage.Shade.history} alt="shade-portal" />
                            <img src={LocalImage.Shade.settings} alt="shade-portal" />
                        </div>


                        <video controls className="project-video">
                            <source src={LocalVideo.SHADE_ARTIST_PORTAL} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    {/* Client Mobile App ------------------- */}
                    <div className="project-subsection">
                        <h4 className="project-subtitle">Client Mobile App</h4>
                        <p className="project-text">
                            A seamless mobile experience built with Flutter and Android and iOS.
                            Key features:
                        </p>
                        <ul className="project-list">
                            <li>🔍 Discover artists based on style, location, and availability</li>
                            <li>📩 Submit design requests and chat with artists</li>
                            <li>💳 Book appointments and make secure payments</li>
                            <li>⭐ Rate and review tattoo experiences</li>
                        </ul>

                        <div className="image-gallery">
                            <img src={LocalImage.Shade.clientFeed} alt="shade-portal" />
                            <img src={LocalImage.Shade.clientArtistProfile} alt="shade-portal" />
                            <img src={LocalImage.Shade.clientMessaging} alt="shade-portal" />
                            <img src={LocalImage.Shade.clientBooking} alt="shade-portal" />
                            <img src={LocalImage.Shade.clientSessions} alt="shade-portal" />
                        </div>

                        <div className="app-store-link">
                            <img src={LocalImage.Shade.appIcon} alt="Download on the App Store" className="app-store-badge" />
                            <div style={{width: '25px'}} />

                            <a href="https://apps.apple.com/ca/app/shade-tattoo/id6474099834" target="_blank" rel="noopener noreferrer">
                                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                    <h3>View on the App Store</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>


                {/* TRULIOO DOCV -------------------- */}
                <div className="project-card">
                    <h3 className="project-title">📂 Trulioo DocV</h3>
                    <p className="project-description">
                        A revolutionary document verification SDK that's lightweight and easy to integrate into your native application.
                        Built with Kotlin Multi-platform, Swift, and Typescript.
                    </p>

                    <h4>Achievements:</h4>
                    <ul className="project-list">
                        <li><strong>Apple HIG</strong> approved design</li>
                        <li>Custom <strong>machine learning models</strong> for optimized capture performance.</li>
                        <li>oAuth 2.0 architecture with <strong>short-lived access token authentication and cert-pinning.</strong></li>
                        <li><strong>Native UI</strong> built on each platform.</li>
                        <li>Built with <strong>error detection and recovery.</strong></li>
                    </ul>

                    <div className="image-gallery">
                        <img src={LocalImage.Trulioo.document} alt="trulioo docv" />
                        <img src={LocalImage.Trulioo.selection} alt="trulioo docv" />
                        <img src={LocalImage.Trulioo.instruction} alt="trulioo docv" />
                        <img src={LocalImage.Trulioo.front} alt="trulioo docv" />
                        <img src={LocalImage.Trulioo.frontSuccess} alt="trulioo docv" />
                        <img src={LocalImage.Trulioo.flip} alt="trulioo docv" />
                        <img src={LocalImage.Trulioo.backError} alt="trulioo docv" />
                        <img src={LocalImage.Trulioo.review} alt="trulioo docv" />
                        <img src={LocalImage.Trulioo.complete} alt="trulioo docv" />
                    </div>

                    <div className="app-store-link">
                        <img src={LocalImage.Trulioo.appIcon} alt="Download on the App Store" className="app-store-badge" />
                        <div style={{width: '25px'}} />

                        <a href="https://apps.apple.com/ca/app/trulioo/id1619835943" target="_blank" rel="noopener noreferrer">
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                <h3>View on the App Store</h3>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="project-card">
                    <h3 className="project-title">📂 Traqspera Timesheets</h3>
                    <p className="project-description">
                        An offline-ready timesheet & job tracking system tailored for complex contracting worksites.
                    </p>
                    <video controls className="project-video">
                        <source src="/videos/traqspera-timesheets.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section">
                <h2 className="section-title">📬 Contact</h2>
                <p className="contact-description">If you're interested in working together, feel free to reach out:</p>
                <ul className="contact-list">
                    <li>📧 <a href="mailto:callenegan94@gmail.com" className="contact-link">callenegan94@gmail.com</a></li>
                    <li>💼 <a href="https://www.linkedin.com/in/callen-egan-2983b218b" className="contact-link">LinkedIn</a></li>
                    <li>💻 <a href="https://github.com/callenegan" className="contact-link">GitHub</a></li>
                </ul>
            </section>

            {/* Footer */}
            <footer className="footer">
                This portfolio is a continuous work-in-progress. 🚀
            </footer>
        </div>
    );
}