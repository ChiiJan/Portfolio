import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import Navbar from '../Component/Navbar.js';
import '../css/resume.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { TimelineDetail } from "../Component/Modal.js";



function Resume() {

  return (
    <div>
      <Navbar />
      <div className="Resume-header">
        <h1>Experience Highlights</h1>
      </div>
      <div className="Resume-body">

        <Timeline position="alternate">
          <TimelineDetail
            title={"Temasek Polytechnic"}
            subtitle={"Diploma in Business Information Technology"}
            date={"Apr 16 – Apr 19"}
            icon={<SchoolIcon />}
            color={"success"}
            bool={"True"}
            pointOne={"Achievement: Director list 2017 "}
          />
          <TimelineDetail
            title={"UI/UX Intern"}
            subtitle={"Ag Delta"}
            date={"Apr 18 – Aug 18"}
            icon={<WorkIcon />}
            color={"primary"}
            pointOne={"Collaborated with designers, product managers, and developers to conceptualize and implement UI/UX solutions for web platforms. "}
            pointTwo={"Assisted in developing responsive and user-friendly web pages adhering to best software development practices. "}
            pointThree={"Designed and created various marketing collaterals including posters and banners in coordination with the sales team."}
          />
          <TimelineDetail
            title={"National University of Singapore (NUS)"}
            subtitle={"Bachelor of Computing in Information Systems"}
            date={"Oct 19 – Apr 24"}
            icon={<SchoolIcon />}
            color={"success"}
            pointOne={"Digital Innovation"}
            pointTwo={"Project Management "}
            pointThree={"Data Management and Visualization"}
          />
          <TimelineDetail
            title={"@makeupbysabbychew"}
            subtitle={"School Marketing Project"}            
            icon={<DesignServicesIcon />}
            color={"secondary"}
            pointOne={"Designed and developed a marketing website using WordPress to enhance the client's online presence and service reach. "}
            pointTwo={"Crafted and executed marketing campaigns leveraging Instagram Ads, resulting in a 15% increase in followers and a significant surge in business inquiries. "}
            pointThree={"Utilized Google Analytics for in-depth analysis of web traffic patterns, optimizing marketing strategies based on data-driven insights. "}
            imgsrc={require('../assets/makeupbysabbychew1.png')}
            imgalt={"screenshot"}
            isImg={true}
          />
          <TimelineDetail
            title={"Laundry Shop Digital Innovation Project"}
            subtitle={"School Academic Project"}            
            icon={<DesignServicesIcon />}
            color={"secondary"}
            pointOne={"Developed and implemented a comprehensive laundry management system using React.js, facilitating order creation and business management functionalities. "}
            pointTwo={"Analyzed existing workflows, identified automation opportunities, and translated business requirements into technical specifications and user stories. "}
            pointThree={"Collaborated within a seven-person team, fostering a supportive environment to successfully execute the LSDIP project. "}
            imgsrc={require('../assets/lsdip.png')}
            imgalt={"screenshot"}
            isImg={true}
          />
          <TimelineDetail
            title={"Application Development Intern"}
            subtitle={"National University of Singapore (NUS)"}
            date={"May 23 – Oct 23"}
            icon={<WorkIcon />}
            color={"primary"}
            pointOne={"Conducted comprehensive analysis of existing systems to identify and refine specifications and requirements. "}
            pointTwo={"Developed and maintained website using WordPress, PHP, HTML, CSS, and JavaScript. "}
            pointThree={"Created mid-fidelity prototypes using Figma to streamline communication between design and development teams. "}
            pointFour={"Developed comprehensive software documentation and user manuals to facilitate effective system adoption and maintenance. "}
          />
          <TimelineDetail
            title={" ACE Website "}
            subtitle={"Intern project"}            
            icon={<DesignServicesIcon />}
            color={"secondary"}
            pointOne={"Developed PHP and HTML code to integrate Custom Post Types seamlessly into the website. "}
            pointTwo={"Revamped the main menu using WordPress Ubermenu and redesigned webpages with Elementor, enhancing user experience and navigation. "}
            pointThree={"Authored detailed documentation enabling stakeholders to independently manage the main menu and Custom Post Type functionalities. "}
            pointFour={"Achieved a cost saving of SGD 115k by eliminating the need for outsourcing and saved approximately 170 man-hours per year for users. "}
            imgsrc={require('../assets/ubermenu.png')}
            imgalt={"screenshot"}
            isImg={true}
          />
        </Timeline>


      </div>
    </div>
  );
}

export default Resume;