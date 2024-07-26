import { Box, CardMedia, Paper, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AuthContextProv } from '../context/AuthContext'
import FG from "../assets/newFG.jpg"

const About = () => {
  // const { currentUser } = useContext(AuthContextProv)
  return (
    <Box sx={{
      padding: '1rem'
    }} >
      <Box sx={{
        padding: '1rem',
        display: 'flex', flexDirection: { xs: "column-reverse", sm: 'column-reverse', md: 'row' }, justifyContent: { xs: 'center', md: 'space-evenly' }, alignContent: 'center', gap: 5, margin: '3rem auto', backgroundColor: '#ffe7ca51'
      }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', gap: 3 }}>
          <Typography component="h2" variant="h4" >Hi, I'm Perman Mammedova</Typography>
          <Typography component="h2" variant="h6">I'm Full Stack Developer</Typography>
        </Box>
        <CardMedia
          component="img"
          alt="Fatih"
          height="240"
          image={FG}
          sx={{ borderRadius: '50%', maxWidth: { xs: "200px", sm: "250px", md: "250px" } }}
        />
      </Box>

      <Box width={"90%"} marginX={'auto'}>
        <Paper elevation={1} >
          <Typography fontSize={25} padding={5}>
            I interested in writing codes, skilled at developing complex solutions, creating responsive designs, possessing strong creative thinking skills, high energy and integrity. Ability to create algorithms effectively, and interact positively and communicate appropriately with team members, leading with team where it necessary. Quickly grasp new technologies and concepts to develop innovative and creative solutions to problems. Every time eager to learn various technologies, tools and libraries. Especially interested in the Fullstack Development, HTML, CSS, JS, React, Python. Excited to learn new things and improve, lifetime student.
          </Typography>
        </Paper>
      </Box>



    </Box>
  )
}

export default About