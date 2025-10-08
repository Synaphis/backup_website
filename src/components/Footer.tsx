import InstaIcon from '../assets/icons/insta.svg';
import XSocial from '../assets/icons/x-social.svg';
import YoutubeIcon from '../assets/icons/youtube.svg';
import LinkedInIcon from '../assets/icons/linkedin.svg';

export const Footer = () => {
  return (
    <footer className="py-5 bg-[#097C87] text-white/90 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-center">
            © 2025 Synaphis. All rights reserved.
          </div>
          <ul className="flex justify-center gap-2.5">
            <li>
              <XSocial className="fill-white/80 hover:fill-white transition-colors" />
            </li>
            <li>
              <InstaIcon className="fill-white/80 hover:fill-white transition-colors" />
            </li>
            <li>
              <YoutubeIcon className="fill-white/80 hover:fill-white transition-colors" />
            </li>
            <li>
              <LinkedInIcon className="fill-white/80 hover:fill-white transition-colors" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
