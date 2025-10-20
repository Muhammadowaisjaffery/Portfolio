import '../styles/globals.css';
import Head from 'next/head';
import { ThemeProvider } from '../contexts/ThemeContext';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { siteConfig } from '../lib/config';
import ThemeSwitcher from '../components/ThemeSwitcher';
import NewHeader from '../components/NewHeader';
import { 
  FaFacebook, FaInstagram, FaYoutube, FaGithub, 
  FaTelegram, FaTwitter, FaLinkedin 
} from 'react-icons/fa';

const socialIcons = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  youtube: FaYoutube,
  github: FaGithub,
  telegram: FaTelegram,
  twitter: FaTwitter,
  linkedin: FaLinkedin,
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{siteConfig.seo.title}</title>
        <meta name="description" content={siteConfig.seo.description} />
        <meta name="keywords" content={siteConfig.seo.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph */}
        <meta property="og:title" content={siteConfig.seo.title} />
        <meta property="og:description" content={siteConfig.seo.description} />
        <meta property="og:image" content={siteConfig.seo.ogImage} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteConfig.seo.twitterHandle} />
        <meta name="twitter:title" content={siteConfig.seo.title} />
        <meta name="twitter:description" content={siteConfig.seo.description} />
        <meta name="twitter:image" content={siteConfig.seo.ogImage} />
        
        <link rel="icon" href={siteConfig.personal.avatar} />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&family=Fira+Code:wght@300;400;500;600;700&display=swap" rel="stylesheet" /> */}
      </Head>

      <ThemeProvider>
        <div className="min-h-screen transition-colors duration-300">
          <NewHeader />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={router.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>

          {/* Footer */}
          <footer 
            style={{ 
              backgroundColor: 'var(--color-background)',
              borderTop: 'var(--style-cardBorder)',
            }}
            className="transition-all duration-300"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
              {/* Main Footer Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
                
                {/* About Section */}
                <div className="lg:col-span-1">
                  <div className="mb-4">
                    <h3 
                      style={{ 
                        color: 'var(--color-text)',
                        fontWeight: 'var(--style-headingWeight)',
                      }}
                      className="text-xl font-bold mb-3"
                    >
                      {siteConfig.personal.name}
                    </h3>
                    <p 
                      style={{ color: 'var(--color-textSecondary)' }}
                      className="text-sm leading-relaxed mb-4"
                    >
                      Full-stack developer specializing in .NET Core, React, and modern web technologies. 
                      Creating innovative software solutions and sharing knowledge with the developer community.
                    </p>
                  </div>
                  
                  {/* Social Media Icons */}
                  <div className="flex gap-3">
                    {Object.entries(siteConfig.social).map(([platform, url]) => {
                      if (!url || platform === 'discord' || platform === 'discordServer') return null;
                      
                      const IconComponent = socialIcons[platform];
                      if (!IconComponent) return null;

                      return (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            backgroundColor: 'var(--color-surface)',
                            color: 'var(--color-text)',
                            border: 'var(--style-cardBorder)',
                            boxShadow: 'var(--style-shadow)',
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'var(--style-glow)'}
                          onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--style-shadow)'}
                          className="p-2 rounded-full transition-all hover:scale-110"
                          aria-label={`Follow on ${platform}`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Explore Section */}
                <div>
                  <h4 
                    style={{ 
                      color: 'var(--color-text)',
                      fontWeight: 'var(--style-headingWeight)',
                    }}
                    className="text-lg font-bold mb-4 uppercase tracking-wide"
                  >
                    Explore
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <a 
                      href="#about" 
                      style={{ color: 'var(--color-textSecondary)' }}
                      className="text-sm hover:text-white transition-colors"
                    >
                      About Me
                    </a>
                    <a 
                      href="#experience" 
                      style={{ color: 'var(--color-textSecondary)' }}
                      className="text-sm hover:text-white transition-colors"
                    >
                      Experience
                    </a>
                    <a 
                      href="#skills" 
                      style={{ color: 'var(--color-textSecondary)' }}
                      className="text-sm hover:text-white transition-colors"
                    >
                      Skills
                    </a>
                    <a 
                      href="#projects" 
                      style={{ color: 'var(--color-textSecondary)' }}
                      className="text-sm hover:text-white transition-colors"
                    >
                      Projects
                    </a>
                    <a 
                      href="#contact" 
                      style={{ color: 'var(--color-textSecondary)' }}
                      className="text-sm hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                    <a 
                      href="/projects" 
                      style={{ color: 'var(--color-textSecondary)' }}
                      className="text-sm hover:text-white transition-colors"
                    >
                      Portfolio
                    </a>
                  </div>
                </div>

                {/* Services Section */}
                <div>
                  <h4 
                    style={{ 
                      color: 'var(--color-text)',
                      fontWeight: 'var(--style-headingWeight)',
                    }}
                    className="text-lg font-bold mb-4 uppercase tracking-wide"
                  >
                    Services
                  </h4>
                  <div className="space-y-2">
                    <p style={{ color: 'var(--color-textSecondary)' }} className="text-sm">Web Development</p>
                    <p style={{ color: 'var(--color-textSecondary)' }} className="text-sm">Full-Stack Applications</p>
                    <p style={{ color: 'var(--color-textSecondary)' }} className="text-sm">API Development</p>
                    <p style={{ color: 'var(--color-textSecondary)' }} className="text-sm">Database Design</p>
                    <p style={{ color: 'var(--color-textSecondary)' }} className="text-sm">Cloud Solutions</p>
                    <p style={{ color: 'var(--color-textSecondary)' }} className="text-sm">Technical Consulting</p>
                  </div>
                </div>

                {/* Contact Section */}
                <div>
                  <h4 
                    style={{ 
                      color: 'var(--color-text)',
                      fontWeight: 'var(--style-headingWeight)',
                    }}
                    className="text-lg font-bold mb-4 uppercase tracking-wide"
                  >
                    Contact
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div 
                        style={{ 
                          backgroundColor: 'var(--color-primary)',
                          color: 'white',
                        }}
                        className="p-2 rounded-full"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>
                      <span style={{ color: 'var(--color-textSecondary)' }} className="text-sm">
                        {siteConfig.personal.location}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div 
                        style={{ 
                          backgroundColor: 'var(--color-primary)',
                          color: 'white',
                        }}
                        className="p-2 rounded-full"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                      </div>
                      <a 
                        href={`tel:${siteConfig.personal.phone}`}
                        style={{ color: 'var(--color-textSecondary)' }}
                        className="text-sm hover:text-white transition-colors"
                      >
                        {siteConfig.personal.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div 
                        style={{ 
                          backgroundColor: 'var(--color-primary)',
                          color: 'white',
                        }}
                        className="p-2 rounded-full"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </div>
                      <a 
                        href={`mailto:${siteConfig.personal.email}`}
                        style={{ color: 'var(--color-textSecondary)' }}
                        className="text-sm hover:text-white transition-colors"
                      >
                        {siteConfig.personal.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Bar */}
              <div 
                style={{ 
                  borderTop: 'var(--style-cardBorder)',
                }}
                className="pt-6"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p 
                    style={{ color: 'var(--color-textSecondary)' }}
                    className="text-sm text-center sm:text-left"
                  >
                    © {new Date().getFullYear()} by{' '}
                    <span style={{ color: 'var(--color-primary)' }}>
                      {siteConfig.personal.name}
                    </span>
                    . All rights reserved.
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <a 
                      href={siteConfig.social.discordServer}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        boxShadow: 'var(--style-shadow)',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'var(--style-glow)'}
                      onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--style-shadow)'}
                      className="px-4 py-2 rounded-full transition-all hover:scale-105 flex items-center gap-2 text-sm font-medium"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                      </svg>
                      Join Discord
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>

          {/* Theme Switcher */}
          <ThemeSwitcher />
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
