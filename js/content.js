const dateString = "2000/08/06"
const birthday = +new Date(dateString);
const age = ~~((Date.now() - birthday) / (31557600000));

const aboutMe = `
<p> My self Aman, a ${age}-year-old passionate Full-Stack Web Developer from India. I am an
undergraduate final year student in the Department of Electronics and Communication at the Birla
Institute of Technology, Mesra.<br>My technical interest lies in programming (C++,JS),
Development (Web Applications). Have prior knowledge of Data Structure & Algorithms and
Full-Stack Development. 1 year of experience as a web developer in technical delivery. A great
team player and individual contributor with strong work ethics, technical knowledge and
collaboration skills. Enjoys being challenged and working on projects that requires me to work
outside my comfort and knowledge set, as well as continuing to learn new languages, design
patterns and development techniques. <br>Currently I am enhancing my knowledge in DSA. My short
term goal is to get a job in a reputed company as a Software Developer Engineer. And, my Long
term goal is to become a more responsible and knowledgeable personality and in a respectable
position in my company.</p>

<p>When not working or futzing around with code, I study how to escape from College.</p>
<p>I'm available for work, <a href="mailto:amankumar786dpsdh@gmail.com" target="_blank">get in
touch.</a>
<br>
My <a href="https://drive.google.com/file/d/1wsPXnbW7Z8yemonXJOcscBXwodkomtt3/view?usp=sharing" target="_blank">Resume</a></p>
`

// Experience
const experience = [
    {
        title: "",
        profile: "Techinical Intern",
        link: "https://www.smartserv.io/",
        img: "https://www.smartserv.io/wp-content/uploads/2022/01/smartserv-logo-with-name.svg",
        disc: "A cloud-based field service management software built for service contractors with smart automation to get things done faster.",
        details: [
            "Gained hands-on experience in iOS development.",
            "Created an iOS App for storing location coordinates even if the user is offline.",
            "Tools Used: Swift, Storyboard, Core Data, Firebase"
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
        title: "Track Your Goals",
        link: "https://app---todo.herokuapp.com/",
        img: "TrackYourGoals.png",
        desc: "Web app helps you to keep track of your daily goals.",
    },
    {
        title: "Covid-19 Report",
        link: "https://covid19-status.ml/",
        img: "report-covid19.jpg",
        desc: "It shows the Status of COVID-19 from all over the world.",
    },
    {
        title: "Top10List",
        link: "https://top10list.ml/",
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
        link: "http://boatgame.ml/",
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
