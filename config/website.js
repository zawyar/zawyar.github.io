module.exports = {
  pathPrefix: `/`, // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"
  firstName:"Zawyar",
  lastName:"Ur Rehman",
  siteTitle: `Zawyar Ur Rehman`, // Navigation and Site Title
  siteTitleAlt: `Zawyar Ur Rehman - Full Stack Software Engineer and DevOps Engineer`, // Alternative Site title for SEO
  siteTitleShort: `Zawyar Ur Rehman`, // short_name for manifest
  siteHeadline: `Full Stack Software Engineer and DevOps Engineer`, // Headline for schema.org JSONLD
  siteUrl: `https://zawyar.github.io`, // Domain of your site. No trailing slash!
  siteKeywords: [`zawyar ur rehman`, `zawyar`,'rehman', `fullstack`,`frontend`,`backend`, `software`, `engineer`, `developer`, `devops`, `portfolio`, `blog`, `python`, `javascript`, `react`],
  siteLanguage: `en`, // Language Tag on <html> element
  siteLogo: `/logo.png`, // Used for SEO and manifest
  siteDescription: `Zawyar Ur Rehman. Full-stack software engineer and DevOps engineer with a passion for using technology to solve interesting challenges and making a real world impact.`,
  author: {
    name: `Zawyar Ur Rehman`,
    bio: `Software engineer with a passion for exploring the web, and solving interesting problems.`,
    github: `https://github.com/zawyar`,
    linkedIn: `https://www.linkedin.com/in/zawyar-ur-rehman/`,
    twitter:`https://twitter.com/zawyarurrehman`
  },
  menuLinks: [
    {
      name: `Home`,
      link: `/`,
      external: false,
    },
    {
      name: `Blog`,
      link: `/blog/`,
      external: false,
    },
    {
      name: `Contact`,
      link: `/contact/`,
      external: false,
    },
  ],
  // siteFBAppID: '123456789', // Facebook App ID - Optional
  twitterUsername: `@zawyarurrehman`, // Twitter Username
  // ogSiteName: 'cara', // Facebook Site Name
  // ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: `G-7JL5K6XTJX`, // Google Analytics ID
  googleOptimizeID: `GTM-T7CCH3D9`, // Google Optimize container ID
  // Manifest and Progress color
  backgroundColor: `#23262B`,
}
