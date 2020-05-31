// TODO: update google analytics
module.exports = {
  siteTitle: "Rohith Srivathsav | Software Engineer",
  siteDescription:
    "I am a software engineer based in India who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.",
  siteKeywords:
    "Rohith Srivathsav, Rohith, Srivathsav, roheat, software engineer, front-end engineer, web developer, javascript",
  siteUrl: "https://roheat.com",
  siteLanguage: "en_US",
  googleAnalyticsID: "UA-45666519-2",
  googleVerification: "DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk",
  name: "Rohith Srivathsav",
  location: "Mumbai, India",
  email: "rohithsrivathsav@gmail.com",
  github: "https://github.com/roheat",
  twitterHandle: "@roheatdotcom",
  socialMedia: [
    {
      name: "GitHub",
      url: "https://github.com/roheat",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/rohith-srivathsav/",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/roheatdotcom",
    },
    {
      name: "Devpost",
      url: "https://devpost.com/rohithsrivathsav",
    },
  ],

  navLinks: [
    {
      name: "About",
      url: "/#about",
    },
    {
      name: "Experience",
      url: "/#jobs",
    },
    {
      name: "Work",
      url: "/#projects",
    },
    {
      name: "Contact",
      url: "/#contact",
    },
    {
      name: "Blog",
      url: "/blog",
    },
  ],

  navHeight: 100,

  colors: {
    green: "#64ffda",
    navy: "#0a192f",
    darkNavy: "#020c1b",
  },

  srConfig: (delay = 200) => ({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
