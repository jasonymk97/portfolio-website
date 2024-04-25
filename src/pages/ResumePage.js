import React from 'react';
import { Typography, Container, Grid, Paper } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { notableOutputInfo, workInfo } from '../data/personalData';
import Work from '../components/resume/Work';
import NotableOutput from '../components/resume/NotableOutput';
import QualificationsList from '../components/resume/QualificationsList';
import {
  Book as SummaryIcon,
  Work as WorkIcon,
  Build as SkillIcon,
  LibraryBooks as OutputIcon,
  School as QualificationIcon
} from '@mui/icons-material';
import SkillsList from '../components/resume/SkillsList';

const summary = {
  content1: "Hello! I'm Jason 🖐🏻, a backend developer with three years of hands-on experience in web development 💻. I specialize in building responsive, user-friendly web applications using modern technologies like JavaScript, React, and Java 🌟. My passion for creating efficient and scalable software solutions drives my work 🚀.",
  content2: "In my previous roles, I've successfully developed projects from concept to implementation, including e-commerce platforms and custom web applications 🛒. I excel at collaborating with teammates 🤝 and delivering projects on time ⏱️.",
  content3: "My key skills include back-end development with Node.js and Java 🔧, and database management with MongoDB and MySQL 🗄️. I'm also experienced in implementing RESTful APIs and integrating third-party services 🌐. Additionally, I have some front-end and mobile techniques with React and React Native 📱.",
  content4: "Looking ahead, I'm eager to continue growing my expertise in emerging technologies 🌱 and contribute to innovative projects that make a positive impact💡. My goal is to leverage my skills and experience to help organizations achieve their digital transformation objectives 🚀."
}

function ResumePage() {
  return (
    <>
      <Header />
      {/* Main Content */}
      <Container style={{ marginTop: '20px', marginBottom: '20px' }}>
        {/* Overview Summary */}
        <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Summary         
            <SummaryIcon color="primary" className='ml-2 mb-2' />
          </Typography>
          <Typography variant="body1">
            {summary.content1}
          </Typography>
          <br />
          <Typography>
          {summary.content2}
          </Typography>
          <br />
          <Typography>
          {summary.content3}
          </Typography>
          <br />
          <Typography>
          {summary.content4}
          </Typography>
        </Paper>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper elevation={3} style={{ padding: '20px'}}>
              <Typography variant="h5" gutterBottom>
                Career History
                <WorkIcon color="primary" className='ml-2 mb-2'/>
              </Typography>
              {workInfo.map(({ position, company, location, type, duration }, index) => (
                <Work
                  key={index} // Add index as a unique key
                  position={position}
                  company={company}
                  location={location}
                  type={type}
                  duration={duration}
                />
              ))}
            </Paper>
          </Grid>

          {/* Skills */}
          <Grid item xs={12}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h5" gutterBottom>
                Skills 
                <SkillIcon color="primary" className='ml-2 mb-2'/>
              </Typography>
              <SkillsList />
            </Paper>
          </Grid>

          {/* Notable Outputs */}
          <Grid item xs={12}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h5" gutterBottom style={{ marginBottom: '20px'}}>
                Notable Outputs (Team Projects)
                <OutputIcon color="primary" className='ml-2 mb-2'/>
              </Typography>
              {notableOutputInfo.map(({name}, index) => (
                <NotableOutput
                  key={index}
                  name={name}
                />
              ))}
            </Paper>
          </Grid>

          {/* Qualifications */}
          <Grid item xs={12}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h5" gutterBottom>
                Qualifications
                <QualificationIcon color="primary" className='ml-2 mb-2'/>
              </Typography>
              <QualificationsList />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}


export default ResumePage;
