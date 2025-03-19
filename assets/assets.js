import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import working from './working.png';
import stanImage from './stan.png';

export const assets = {
 user_image,
 code_icon,
 code_icon_dark,
 edu_icon,
 edu_icon_dark,
 project_icon,
 project_icon_dark,
 vscode,
 firebase,
 figma,
 git,
 mongodb,
 right_arrow_white,
 logo,
 logo_dark,
 mail_icon,
 mail_icon_dark,
 profile_img,
 download_icon,
 hand_icon,
 header_bg_color,
 moon_icon,
 sun_icon,
 arrow_icon,
 arrow_icon_dark,
 menu_black,
 menu_white,
 close_black,
 close_white,
 web_icon,
 mobile_icon,
 ui_icon,
 graphics_icon,
 right_arrow,
 send_icon,
 right_arrow_bold,
 right_arrow_bold_dark,
 working,
 stanImage
};

export const infoList = [
 { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js, java, c#, python', link: '#' },
 { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bsc in Information Technology', link: '#' },
 { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built some cool personal projects', link: '#work' },

];

export const toolsData = [
 assets.vscode, assets.mongodb, assets.figma, assets.git
];

export const serviceData = [
 { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
 { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
 { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
 { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
 { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
]

const socialIcons = {
 facebook: (
  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
   <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
  </svg>
 ),
 github: (
  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
   <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.798 8.207 11.387.6.111.793-.261.793-.581 0-.286-.011-1.043-.016-2.055-3.338.725-4.04-1.61-4.04-1.61-.544-1.374-1.327-1.743-1.327-1.743-1.087-.743.082-.728.082-.728 1.204.086 1.836 1.236 1.836 1.236 1.068 1.825 2.804 1.298 3.488.996.105-.773.417-1.298.76-1.598-2.666-.303-5.467-1.333-5.467-5.928 0-1.311.468-2.383 1.238-3.221-.124-.303-.536-.81-.052-1.684 0 0 1.007-.324 3.283 1.236 2.687-.749 5.229-.746 7.895 0 2.274-1.56 3.283-1.236 3.283-1.236.484.874.073 1.381-.052 1.684.77.838 1.238 1.91 1.238 3.221 0 4.595-2.801 5.625-5.467 5.928.449.39.851.872.851 1.746 0 1.322-.013 2.394-.013 2.716 0 .323.189.696.796.577C20.563 21.798 24 17.303 24 12c0-6.627-5.373-12-12-12z"></path>
  </svg>
 ),
/*  instagram: (
  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
   <path d="M12 2.163c3.162 0 3.536.012 4.785.069 1.348.061 2.506.317 3.464 1.276.957.96 1.215 2.118 1.276 3.464.057 1.249.069 1.623.069 4.785s-.012 3.536-.069 4.785c-.061 1.348-.317 2.506-1.276 3.464-.96.959-2.116 1.215-3.464 1.276-1.249.057-1.623.069-4.785.069s-3.536-.012-4.785-.069c-1.348-.061-2.506-.317-3.464-1.276-.959-.96-1.215-2.116-1.276-3.464-.057-1.249-.069-1.623-.069-4.785s.012-3.536.069-4.785c.061-1.348.317-2.506 1.276-3.464.96-.959 2.116-1.215 3.464-1.276 1.249-.057 1.623-.069 4.785-.069zM12 0c-3.188 0-3.578.013-4.832.071-1.271.059-2.392.313-3.274 1.195-.882.882-1.136 2.003-1.195 3.274-.057 1.254-.071 1.644-.071 4.832 0 3.188.013 3.578.071 4.832.059 1.271.313 2.392 1.195 3.274.882.882 2.003 1.136 3.274 1.195 1.254.057 1.644.071 4.832.071 3.188 0 3.578-.013 3.578-.071 4.832-.059 1.271-.313 2.392-1.195 3.274-.882.882-2.003 1.136-3.274 1.195-1.254.057-1.644.071-4.832.071zm0 6.878a5.122 5.122 0 1 0 0 10.244 5.122 5.122 0 0 0 0-10.244zm0 8.878a3.756 3.756 0 1 1 0-7.512 3.756 3.756 0 0 1 0 7.512zm6.22-9.591c.547 0 .989-.444.989-.989 0-.546-.444-.988-.989-.988-.546 0-.989.444-.989.988 0 .545.444.989.989.989z"></path>
  </svg>
 ), */



 warningLogo: (
  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
   <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>
  </svg>
 ),
 internet: (
  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0a12 12 0 0 0-9.26 19.64C9.91 28.29 24 23.21 24 12A12 12 0 0 0 12 0zm8.39 17.44A11.82 11.82 0 0 0 16.83 15a27.47 27.47 0 0 0 0-6.08 11.82 11.82 0 0 0 3.56-2.4 10 10 0 0 1 0 10.92zm-4.78 3.87c-1 .4.16.2.95-4.21a10 10 0 0 1 2.58 1.9 9.81 9.81 0 0 1-3.53 2.31zm-3.68.69c-.75-.1-2-1.94-2.58-5.65a10.35 10.35 0 0 1 5.3 0c-.24 1.48-1.22 5.65-2.72 5.65zm-3.54-.69A9.9 9.9 0 0 1 4.86 19a10 10 0 0 1 2.58-1.9c.81 4.51 2.02 4.63.95 4.21zm0-18.64c.86-.33-.25 0-1 4.23A10 10 0 0 1 4.86 5a9.79 9.79 0 0 1 3.58-2.33zm7.12 0A9.87 9.87 0 0 1 19.14 5a10 10 0 0 1-2.58 1.9c-.8-4.46-1.97-4.61-1-4.23zm-6.4 11.69a25.66 25.66 0 0 1 0-4.72 11.78 11.78 0 0 0 5.78 0 24.81 24.81 0 0 1 0 4.72 12.28 12.28 0 0 0-5.78 0zM11.91 2c1.51 0 2.5 4.16 2.74 5.65a10.35 10.35 0 0 1-5.3 0C10 4 11.17 2.12 11.91 2zm-8.3 4.56A11.82 11.82 0 0 0 7.17 9a27.47 27.47 0 0 0 0 6.08 11.82 11.82 0 0 0-3.56 2.4 10 10 0 0 1 0-10.92z" /></svg>
 ),
};

/* for more svg icon visit https://www.reshot.com/ */


export const testimonials = [
 {
  icon: assets.stanImage,
  name: ' Stanslaus Wekesa',
  title: 'student',
  description: 'Morris Mulandi is a great developer, I have worked with him on a project and he is very good at what he does. I would recommend him to anyone looking for a developer.',
  link: {
   facebook: 'https://facebook.com/',
   github: 'https://github.com/',
   instagram: 'https://instagram.com/',
   internet: 'https://google.com/',
  },
  socialIconsThis: [socialIcons.facebook, socialIcons.github, socialIcons.instagram, socialIcons.internet],
 },

]




export const workData = [
 {
  title: 'A digital clock',
  description: 'A lightweight digital clock displaying the current time synced with the device\'s local time',
  bgImage: '/digital-clock-project.png',
  link: '',
 },
 {
  title: 'Build a blog page',
  description: 'In progress. A blog website',
  bgImage: '/animation-blog-project.png',
  link: 'https://111morris.github.io/animation/blog/blog.html',
 },
 {
  title: 'Build a website for an organization',
  description: 'In progress. An organization website',
  bgImage: '/animation-website-project.png',
  link: 'https://111morris.github.io/animation/',
 },
 {
  title: 'A number conversion system',
  description: 'converts different number systems',
  bgImage: '/number-systems-project.png',
  link: 'https://111morris.github.io/number-system-updated/',
 }, {
  title: 'Build a quize game app',
  description: 'A quiz game app',
  bgImage: '/quiz-game-project.png',
  link: 'https://111morris.github.io/quiz-game/',
 }
]