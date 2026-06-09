import { vanpage } from "src/images/vanlife/vans.png"
import { vanlist } from "src/images/vanlife/vanlist.png"
import { dashboard } from "src/images/vanlife/dashboard.png"
import { reviews } from "src/images/vanlife/reviews.png"

import { rentalhome } from "src/images/rental/uxheuristic8.png"
import { rentaldetails } from "src/images/rental/uxheuristic7-1.png"
import { rentalapps } from "src/images/rental/portfolio-pic.png"

import { chinookhome } from "src/images/chinook/homepage.png"
import { chinooktracks } from "src/images/chinook/trackpage.png"
import { chinooksearch } from "src/images/chinook/advancedsearch.png"
import { chinookedit } from "src/images/chinook/editpage.png"

import { usecasediagram } from "src/images/diet/usecasediagram.jpg"
import { statechart } from "src/images/diet/statechart.jpg"
import { dietgoaldiagram } from "src/images/diet/dietgoaldiagram.jpg"
import { classdiagram } from "src/images/diet/classdiagram.jpeg"


import Carousel from 'react-bootstrap/Carousel';
import { Icon } from "@iconify/react"

const slideshow = [
  (
  <Carousel interval={null} data-bs-theme="dark">
    <Carousel.Item><img src={vanpage} alt="Vans page"/></Carousel.Item>
    <Carousel.Item><img src={vanlist} alt="Details of a van"/></Carousel.Item>
    <Carousel.Item><img src={dashboard} alt="Dashboard for van seller"/></Carousel.Item>
    <Carousel.Item><img src={reviews} alt="Reviews section"/></Carousel.Item>
  </Carousel>
  ),
  (
    <Carousel interval={null} data-bs-theme="dark">
      <Carousel.Item><img src={rentalhome} alt="Home page"/></Carousel.Item>
      <Carousel.Item><img src={rentaldetails} alt="Rental details page"/></Carousel.Item>
      <Carousel.Item><img src={rentalapps} alt="Applications page"/></Carousel.Item>
    </Carousel>
  ),
  (
    <Carousel interval={null} data-bs-theme="dark">
      <Carousel.Item><img src={chinookhome} alt="Home page"/></Carousel.Item>
      <Carousel.Item><img src={chinooktracks} alt="Tracks page"/></Carousel.Item>
      <Carousel.Item><img src={chinooksearch} alt="Tracks advanced search filters"/></Carousel.Item>
      <Carousel.Item><img src={chinookedit} alt="Edit track page"/></Carousel.Item>
    </Carousel>
  ),
  (
    <Carousel interval={null} data-bs-theme="dark">
      <Carousel.Item><img src={usecasediagram} alt="Use case diagram of main pages"/></Carousel.Item>
      <Carousel.Item><img src={statechart} alt="State chart for user interface"/></Carousel.Item>
      <Carousel.Item><img src={dietgoaldiagram} alt="Activity diagram for setting diet goals"/></Carousel.Item>
      <Carousel.Item><img src={classdiagram} alt="Class diagram"/></Carousel.Item>
    </Carousel>
  )
]

export const projects = [
  {
    thumbnail: <img src={vanpage} alt="Van life thumbnail"/>,
    title: "Van Life",
    year: 2026,
    body: 'A full-stack web application written as part of a code-along class. The app allows users to browse and filter a catalog of rental vans, as well as view detailed information about each van. Implemented mock user authentication and authorization to restrict access to certain features. Deployed the application on AWS Amplify for public access.',
    tags: [
      <span className='tag'><Icon icon="logos:javascript" height={16} />JavaScript</span>,
      <span className='tag'><Icon icon="logos:react" height={16} />React</span>,
      <span className='tag'><Icon icon="devicon:vitejs" height={16} />Vite</span>,
      <span className='tag'><Icon icon="fa6-brands:aws" height={16} />AWS</span>,
      <span className='tag'><Icon icon="logos:firebase-icon" height={16} />Firebase</span>
    ],
    link: 'https://main.dmrurqsji2qvv.amplifyapp.com/',
    slideshow: slideshow[0]
  },
  {
    thumbnail: <img src={rentalhome} alt="Rental app thumbnail"/>,
    title: "Rental Mobile App",
    year: 2024,
    body: 'A high-fidelity prototype for a mobile application made using Adobe XD. The prototype simulates navigation of a rental application\'s pages through the lens of a visiting, renter, and landlord user. Gathered app requirements through interviews with five participants and solution planning.',
    tags: [
      <span className='tag'><Icon icon="logos:adobe-xd" height={16}/>Adobe XD</span>
    ],
    link: 'https://xd.adobe.com/view/5b9f62c8-a8f7-44d2-92e8-292fb0541ce8-0ecc/?fullscreen',
    slideshow: slideshow[1]
  },
  {
    thumbnail: <img src={chinookhome} alt="Chinook Website thumbnail"/>,
    title: "Chinook Website",
    year: 2023,
    body: 'A web project centered around the open-source Chinook database. Implemented database models for a two-tier DBMS. Developed backend functionality in Java using the JDBC API to communicate with the database via SQL. Applied test-driven development to implement CRUD operations, input validation, pagination, and advanced searching functionality. Enabled real-time data interaction that allows users to navigate, query, and update database records.',
    tags: [
      <span className='tag'><Icon icon="logos:java" height={16}/>Java</span>, 
      <span className='tag'><Icon icon="logos:spark" height={16}/>Spark</span>, 
      <span className='tag'><Icon icon="bi:database-fill" height={16}/>ActiveJDBC</span>, 
      <span className='tag'><Icon icon="devicon:apache" height={16}/>Apache Velocity</span>, 
      <span className='tag'> <Icon icon="devicon:redis" height={16}/>Redis</span>
    ],
    link: null,
    slideshow: slideshow[2]
  },
  {
    thumbnail: <img src={usecasediagram} alt="Diet tracking app thumbnail"/>,
    title: "Diet Tracking App",
    year: 2022,
    body: 'A multi-page document that chronicles the requirement analysis stage of the software development life cycle. Collaborated with a team of 4 to develop feature-based requirements to guide development. Documented requirements into structured user stories within project management tool. Created UML diagrams to model system architecture and document key features.',
    link: null,
    tags: [
      <span className='tag'><Icon icon="simple-icons:lucid" color="#000000" height={16} />Lucidchart</span>, 
      <span className='tag'><Icon icon="simple-icons:googledocs" color="#3086f6" height={16}/>Google Docs</span>
    ],
    slideshow: slideshow[3]
  }
]