const dateString = "2000/08/06";
const birthday = +new Date(dateString);
const currentAge = ~~((Date.now() - birthday) / 31557600000);
const resumeLink = "https://drive.google.com/file/d/1rMnUHJKYQZFl9iBjLLobKjqb-tQzstdx/view";

document.addEventListener("DOMContentLoaded", function () {
    updateMetaTags(currentAge);
});

function updateMetaTags(age) {
    const metaTags = ["og:description", "twitter:description", "description"];

    metaTags.forEach((tagName) => {``
        const metaTag =
            document.querySelector(`meta[name="${tagName}"]`) ||
            document.querySelector(`meta[property="${tagName}"]`);
        if (metaTag) {
            metaTag.setAttribute(
                "content",
                `A ${age}-year-old passionate Full-Stack Developer from India.`
            );
        } else {
            console.error(`Meta tag '${tagName}' not found.`);
        }
    });
}

// About Me

const aboutMe = `
<p> I’m Aman Kumar, a Software Engineer with 3 years of experience building scalable, secure, and high-performance applications. My core expertise lies in Java, Spring Boot, Node.js, and React, with strong proficiency in REST APIs, microservices, SQL/NoSQL databases, and cloud platforms like AWS and Azure.
<br><br>
Currently, at Deloitte, I work on developing production-grade APIs, optimizing system performance under high-concurrency workloads, and implementing secure authentication and caching pipelines. I’ve also enhanced system observability and deployment consistency using Docker, CI/CD pipelines, and ELK stack monitoring, significantly improving reliability and reducing release times.
<br><br>
Beyond my professional work, I’ve built projects that reflect my curiosity and problem-solving mindset — from an AI-powered algorithm visualizer to a full-stack expense tracker with real-time analytics. These experiences have deepened my skills in both backend architecture and frontend performance optimization, while sharpening my product thinking.
<br><br>
I thrive in collaborative, fast-paced environments, take ownership of delivering high-quality code, and continuously push myself to learn and adapt. My immediate goal is to grow as a Software Development Engineer, tackling complex engineering challenges and contributing to impactful products. Long term, I aim to lead and mentor teams while driving innovation in scalable systems.
</p>

<p>
I'm available for work, <a href="mailto:amankumar786dpsdh@gmail.com" target="_blank">get in touch.</a>
<br>
My <a href="${resumeLink}" target="_blank">Resume</a>
</p>`;

// I'm Aman, a ${currentAge}-year-old Full-Stack Web Developer from India, with a robust background in building dynamic and efficient web applications. My foundation in Electronics and Communication at Birla Institute of Technology, Mesra instilled in me a strong analytical mindset and a passion for programming in C++ and JavaScript. My technical interests lie in crafting seamless user experiences and designing scalable backend systems. I have a solid understanding of Data Structures and Algorithms, coupled with practical experience in full-stack development. Over the past year, I've worked in technical delivery, honing my skills and contributing to impactful projects. My expertise spans across a wide range of technologies, including React, Node.js, Express.js, MongoDB, and cloud platforms like Azure and AWS. I've successfully architected and developed complex applications, such as an AI-powered algorithm visualizer and a full-stack financial management platform, demonstrating my ability to deliver high-quality solutions. I am a dedicated team player and individual contributor, known for my strong work ethics and collaborative spirit. Currently, I'm focused on deepening my knowledge of DSA to further enhance my problem-solving abilities. My immediate goal is to secure a challenging Software Development Engineer position in a leading company, where I can apply my skills and contribute to innovative projects. My long-term vision is to become a respected leader in the tech industry, continuously pushing the boundaries of technology.

// My self Aman, a ${age}-year-old passionate Full-Stack Web Developer from India. I am an undergraduate final year student in the Department of Electronics and Communication at the Birla Institute of Technology, Mesra.<br>My technical interest lies in programming (C++,JS), Development (Web Applications). Have prior knowledge of Data Structure & Algorithms and Full-Stack Development. 1 year of experience as a web developer in technical delivery. A great team player and individual contributor with strong work ethics, technical knowledge and collaboration skills. Enjoys being challenged and working on projects that requires me to work outside my comfort and knowledge set, as well as continuing to learn new languages, design patterns and development techniques. <br>Currently I am enhancing my knowledge in DSA. My short term goal is to get a job in a reputed company as a Software Developer Engineer. And, my Long term goal is to become a more responsible and knowledgeable personality and in a respectable position in my company. When not working or futzing around with code, I study how to escape from College.

