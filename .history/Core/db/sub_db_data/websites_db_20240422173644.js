import { embedCustomLinks } from "../../utils/utils";

export const websitesDb = [
  {
    projectName: "The Portfolio",
    projectTagLine: "a simple yet elegant showcase of my work.",

    link: "https://hammadtayyab.vercel.app/",

    imageLink: "/images/websites/my_portfolio.png",

    info: "The main objective was to make a simple yet elegant Portfolio, which is easy to interact with and provides info in a comprehensive way.",

    role: ["Data Analyst", "Designer", "Developer", "Maintainer"],

    techStack: [
      "NextJs",
      "React",
      "TypeScript",
      "Tailwind",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "Vercel",
    ],
  },
  {
    projectName: "Mess Menu",
    projectTagLine: "a food menu for the hostel mess.",

    link: "https://messmenu.vercel.app/",

    imageLink: "/images/websites/mess_menu.png",

    info: "We developed a digital menu system for hostel dining, simplifying the process for students. Our interface showcases monthly menus, with dishes chosen through community voting. Initially conceived as part of a friend's final year project, our focus on user-friendliness and functionality drove the development process.",

    role: ["Data Analyst", "Designer", "Developer", "Maintainer"],

    techStack: [
      "NextJs",
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "Vercel",
      "Firebase",
      "Firebase Auth",
    ],
  },
  {
    projectName: "Islamic Dev Repo",
    projectTagLine: "a repository of authentic Islamic data for developers.",

    link: "https://islamic-dev-repo.vercel.app/",

    imageLink: "/images/websites/islamic_dev_repo.png",

    info: "Aimed to provide developers with authentic Islamic data that's compatible across multiple devices. It's a curated collection of the most reliable Islamic information.",

    role: ["Data Analyst", "Designer", "Developer", "Maintainer"],

    techStack: [
      "NextJs",
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "Vercel",
      "Python",
    ],
  },
  {
    projectName: "Arabic Courses",
    projectTagLine: "A platform to watch the best Madina Arabic course online.",

    link: "https://arabiccourses.vercel.app/",

    imageLink: "/images/websites/arabic_courses.png",

    info: `Our primary goal was to establish a platform for this most popular Madina Arabic course, enabling users to seamlessly stream videos from the cloud while keeping track of their progress. Initially, these videos were solely accessible for download. You can explore them further at ${embedCustomLinks(
      {
        link: "https://abdurrahman.org/arabic-learning/dvds/",
        title: "AbdurRahman.Org",
      }
    )}.<br/><br/>Arabic Courses eradicated the need for downloads, providing users with a smooth experience at their convenience.`,

    role: ["Data Analyst", "Designer", "Developer", "Maintainer"],

    techStack: [
      "NextJs",
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "Vercel",
      "Firebase",
      "Firebase Auth",
    ],
  },
];
