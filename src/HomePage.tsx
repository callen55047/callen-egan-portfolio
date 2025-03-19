import React from 'react';
import './styles/HomePage.css';
import {LocalImage, LocalVideo} from "./components/LocalFiles";
import {AppStoreLink} from "./components/Buttons";
import FooterSection from "./components/FooterSection";
import ContactSection from "./components/ContactSection";
import HeaderSection from "./components/HeaderSection";
import ProjectsSection from "./components/ProjectsSection";

export default function HomePage() {
  return (
    <div className="homepage-container">
      <HeaderSection/>

      <ProjectsSection>
        {/* SHADE TATTOO -------------------- */}
        <div className="project-card">
          <h3 className="project-title">✒️ Shade Tattoo</h3>
          <p className="project-description">
            Shade is a <strong>two-sided marketplace</strong> designed to connect tattoo artists with clients looking
            for an easy, frictionless way to <strong>discover, book, and pay</strong> for their tattoos.
            It consists of two main interfaces, the Artist portal and the client mobile app.
          </p>

          <h4>Achievements:</h4>
          <ul>
            <li><strong>Simplified design</strong>, catering to non-technical audience.</li>
            <li>Direct <strong>Stripe integration</strong> for payments.</li>
            <li>oAuth 2.0 architecture with <strong>short-lived access token authentication.</strong></li>
            <li>Http/2 server connection with <strong>live data updates</strong></li>
            <li><strong>Powerful messaging service with media attachments</strong>, timeline of events, and session
              creation.
            </li>
            <li>Maximum browser compatability with <strong>optimized performance</strong></li>
          </ul>

          {/* Artist Portal --------------------- */}
          <div className="project-subsection">
            <h3 className="project-subtitle">Artist Web Portal</h3>
            <p className="project-text">
              The artist web portal is a powerful SPA built with Typescript and React. This is where artists manage
              their presence on Shade.
              Features include:
            </p>
            <ul className="project-list">
              <li>📅 Calendar-based scheduling system</li>
              <li>💳 Secure payment processing and deposits</li>
              <li>🖼️ Portfolio management with artwork uploads</li>
              <li>📢 Integrated messaging for direct client communication</li>
              <li>📋 Custom inquiry form design</li>
            </ul>

            <video controls className="project-video">
              <source src={LocalVideo.SHADE_ARTIST_PORTAL} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Client Mobile App ------------------- */}
          <div className="project-subsection">
            <h4 className="project-subtitle">Client Native App</h4>
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
              <img src={LocalImage.Shade.clientFeed} alt="shade-portal"/>
              <img src={LocalImage.Shade.clientArtistProfile} alt="shade-portal"/>
              <img src={LocalImage.Shade.clientMessaging} alt="shade-portal"/>
              <img src={LocalImage.Shade.clientBooking} alt="shade-portal"/>
              <img src={LocalImage.Shade.clientSessions} alt="shade-portal"/>
            </div>

            <AppStoreLink
              url={"https://apps.apple.com/ca/app/shade-tattoo/id6474099834"}
              imageSource={LocalImage.Shade.appIcon}
            />
          </div>
        </div>


        {/* TRULIOO DOCV -------------------- */}
        <div className="project-card">
          <h3 className="project-title">📂 Trulioo DocV</h3>
          <p className="project-description">
            A revolutionary <strong>document verification SDK</strong> that's <strong>lightweight and easy to
            integrate</strong> into your native application.
            Built with <strong>Kotlin Multi-platform, Swift</strong>, and Typescript.
          </p>

          <h4>Achievements:</h4>
          <ul>
            <li><strong>Apple HIG</strong> approved design</li>
            <li>Custom <strong>machine learning models</strong> for optimized capture performance.</li>
            <li>oAuth 2.0 architecture with <strong>short-lived access token authentication and cert-pinning.</strong>
            </li>
            <li><strong>Native UI</strong> built on each platform.</li>
            <li>Built with <strong>error detection and recovery.</strong></li>
          </ul>

          <div className="image-gallery">
            <img src={LocalImage.Trulioo.document} alt="trulioo docv"/>
            <img src={LocalImage.Trulioo.selection} alt="trulioo docv"/>
            <img src={LocalImage.Trulioo.instruction} alt="trulioo docv"/>
            <img src={LocalImage.Trulioo.front} alt="trulioo docv"/>
            <img src={LocalImage.Trulioo.frontSuccess} alt="trulioo docv"/>
            <img src={LocalImage.Trulioo.flip} alt="trulioo docv"/>
            <img src={LocalImage.Trulioo.backError} alt="trulioo docv"/>
            <img src={LocalImage.Trulioo.review} alt="trulioo docv"/>
            <img src={LocalImage.Trulioo.complete} alt="trulioo docv"/>
          </div>

          <AppStoreLink
            url={"https://apps.apple.com/ca/app/trulioo/id1619835943"}
            imageSource={LocalImage.Trulioo.appIcon}
          />
        </div>


        {/* TRAQSPERA -------------------- */}
        <div className="project-card">
          <h3 className="project-title">📂 Traqspera Timesheets</h3>
          <p className="project-description">
            Traqspera Timesheets is a React Native mobile app designed to bring <strong>seamless offline timesheet
            tracking </strong>
            and job management to any workplace. Whether in a remote job site or a busy office,
            Traqspera ensures that employees can <strong>track time, manage jobs, and stay updated</strong>—whether
            online or offline.
          </p>

          <h4>Achievements:</h4>
          <ul>
            <li><strong>Custom Data Sync Processor</strong> – Ensures efficient, conflict-free synchronization of
              timesheet data when reconnecting to the network.
            </li>
            <li><strong>Advanced Clock-In/Out Rules</strong> – Supports customizable rules for time tracking, including
              location-based restrictions and shift validation.
            </li>
            <li><strong>Full Offline Support</strong> – Employees can track time, edit entries, and manage jobs without
              an internet connection—data syncs automatically once reconnected.
            </li>
            <li><strong>Live Updates & Real-Time Sync</strong> – When online, the app delivers instant updates to keep
              timesheets and job data accurate across devices.
            </li>
            <li><strong>Cross-Platform Efficiency</strong> – Built with React Native, ensuring a smooth experience on
              both iOS and Android.
            </li>
          </ul>

          <AppStoreLink
            url={"https://apps.apple.com/ca/app/traqspera-timesheets/id1539200842"}
            imageSource={LocalImage.Traqspera.icon}
          />
        </div>


        {/* SEROTONIN SOFTWARE -------------------- */}
        <div className="project-card">
          <h3 className="project-title">📂 Jetlag 3D</h3>
          <p className="project-description">
            Jetlag 3D is a <strong>high-performance physics-based platformer</strong> designed for silky-smooth <strong>60
            FPS</strong> gameplay on both iPhone and Android.
            Built with a focus on precision movement and responsive physics,
            the game challenges players to master dynamic environments while enjoying the absurdity with over-the-top,
            hilariously exaggerated characters <strong>and mind-blowing, chaotic effects!</strong>
          </p>

          <h4>Achievements:</h4>
          <ul>
            <li><strong>Fluid 60 FPS Gameplay</strong> – Optimized for mobile performance without compromising physics
              accuracy.
            </li>
            <li><strong>Custom Network Replication</strong> – Real-time physics synchronization for a seamless
              multiplayer experience.
            </li>
            <li><strong>Skill-Based Platforming</strong> – Precise controls and physics-driven mechanics that reward
              mastery.
            </li>
            <li><strong>Cross-Platform Play</strong> – Designed to run smoothly across iOS and Android devices.</li>
          </ul>

          <video controls className="project-video">
            <source src={LocalVideo.JETLAG_TRAILER} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>

          <AppStoreLink
            url={"https://apps.apple.com/ca/app/jetlag-3d/id1336123329"}
            imageSource={LocalImage.Serotonin.icon}
          />
        </div>
      </ProjectsSection>

      <ContactSection/>

      <FooterSection/>
    </div>
  );
}