// Experience
const experience = [
    {
        title: "Deloitte USI",
        profile: "Software Engineer",
        link: "https://www2.deloitte.com/us/en.html",
        img: "https://www.nicepng.com/png/detail/51-516673_deloitte-logo-deloitte-d-logo-transparent.png",
        disc: "Deloitte provides audit, consulting, tax, and advisory services to many of the world's most admired brands.",
        details: [
            "Developed scalable and production-grade REST APIs using Java, Spring Boot, and MySQL, ensuring 99.99% uptime, maintaining system reliability, and improving request latency by 30% under high-concurrency workloads.",
            "Engineered a robust data ingestion pipeline utilizing Spring Security and Redis cache for user access control, significantly decreasing average data retrieval time by 60ms and improving overall system responsiveness.",
            "Implemented JWT-based authentication mechanisms to secure REST APIs and microservices, ensuring stateless, scalable session management, enhancing system security, and reducing authentication latency.",
            "Enhanced system observability and deployment consistency by adopting Docker and integrating the ELK Stack for centralized log management, improving debugging efficiency by 55% and reducing deployment time by 30%",
        ],
        time: "Sept 2022 - Present",
        location: "Hyderabad, Telangana, India",
    },
    {
        title: "SmartServ",
        profile: "Software Engineer Intern",
        link: "https://www.smartserv.io/",
        img: "https://www.smartserv.io/wp-content/uploads/2022/01/smartserv-logo-with-name.svg",
        disc: "A cloud-based field service management software built for service contractors with smart automation to get things done faster.",
        details: [
            "Designed and developed an offline location tracking module in the iOS app using Swift, SQLite, CoreData, raising real-time reporting accuracy for field technicians in low-connectivity environments by nearly 90%.",
            "Increased customer engagement by 40% with an APNS-powered, timely automated follow-up system.",
            "Built & maintained REST APIs for seamless data synchronization between mobile apps and cloud, achieving 99% synchronization accuracy and improving data transfer speed by 30% with Firebase and SQLite.",
            "Improved app usability & UI/UX by optimizing Alamofire-based API calls, increasing engagement by 20%.",
        ],
        time: "Jan 2022 - July 2022",
    },
    {
        title: "Three Arrow Technologies",
        profile: "Jr. ReactJS Developer",
        link: "https://threearrow.in/",
        img: "https://res.cloudinary.com/dbvthtwhc/image/upload/v1634190439/portfolio/threeArrow.svg",
        disc: "We design a road map towards the success of your Business in this Digital World.",
        details: [
            "Gained hands-on experience in ReactJS.",
            "Tools Used: CSS, BootStrap and ReactJS",
            "Accomplished: Learned new thing in ReactJS and enhance my knowledge in Web Development.",
        ],
        time: "Sep 2021 - Oct 2021 ",
    },
    {
        title: "KoiReader",
        profile: "Front-End Developer",
        link: "https://www.koireader.com/",
        img: "https://d2fedaqd9kwzub.cloudfront.net/website/6cc558062ae69ea699d57c2b62ed8fd9.svg",
        disc: "Artificial Intelligence based document automation and video feed data capture suite of cognitive APIs designed.",
        details: [
            "Gained hands-on experience in web development, and maintaining internal web applications",
            "Assisting the technical team with the design, development, and fixing of bugs in the website",
            "Tools Used: PUG, CSS, Materialize, JavaScript, jQuery, MJML, Web Components, LitElement and Vaadin",
            "Accomplished: Learned new thing in JavaScript and CSS also enhance my knowledge in Web Development.",
        ],
        time: "Sep 2020 - Nov 2020 ",
    },
    {
        title: "ItWali",
        profile: "Front-End Developer",
        link: "https://itwali.com/",
        img: "https://res.cloudinary.com/dbvthtwhc/image/upload/v1626705622/portfolio/itwali.png",
        disc: "Committed To Helping Our Clients Succeed All You Need A Reliable source That Helps in dealing With Your Income Tax Planning.",
        details: [
            "During the Internship, I was assigned as a front end developer of Itwali.com. In that project, I was assigned to developed pages of Itwali.com.",
            "Tools Used: HTML, CSS, BootStrap, JavaScript and jQuery",
            "Accomplished: Learned many new library, increased my speed in UI development and enhance my knowledge in Web Development.",
        ],
        time: "Aug 2020 - Sept 2020",
    },
];

