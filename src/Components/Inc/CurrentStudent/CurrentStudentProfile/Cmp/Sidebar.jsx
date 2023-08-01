import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from '@material-ui/icons';
import { Typography } from '@mui/material';
import RippleAvatar from './RippleAvatar';
import { storage } from '../../../FireBase/firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  sidebarDrawer: {
    position:'Static',

    width: 300,
    flexShrink: 1,
    height: 600,
    overflowY: 'auto',
    marginLeft:40,
   
  },
  drawerPaper: {
        position:'Static',
        width: 300,
        height:600,
        borderRight: 'none',
  },
  toolbar: theme.mixins.toolbar,
  listItem: {
    borderBottom: '1px solid #ddd',
  },
  nestedListItem: {
    paddingLeft: theme.spacing(4),
 
  },
}));

const studentId = "200000t3"

const Sidebar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [userId,setUserId] = useState();



  useEffect(() => {
    axios.get('http://localhost:3001/Student_login/userId',{
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      }
    })
      .then(response => {
        setUserId(response.data);
        
      })
      .catch(error => {
        console.log(error);
      });
  }, []); 



  useEffect(() => {
    // Fetch the image URL from Firebase Storage
    if (userId){
      const imageRef = ref(storage, `ProfilePictures/${userId}/image`);
      getDownloadURL(imageRef)
        .then((url) => {
          setImageUrl(url);
        })
        .catch((error) => {
          console.log('Error getting the image URL:');
        });
    }
    
  }, [userId]);


  const handleClick = (index) => {
    setOpen((prevOpen) => (prevOpen === index ? null : index));
  };

  const renderSubmenuItems = (subMenuItems) => {
    return subMenuItems.map((submenuItem) => (
      <ListItem
        key={submenuItem.label}
        button
        className={classes.nestedListItem}
        component="a"
        href={submenuItem.link}
      >
        <ListItemText primary={submenuItem.label} />
      </ListItem>
    ));
  };

  const navItems = [
    {
      label: 'My Profile',
      link: '#',
      subMenuItems: [
        { label: 'View My Profile', link: '/CurrentStudent/ViewProfile' },
        { label: 'Change Password', link: '/CurrentStudent/ChangePassword' },
        { label: 'Account Settings', link: '#' },
        
      ],
    },
    {
      label: 'Lecture Registration',
      link: '#',
      subMenuItems: [
        { label: 'Instructions', link: '/CurrentStudent/LectureRegistration/Instructions' },
        { label: 'Registration', link: '/CurrentStudent/LectureRegistration' },
      ],
    },
    {
      label: 'Exam Registration',
      link: '#',
      subMenuItems: [
        { label: 'Registration', link: '/CurrentStudent/ExamRegistration' },
        { label: 'Exam Admission', link: '/CurrentStudent/Admission' },
        { label: 'Exam Withdrawal', link: '/CurrentStudent/ExamWithdrawal' },
        { label: 'Exam Medicals', link: '/CurrentStudent/ExamMedicals' },
      ],
    },
    {
      label: 'Exam Results',
      link: '#',
      subMenuItems: [
        { label: 'Ongoing Exam Results', link: '/CurrentStudent/ExamResults' },
        { label: 'Previous Exam Results', link: '/CurrentStudent/PreviousExamResults' },
      ],
    },
    {
      label: 'Current Progress',
      link: '#',
      subMenuItems: [
        { label: 'Progress Timeline', link: '/CurrentStudent/CurrentProgress' },
        { label: 'Academic Analysis', link: '/CurrentStudent/AcademicAnalysis' },
      ],
    },
    {
      label: 'Apprenticeship Registration',
      link: '#',
      subMenuItems: [
        { label: 'Registration', link: '/CurrentStudent/ApprenticeshipRegistration' },
        { label: 'Apprenticeship Status', link: '/CurrentStudent/ApprenticeshipResults' },
        { label: 'Transcript', link: '/CurrentStudent/Transcript' },
      ],
    },
    // Add more navigation items as needed
  ];

  return (
    <div>
      <div style={{marginLeft:"30px",marginTop:"-210px" ,marginBottom:"20px", position:"absolute"}} >
      <RippleAvatar src={imageUrl}  alt="Avatar" size={140} />
      </div>
      <Typography style={{marginLeft:"55px", fontSize:"25px", marginBottom:"-60px",marginTop:"80px"}}><b>Sections</b></Typography>
    <div className={classes.sidebarDrawer}>
      <Drawer
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {navItems.map((navItem, index) => (
            <React.Fragment key={navItem.label}>
              <ListItem button onClick={() => handleClick(index)} className={classes.listItem}>
                <ListItemText primary={navItem.label} />
                {open === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>
              <Collapse in={open === index} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {renderSubmenuItems(navItem.subMenuItems)}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </div>
    </div>
  );
};

export default Sidebar;
