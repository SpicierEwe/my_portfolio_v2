export const uxDb = [
  {
    directory_code: "gr",
    follow_link: "/ux/case_study/the_german_restaurant",
    projectName: "The German Restaurant",
    projectId: "43545nj-45-adsnc-43ef",
    projectTagLine: "Project 1 description",
    info: `The German Restaurant is the most popular German Cuisine restaurant in USA. It has built its reputation since a very long time because of the most authentic taste and preparation methods of the most incredible & finest dishes you’ll ever taste.`,

    imageLink: "/images/case_study/gr/product_image.svg",
    tags: ["ux", "mobile"],
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
    image_config: {
      image_link: "/images/gr.svg",
      background_color: "black",
      alt: "The German Restaurnt Logo",
    },
    case_study: {
      image_links: {
        hero_image: "/images/case_study/gr/gr_hero.svg",
        product_image: "/images/case_study/gr/product_image.svg",
      },

      competative_analysis: {
        overview:
          "In order to construct a concise and solid foundation for The German Restaurant, I had to venture out and see what the other prominent German Restaurants were already doing and what user goals they were not reaching. I evaluated several features deemed vital from user surveys and identified which ones The German Restaurant could capitalize on to have a leg up over other applications.<br></br>I found that only two of the four main competitors offered user profiles and data visualization for users. Even then, Stella's user profile feature is incredibly limited and their data visualization is only available at certain points throughout the year.<br></br>Others also lacked the modern UI and accessibility features that German Restaurant would have. I also found that only one out of all the competitors offered home delivery or healthy category options. Though Bavaria Gourmet did offer an iOS and Android app, it was not as well designed which caused alot of confusion.<br></br>Overall, I found that The German Restaurant had a lot of room to grow and improve upon the features that other competitors were lacking.",
        table_data: {
          competitors: [
            "Herberg's Barleywine",
            "Stella Cucina",
            "Bavaria Gourmet",
            "Bruegger's Bagels",
          ],
          analysis: [
            { user_profiles: ["No", "yes", "No", "Yes"] },
            { data_visualization: ["No", "No", "No", "no"] },
            { modern_UI: ["yes", "No", "No", "Yes"] },
            { accessibility: ["No", "yes", "No", "No"] },
            { home_delivery: ["No", "Yes", "No", "No"] },
            { healthy_category: ["No", "no", "yes", "No"] },
            { "ios_&_android": ["No", "yes", "yes", "yes"] },
          ],
        },
      },
      accent_color: "#fa7b17",
      role: "Concept, Research, Visuals",
      project_duration: "2 weeks",
      project_overview: {
        my_role:
          "UX designer designing an app for German Restaurant from conception to delivery.",
        responsibilities:
          "Conducting interviews, paper and digital wireframing, low and high-fidelity prototyping, conducting usability studies, accounting for accessibility, and iterating on designs.",
        the_product:
          "German Restaurant is the most popular German Cuisine restaurant in USA. It has built its reputation since a very long time because of the most authentic taste and preparation methods of the most incredible & finest dishes you’ll ever taste.",
        the_problem: [
          "Anyone who is busy and cannot prepare a healthy meal.",
          "Anyone who wants authentic German Cuisine but want to eat it from the comfort of their home.",

          "Simple, clean and straight forward UI that is easy to use and understand.",
        ],
        the_goal: [
          "Design an app for German Restaurant that allows users to easily order and pick up or get the dishes delivered to the comfort of their home. The app should be accessible to all users and should be easy to use and understand with minimal efforts.",
        ],
      },
      user_research: {
        summary: [
          "I conducted interviews and created empathy maps understand the users I’m designing for and their needs. A primary user group identified through research was working adults who don’t have time to cook healthy meals and don’t want to compromise with their health with Fast Food.<br></br>This user group confirmed initial assumptions about German Restaurant customers, but research also revealed that time was not the only factor limiting users from cooking at home. Other user problems included obligations, interests, or challenges that make it difficult to get groceries for cooking or go to in-person.",
        ],

        pain_points: [
          {
            Time: [
              "Working adults are too busy to spend time on meal preparation.",
              "The checkout flows are lengthy and frustrating.",
            ],
            Accessibility: [
              "Platforms for ordering food are not equipped with assistive technologies.",
              "No option to change the app language.",
            ],
            Interface: [
              "Text-heavy menus in apps are often difficult to read and order from and caused severe eye fatigue.",
              "The filter options are very complex and confusing to use.",
            ],
          },
        ],
        personas: [
          {
            user_info: {
              user_image:
                "/images/case_study/gr/persona_images/female_image.jpg",
              user_name: "Rose",
              user_age: "23",
              user_family: "Un-Married",
              user_occupation: "Student, University of New York",
              user_location: "New York, USA",
            },

            user_problem_statement:
              "Wants to try the new German cuisine but doesn't know how to cook where as good German restaurants are really far off.",
            user_dream: "I want to be a psychologist.",
            user_goals: [
              "Wants to try the German cuisine.",
              "wants to become a social media influencer.",
              "Wants to expore different cuisines.",
            ],
            user_frustrations: [
              "Finding authentic German cuisine is tough.",
              "Good German restaurants have no home delivery option.",
              "Could'nt match the authentic taste when self cooked German Dishes.",
            ],
            user_story:
              "Mia is a student and loves to explore different cultures and cousines who wants to try the new German cuisine but doesn't know how to cook where as all the good German restaurants are really far off so  she wants it to be delivered to the comfort of her home. She also wants to become a social media influencer.",
          },
          {
            user_info: {
              user_image: "/images/case_study/gr/persona_images/male_image.jpg",
              user_name: "Jason",
              user_age: "35",
              user_family: "Un-Married",
              user_occupation: "CEO, Track Agency",
              user_location: "New York, USA",
            },

            user_problem_statement:
              "Jason is a CEO who needs quick access to healthy meals because of very busy work schedule.",
            user_dream: "i want to do a word tour one day",
            user_goals: [
              "Wants to make his business bloom and take to greater heights.",
              "Wants to eat quick and healthy",
              "Wants to do a world Tour.",
              "Wants to eat  German cuisine as its light and healthy.",
            ],
            user_frustrations: [
              "Finding tasty and healthy food is tough and time consuming.",
              "Favourites full week menu option not available any where.",
              "No time to figure out what to eat every day.",
            ],
            user_story:
              "Json doesn't have time to cook food for himself because of very busy schedule and long and tiring business meetings, and also doesnt want to compromise his health with fast food. So he wants something where he can have an healthy entire week meal plan in one place and wants it to autimatically be jumbled every following week.",
          },
        ],
      },
      wire_frames: {
        paper_wireframes: {
          summary:
            "Taking the time to draft iterations of each screen of the app on paper ensured that the elements made it to digital wireframes would be well-suitedto address user pain points. For the home screen, I prioritized a <b>quick and easy ordering process</b> to help users save time.",
          wireframes_image_link:
            "/images/case_study/gr/wire_frames_images/paper_wire_frames.png",
        },
        digital_wireframes: {
          summary:
            "After selecting the best on paper wireframes i shifted to converting them to digital wireframes in order to get a better and more refined look of the design.",
          wireframes_image_link: [
            "/images/case_study/gr/wire_frames_images/digital_wire_frames.svg",
          ],
        },
      },

      prototypes: {
        lo_fi_prototype: {
          summary:
            "Taking the time to draft iterations of each screen of the app on paper ensured that the elements made it to digital wireframes would be well-suited to address user pain points.",
          prototype_image_link: [
            "/images/case_study/gr/prototypes/lo_fi_prototype.png",
          ],
        },
        hi_fi_prototype: {
          summary:
            "The final high-fidelity prototype presented cleaner user flows for The German Restaurant which helped to gain more information of how the The German Restaurant app will be in the hands of the users.",
          prototype_image_link: [
            "/images/case_study/gr/prototypes/hi_fi_prototype.png",
          ],
        },
      },
      mockups: [
        {
          phone_image_link: [
            "/images/case_study/gr/mockups/mockup_image_1.svg",
            "/images/case_study/gr/mockups/mockup_image_2.svg",
            "/images/case_study/gr/mockups/mockup_image_3.svg",
            "/images/case_study/gr/mockups/mockup_image_4.svg",
            "/images/case_study/gr/mockups/mockup_image_5.svg",
            "/images/case_study/gr/mockups/mockup_image_6.svg",
            "/images/case_study/gr/mockups/mockup_image_7.svg",
            "/images/case_study/gr/mockups/mockup_image_8.svg",
          ],
        },
      ],

      take_aways:
        "Being a foodie myself, working on The German Restaurant was incredibly rewarding. I got to experiment with some of the new Figma features, and narrow down my design process, And also got a lot of knowledge about the German Cousine. Working on this project taught me alot, building it from the ground up was a very wonderfull and fun experience.",
    },
  },
];
