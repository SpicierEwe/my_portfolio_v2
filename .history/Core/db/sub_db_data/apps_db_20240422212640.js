import { embedCustomLinks } from "../../utils/utils";

export const appsDb = [
  {
    projectId: "",
    projectName: "al Qur'an",
    projectTagLine: "Everthing about Qur'an in just one app.",

    link: "https://play.google.com/store/apps/details?id=com.spicierewe.al_quran",

    imageLink: "/images/apps/al_quran.png",

    info: `This app is a complete Qur'an app for all the muslims around the world, consting of the majority language translations avaialble, tafseer, 49+ reciters & translators, and much more. All the Qur'anic data is from ${embedCustomLinks(
      { link: "https://quran.com", title: "quran.com" }
    )}.`,

    roles: ["Data Analyst", "Designer", "Developer", "Maintainer"],

    techStack: ["Flutter", "Dart", "Git", "Adobe XD"],

    platforms: ["Android"],
  },
  {
    projectName: "Riddle Me",
    projectTagLine: "Riddle Me: Unraveling Minds, One Clue at a Time!",

    link: "https://play.google.com/store/apps/details?id=com.spicierewe.RiddleMe",

    imageLink: "/images/apps/riddle_me.png",

    info: "Riddle Me is a fun and challenging game that will test your wit and logic. It is a game that will make you think outside the box and challenge your brain. It is a game that will make you think outside the box and challenge your brain.",

    roles: ["Data Analyst", "Designer", "Developer", "Maintainer"],

    techStack: ["Flutter", "Dart", "Git", "Adobe XD"],

    platforms: ["Android"],
  },
  {
    projectName: "Food Deals",
    projectTagLine: "One place for all Cravings.",

    link: "https://play.google.com/store/apps/details?id=com.spicierewe.food_deals",

    imageLink: "/images/apps/food_deals.png",

    info: "Food Deals is a simple apps which allows you to find the best deals on food accross your favourite food delivery apps.",

    roles: ["Data Analyst", "Designer", "Developer", "Maintainer"],

    techStack: ["Flutter", "Dart", "Git", "Adobe XD"],

    platforms: ["Android"],
  },
  {
    projectName: "ahdith Collection",
    projectTagLine:
      "The hadiths of the Prophet Muhammad (pbuh). at your fingertips.",

    link: "https://play.google.com/store/apps/details?id=com.spicierewe.ahadith_collection",

    imageLink: "/images/apps/ahadith_collection.png",

    info: `Hadith Collection is a collection of authentic hadiths of the Prophet Muhammad (pbuh). The app contains all the available hadiths from various authentic hadith books. The Arabic & english data is from ${embedCustomLinks(
      { link: "https://sunnah.com", title: "sunnah.com" }
    )} and urdu data is from ${embedCustomLinks({
      link: "https://github.com/pakjiddat/islam-companion-web-api",
      title: "islam-companion-web-api (pakjiddat)",
    })}.`,

    roles: ["Data Analyst", "Designer", "Developer", "Maintainer"],

    techStack: ["Flutter", "Dart", "Git", "Adobe XD"],

    platforms: ["Android"],
  },
  {
    projectName: "Study Practice",
    projectTagLine: "Practice makes perfect.",

    link: "https://play.google.com/store/apps/details?id=com.spicierewe.study_practice",

    imageLink: "/images/apps/study_practice.png",

    info: "Study Practice is an app developed to help students aspiring for NEET/JEE. It provides a platform for students to practice previous years question papers, take tests, and track their progress in real time, including all the required official study material.",

    roles: ["Data Analyst", "Designer", "Developer", "Maintainer"],

    techStack: ["Flutter", "Dart", "Git", "Adobe XD"],

    platforms: ["Android"],
  },
];
