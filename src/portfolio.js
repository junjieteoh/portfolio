/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Teoh Jun Jie's Portfolio",
  description:
    "An independent, highly-motivated entrepreneur who is always excited to spend time to learn new things about the world.",
  og: {
    title: "Teoh Jun Jie Portfolio",
    type: "website",
    url: "http://junjieteoh.com/",
  },
};

//Home Page
const greeting = {
  title: "Teoh Jun Jie",
  logo_name: "junjieteoh",
  nickname: "Y3 CS & Math @ NUS",
  subTitle:
    "An independent, highly-motivated entrepreneur who is always excited to spend time to learn new things about the world.",
  resumeLink:
    "https://drive.google.com/file/d/1zFLilsY3dk7WQoUU9nyHZlR_4Rq_wVIF/view?usp=share_link",
  portfolio_repository:
    "https://drive.google.com/file/d/1K4DA1usAMLYB9XkJOnBrGu2itg5zDqq2/view?usp=share_link",
  githubProfile: "https://github.com/junjieteoh",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"
  {
    name: "LinkedIn",
    link:
      "https://www.linkedin.com/in/teoh-jun-jie-84682711b/?originalSubdomain=sg",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Github",
    link: "https://github.com/junjieteoh",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Gitlab",
    link: "https://gitlab.com/junjieteoh1",
    fontAwesomeIcon: "fa-gitlab",
    backgroundColor: "#FC6D26",
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:teohjj@comp.nus.edu",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Ximplear",
    link: "http://www.ximplear.com",
    fontAwesomeIcon: "fa-xing", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#3399FF", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing mobile applications using React Native",
        "⚡ Creating application backend in Node, Express & Flask, Python, Firebase",
        "⚡ Building responsive website front end using React",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
      ],
    },
    {
      title: "Algorithms",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Designed and implemented efficient algorithms for solving problems in fields of machine learning and computer vision.",
        "⚡ Experience implementing local search algorithm for famous NP hard problems like Travelling Salesman Problem and Set Cover Problem.",
        "⚡ Familiar with technical and mathematical concepts related game theory, optimization algorithm and complexity theory.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikit-learn",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#336791",
          },
        },
      ],
    },
    {
      title: "Computer Simulation & Machine Learning",
      fileName: "DesignImg",
      skills: [
        "⚡ Implemented agent-based simulation model using Python to analyse complex interactions during teaching",
        "⚡ Experienced in statistical analysis and experiment design for validating and analyzing the results of simulation experiments",
        "⚡ Familiar with using Snakemake to automate and parallelize simulation tasks.",
        "⚡ Experience of working with Computer Vision projects and quantitative modelling for dynamic forecasting and time series analysis for stocks",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Snakemake",
          fontAwesomeClassname: "simple-icons:squarespace",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Teach",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experienced NUS School of Computing teaching assistant who taught over 10 tutorial classes (>220 undergraduates) in 5 modules",
        "⚡ Familiar with the Mathematics Olympiad syllabus up to Secondary 4 (APMOPS, SMO Junior, SMO Senior)",
        "⚡ Familiar with GCE A level H2 Mathemtatics, H2 Further Mathematics and H3 Mathematics curriculum.",
      ],
      softwareSkills: [],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Kattis",
      logo_path: "judge.png",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://open.kattis.com/users/teoh-jun-jie",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/junjieteoh",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/junjieteoh",
    },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};
