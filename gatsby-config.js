module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Sunwoo Kim',
    // Main Site Title
    title: `Sunwoo Kim | Oregon State University Student`,
    // Description that goes under your name in main bio
    //description: `Lorem ipsum dolor sit amet consectetur adipisicing elit, ipsum.`,
    // Optional: Twitter account handle
    author: `@AB84`,
    // Optional: Github account URL
    github: `https://github.com/SunwooQKim`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/sunwoo-kim-314699166/`,
    // Content of the About Me section
    about: `I am currently an undergraduate student in the College of Engineering at Oregon State University. I am pursuing a degree in computer science, with a degree focus on Business and Entrepreneurship. 
In the future, I hope to work on a cybersecurity team, where I can collaborate with other engineering and design secure computer systems. As I'm completing my degrees in engineering, I am currently looking for internship opportunities where I can start my professional career in cybersecurity.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Security Team Competition',
        description:
          'evaluates student project vulnerabilities and threats to identify the risks it faces. Creating comprehensive recommendations for mitigating those risks',
        link: '',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'U.S West Point',
        description: 'Research Analyst, June 2020 - September 2020',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python and React',
      },
      {
        name: 'Databases',
        description: 'MongoDB and MySQL',
      },
      {
        name: 'Other',
        description:
          'Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
    
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