// Project
const projects = [
    {
        title: "AI-Powered Algorithm Visualizer",
        link: "https://ai-algo-visualizer.netlify.app/",
        img: "1.jpg",
        desc: "Interactive algorithm visualization tool built with React and TypeScript. Features real-time sorting animations, pathfinding demos, and a Sudoku solver with AI-powered insights. Perfect for learning algorithms through visual exploration! 🎯✨.",
    },
    {
        title: "Expense Tracker",
        link: "https://cashcrafter.netlify.app/",
        img: "2.jpg",
        desc: "A modern expense tracking application built with MERN stack. Features real-time analytics, receipt management, and a responsive UI for easy financial management.",
    },
    {
        title: "Metro Pathfinding Application",
        link: "https://github.com/amankumar6/Metro-Pathfinding-Application",
        img: "3.jpg",
        desc: "This Java application provides a route planning tool for the Hyderabad Metro, allowing users to find the shortest paths (based on distance or travel time) between stations. It utilizes Dijkstra's algorithm to efficiently calculate optimal routes and considers interchanges between different metro lines.",
    },
    {
        title: "Covid-19 Report",
        link: "https://report-covid19.netlify.app/",
        img: "report-covid19.jpg",
        desc: "It shows the Status of COVID-19 from all over the world.",
    },
    {
        title: "Top10List",
        link: "https://top10list-react.netlify.app/",
        img: "top10list.jpg",
        desc: "Top10List is a single page application that is made using ReactJs.",
      },
    {
        title: "Epic Player",
        link: "http://epicplayer.cf/",
        img: "epicPlayer.jpg",
        desc: "Epic Player is a music player app with an audio visualizer",
    },
    {
        title: "Missionaries and Cannibals",
        link: "https://boat-game.netlify.app/",
        img: "missionaries-and-cannibals.jpg",
        desc: "It is a simple game made with javascript. Three missionaries and three cannibals need to be crossed a river using a boat.",
    },
];

// Skills
const programming = [
    { title: "C", img: "c.png" },
    { title: "C++", img: "c++.png" },
    { title: "JavaScript", img: "javascript.png" },
    { title: "Swift", img: "swift.png" },
];

const markup = [
    { title: "HTML5", img: "html5.png" },
    { title: "PUG", img: "pug.png" },
    { title: "JSX", img: "react.png" },
];

const styling = [
    { title: "CSS3", img: "css3.png" },
    { title: "SASS", img: "sass.png" },
    { title: "Bootstrap", img: "bootstrap.png" },
    { title: "Materialize", img: "materialize.png" },
];

const javascript = [
    { title: "Node", img: "nodejs.png" },
    { title: "TypeScript", img: "typescript.png" },
    { title: "jQuery", img: "jQuery.png" },
    { title: "React", img: "react.png" },
    { title: "Redux", img: "redux.png" },
    { title: "React Native", img: "react.png" },
];

const dataBase = [
    { title: "MongoDB", img: "mongodb.png" },
    { title: "MySQL", img: "MySQL.png" },
];

const other = [
    { title: "Core Data", img: "coredata.png" },
    { title: "Git", img: "git.png" },
    { title: "Fire Base", img: "fireBase.png" },
    { title: "Wordpress", img: "wordpress.png" },
];

const skillSet = [
    { name: "Programming Language", skills: programming },
    { name: "Markup", skills: markup },
    { name: "Styling", skills: styling },
    { name: "Javascript", skills: javascript },
    { name: "Database", skills: dataBase },
    { name: "Other", skills: other },
];