// {
//   /* <a href='https://www.google.com' style='color: white;'>NUS Venture Initiation Programme</a> */
// }
const degrees = {
  degrees: [
    {
      title: "National Univeristy of Singpaore",
      subtitle: [
        "B.Comp. in Computer Science & B.Sci in Applied Mathematics (<a href='https://www.comp.nus.edu.sg/cugresource/per-cohort/ddp-cs-maths/' style='color: white;'>Double Degree</a>)",
      ],
      logo_path: "nus.png",
      alt_name: "NUS",
      duration: "2020 - Present",
      descriptions: [
        "⚡ I am currently persuing 4 focus area in Computer Science, namely " +
          "<a href='https://www.comp.nus.edu.sg/programmes/ug/focus/algo/' style='color: white;'> Algorithms & Theory</a>, " +
          "<a href='https://www.comp.nus.edu.sg/programmes/ug/focus/ai/' style='color: white;'> Artificial Intelligence</a>, " +
          "<a href='https://www.comp.nus.edu.sg/programmes/ug/focus/graphics/' style='color: white;'> Computer Graphics and Games</a>, " +
          " and <a href='https://www.comp.nus.edu.sg/programmes/ug/focus/retrieval/' style='color: white;'> Multimedia Information Retreival</a>",

        "⚡ For Mathematics, I am currently persuing a specialisation in <a href='https://www.math.nus.edu.sg/wp-content/uploads/sites/4/2019/11/PlanMMDA1920.pdf' style='color: white;'>Mathematical Modelling & Data Analytics</a> ",
        "⚡ In 2022, I was selected as one of the winners of the <a href='https://www.comp.nus.edu.sg/entrepreneurship/awards/iepsocwinners/' style='color: white;'>NUS Venture Initiation Programme</a> with my startup Ximplear, and we are currently incubated at NUS i3 with <a href='https://www.comp.nus.edu.sg/entrepreneurship/furnace/start/' style='color: white;'>NUS Furnace</a>",
        "⚡ Apart from this, I have done courses on Computer Networks, Database Systems and Software Engineering.",
        "⚡ I am a recipient of the ASEAN Merit Scholarship.",
        "\n",
        "CAP: 4.59/5.00 (CS) 4.68/5.00 (Math)",
      ],
      website_link: "https://www.comp.nus.edu.sg/",
    },
    {
      title: "Hwa Chong Institution",
      subtitle:
        "Singapore-Cambridge General Certificate of Education Advanced Level",
      logo_path: "hci.png",
      alt_name: "NUS",
      duration: "2014 - 2019",
      descriptions: [
        "⚡ I obtained 8 distinctions (including Higher Chinese and H3 Mathematics) for GCE A level 2019.",
        "⚡ I was awarded the HCI Diploma with Distinction in 2019, Outstanding Student Award in 2017 ",
        "⚡ Two times Gold medalists and two times Silver medalists for the Singapore Mathematical Olympiad (SMO)",
        "⚡ Gold medalist and recipient of the Foo Kean Pew Memorial Prize With Excellent Presentation, the highest level of achievement, in the Senior Section of Singapore Mathematics Project Festival (SMPF), with paper 'The Congruency of the Iso-Peri-Area Triangles' ",
        "⚡ I was a recipient of the ASEAN Scholarship",
      ],
      website_link: "https://www.hci.edu.sg/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Programmer, Teacher and Media Freelancer",
  description:
    "I have worked with some companies as Software Engineer Interns and Programmer. Besides doing programming work, I also enjoy teaching and I am a media enthuaist.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Programmer",
      experiences: [
        {
          title: "Algorithm Developer",
          company: "NUS Department of Statistics and Data Science",
          company_url: "https://www.stat.nus.edu.sg/",
          logo_path: "nus.png",
          duration: "December 2022 - PRESENT",
          location: "Singapore",
          description:
            "I am in charge of revamping the current process of allocating modules to professors for teaching. I have used Flask to create a portal, and developed multiple server-side Pythons scripts to compute assignment and generating results report.",
          color: "#0879bf",
        },
        {
          title: "Software Engineering Intern",
          company: "Solve Education!",
          company_url: "https://solveeducation.org/",
          logo_path: "se.png",
          duration: "May 2022 - August 2022",
          location: "Singapore",
          description:
            "I am in charge of to develop a Virtual Classroom Simulation framework, which is a agent-based model to simulate teaching. This is used to do benchmarking of current m-learning policies. I have used Python to develop this framework and Snakemake automate build process." +
            "<br> <br> See my work <a href='https://tinyurl.com/SEinternwork' style='color: white;'>here</a>.",
          color: "#9b1578",
        },
        {
          title: "Co-Founder, Software Engineer",
          company: "Ximplear",
          company_url: "https://www.ximplear.com/",
          logo_path: "ximplear.png",
          duration: "Jan 2022 - PRESENT",
          location: "Singapore ",
          description:
            "Ximplear sees the high hardware costs that can act as a financial barrier for many indoor positioning system applications. Our vision for Ximplear is to use data from a variety of IoT sensors, such as CCTV cameras, as the primary source of accessible and cost-effective analytics for retail and mall environments." +
            " We have developed a software that involved the use of React TypeScript as frontend, Python and Firebase as backend that is targeted towards retail analytics." +
            "<br> <br> See website <a href='https://ximplear.com' style='color: white;'>here</a>. " +
            "See our VIP pitch deck <a href='https://tinyurl.com/ximplearslides' style='color: white;'>here</a>. " +
            "See our retail solutions <a href='https://drive.google.com/file/d/1fVvy1gLOq-Pn7i64iebAzWgBW3S-kThF/view?usp=sharing' style='color: white;'>here</a>.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Teachings",
      experiences: [
        {
          title: "Teaching Assistant (Fall 2022)",
          company: "National University of Singapore, School of Computing",
          company_url: "https://www.comp.nus.edu.sg/",
          logo_path: "nus.png",
          duration: "Aug 2022 - Dec 2022",
          location: "Singapore",
          description:
            "<b>CS2100 - Computer Organisation</b>" +
            "<br> I have tutored four classes of 75 students in Fall 2022 with a teaching rating of 4.6/5.0 (<a href='https://drive.google.com/file/d/1fVvy1gLOq-Pn7i64iebAzWgBW3S-kThF/view?usp=sharing' style='color: white;'>report</a>)." +
            "<br>CS2100 covers topics such as data representation systems, combinational and sequential circuit design techniques, assembly language, processor execution cycles, pipelining, memory hierarchy and input/output systems." +
            "<br><br>" +
            "<b>CS1231S - Discrete Structure</b>" +
            "<br> I have tutored two classes of 39 students in Fall 2022 with a teaching rating of 4.7/5.0 (<a href='https://drive.google.com/file/d/1fVvy1gLOq-Pn7i64iebAzWgBW3S-kThF/view?usp=sharing' style='color: white;'>report</a>)." +
            "<br> CS1231S covers topics such as Logic and proof techniques, Relations and Functions, Mathematical formulation of data models (linear model, trees, graphs), Counting and Combinatoric.",
          color: "#ee3c26",
        },
        {
          title: "Teaching Assistant (Summer 2022)",
          company: "National University of Singapore, School of Computing",
          company_url: "https://www.comp.nus.edu.sg/",
          logo_path: "nus.png",
          duration: "Jan 2022 - May 2022",
          location: "Singapore",
          description:
            "<b>CS2040S - Data Structure and Algorithms</b>" +
            "<br> I have tutored one class of 15 students in Summer 2022 with a teaching rating of 4.3/5.0 (<a href='https://drive.google.com/file/d/1fVvy1gLOq-Pn7i64iebAzWgBW3S-kThF/view?usp=sharing' style='color: white;'>report</a>)." +
            "<br>CS2040S covers topics such as Basic data structures (linked lists, stacks, queues, hash tables, binary heaps, trees, and graphs), searching and sorting algorithms, and basic analysis of algorithms." +
            "<br><br>" +
            "<b>TIC1201 - Discrete Structure</b>" +
            "<br> I have tutored one class of 23 students in Summer 2022 with a teaching rating of 4.3/5.0 (<a href='https://drive.google.com/file/d/1fVvy1gLOq-Pn7i64iebAzWgBW3S-kThF/view?usp=sharing' style='color: white;'>report</a>).",
          // "<br> TIC1201 covers topics such as Logic and proof techniques, Relations and Functions, Mathematical formulation of data models (linear model, trees, graphs), Counting and Combinatoric.",
          color: "#ee3c26",
        },
        {
          title: "Teaching Assistant (Fall 2021)",
          company: "National University of Singapore, School of Computing",
          company_url: "https://www.comp.nus.edu.sg/",
          logo_path: "nus.png",
          duration: "Aug 2021 - Dec 2021",
          location: "Singapore",
          description:
            "<b>CS1101S - Programming Methodology</b>" +
            "<br> I have tutored one class of 8 students in Fall 2021 with a teaching rating of 4.6/5.0 (<a href='https://drive.google.com/file/d/1fVvy1gLOq-Pn7i64iebAzWgBW3S-kThF/view?usp=sharing' style='color: white;'>report</a>)." +
            "<br>CS1101S covers topics such as Functional Abstraction, Recursion, Higher-order Functions, Data Abstraction, Algorithmic Strategies, State Mutation, Loops and Arrays, Sorting and Searching." +
            "<br><br>" +
            "<b>CS1231S - Discrete Structure</b>" +
            "<br> I have tutored one class of 17 students in Fall 2021 with a teaching rating of 4.7/5.0 (<a href='https://drive.google.com/file/d/1fVvy1gLOq-Pn7i64iebAzWgBW3S-kThF/view?usp=sharing' style='color: white;'>report</a>).",
          // "<br> CS1231S covers topics such as Logic and proof techniques, Relations and Functions, Mathematical formulation of data models (linear model, trees, graphs), Counting and Combinatoric.",
          color: "#ee3c26",
        },
        {
          title: "Freelance Tutor",
          company: "",
          company_url: "",
          logo_path: "class.png",
          duration: "Nov 2013 - PRESENT",
          location: "",
          description:
            "I have experiences teaching primary school level and secondary school level Mathematics Olympiad, H2 Mathematics and university level computer science.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Media",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8320758513",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
