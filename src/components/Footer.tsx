import InstaIcon from '../assets/icons/insta.svg'
import XSocial from '../assets/icons/x-social.svg'
import YoutubeIcon from '../assets/icons/youtube.svg'
import LinkedInIcon from '../assets/icons/linkedin.svg'

export const Footer = () => {
  return (
    <footer className="py-12 bg-[linear-gradient(to_bottom,#000,#1B3C53_34%,#234C6A_65%,#456882_82%)] text-white ">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-center">© 2025 Synaphis. All rights reserved.</div>
          <ul className="flex justify-center gap-2.5">
            <li><XSocial/></li>
            <li><InstaIcon/></li>
            <li><YoutubeIcon/></li>
            <li><LinkedInIcon/></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
