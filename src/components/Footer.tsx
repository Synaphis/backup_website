import InstaIcon from '../assets/icons/insta.svg'
import XSocial from '../assets/icons/x-social.svg'
import YoutubeIcon from '../assets/icons/youtube.svg'
import LinkedInIcon from '../assets/icons/linkedin.svg'

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
          
          {/* Left side: text links or copyright */}
          <div className="text-center sm:text-left">
            © 2025 Synaphis. All rights reserved.
          </div>

          {/* Right side: social icons */}
          <ul className="flex justify-center gap-4">
            <li>
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our X (Twitter) page"
                className="hover:text-white transition"
              >
                <XSocial className="w-6 h-6" />
              </a>
            </li>

            <li>
              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="hover:text-white transition"
              >
                <InstaIcon className="w-6 h-6" />
              </a>
            </li>

            <li>
              <a
                href="https://youtube.com/yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our YouTube channel"
                className="hover:text-white transition"
              >
                <YoutubeIcon className="w-6 h-6" />
              </a>
            </li>

            <li>
              <a
                href="https://linkedin.com/company/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
                className="hover:text-white transition"
              >
                <LinkedInIcon className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
