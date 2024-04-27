import { embedCustomLinks } from "../../utils/utils";

export const appsDb: AppDb[] = [
  {
    projectId: "38384ae3-5586-40be-b025-c9c3ad1094ef",
    projectName: "al Qur'an",
    projectTagLine: "All about the Qur'an in one app.",

    link: "https://play.google.com/store/apps/details?id=com.spicierewe.al_quran",

    imageLink: "/images/apps/al_quran.png",

    info: `The "al Qur'an" app offers a comprehensive experience of the Qur'an for users around the world. It includes a wide range of translations in various languages, tafseer (exegesis), access to over 49 reciters and translators, and much more. All data is sourced from the reliable platform ${embedCustomLinks(
      { link: "https://quran.com", title: "quran.com" }
    )}.`,

    roles: [
      "Data Analyst",
      "Designer",
      "Developer",
      "Maintainer",
      "Product Manager",
      "Tester/Quality Assurance",
      "Researcher",
      "DevOps Engineer",
      "Technical Writer",
      "Project Manager",
    ],

    techStack: ["Flutter", "Dart", "Git", "Adobe XD"],

    platforms: ["Android"],
  },
  {
    projectId: "1eeb435f-acbd-41e8-b826-440959bb6a57",
    projectName: "Riddle Me",
    projectTagLine: "Riddle Me: Unraveling Minds, One Clue at a Time!",

    link: "https://play.google.com/store/apps/details?id=com.spicierewe.RiddleMe",

    imageLink: "/images/apps/riddle_me.png",

    info: "Riddle Me is an engaging and challenging game designed to test your intelligence and problem-solving skills. This game stimulates creative thinking and encourages you to approach problems from different perspectives.",

    roles: [
      "Data Analyst",
      "Designer",
      "Developer",
      "Maintainer",
      "Product Manager",
      "Tester/Quality Assurance",
      "Researcher",
      "DevOps Engineer",
      "Technical Writer",
      "Project Manager",
    ],

    techStack: ["Flutter", "Dart", "Git", "Adobe XD"],

    platforms: ["Android"],
  },
  {
    projectId: "2ae7005c-16e2-4fe5-b7b0-20f5f826321e",
    projectName: "Food Deals",
    projectTagLine: "Find the best food deals at your fingertips.",

    link: "https://play.google.com/store/apps/details?id=com.spicierewe.food_deals",

    imageLink: "/images/apps/food_deals.png",

    info: "Food Deals is an app that helps users discover the best offers and discounts on their favorite food delivery services. Save money and enjoy your favorite meals by comparing prices across different platforms.",

    roles: [
      "Data Analyst",
      "Designer",
      "Developer",
      "Maintainer",
      "Product Manager",
      "Tester/Quality Assurance",
      "Researcher",
      "DevOps Engineer",
      "Technical Writer",
      "Project Manager",
    ],

    techStack: ["Flutter", "Dart", "Git", "Adobe XD"],

    platforms: ["Android"],
  },
  {
    projectId: "627de94f-59b4-4f85-bcf4-df6fbf22714e",
    projectName: "Hadith Collection",
    projectTagLine: "Access authentic hadiths of the Prophet Muhammad (pbuh).",

    link: "https://play.google.com/store/apps/details?id=com.spicierewe.ahadith_collection",

    imageLink: "/images/apps/ahadith_collection.png",

    info: `The "Hadith Collection" app provides a comprehensive and authentic collection of hadiths of the Prophet Muhammad (pbuh). It includes data from various reputable sources such as ${embedCustomLinks(
      { link: "https://sunnah.com", title: "sunnah.com" }
    )} for Arabic and English, and ${embedCustomLinks({
      link: "https://github.com/pakjiddat/islam-companion-web-api",
      title: "islam-companion-web-api",
    })} for Urdu data.`,

    roles: [
      "Data Analyst",
      "Designer",
      "Developer",
      "Maintainer",
      "Product Manager",
      "Tester/Quality Assurance",
      "Researcher",
      "DevOps Engineer",
      "Technical Writer",
      "Project Manager",
    ],

    techStack: ["Flutter", "Dart", "Git", "Adobe XD"],

    platforms: ["Android"],
  },
  {
    projectId: "7468bdef-5b24-454e-ae99-dd0a558441d7",
    projectName: "Study Practice",
    projectTagLine: "Practice makes perfect.",

    link: "https://play.google.com/store/apps/details?id=com.spicierewe.study_practice",

    imageLink: "/images/apps/study_practice.png",

    info: "Study Practice is a study companion app designed to help students prepare for competitive exams such as NEET and JEE. The app offers past exam questions, mock tests, and real-time progress tracking along with official study material.",

    roles: [
      "Data Analyst",
      "Designer",
      "Developer",
      "Maintainer",
      "Product Manager",
      "Tester/Quality Assurance",
      "Researcher",
      "DevOps Engineer",
      "Technical Writer",
      "Project Manager",
    ],

    techStack: ["Flutter", "Dart", "Git", "Adobe XD"],

    platforms: ["Android"],
  },
];
