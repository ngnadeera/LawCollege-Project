import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from '@material-ui/icons';
import { Typography } from '@mui/material';
import RippleAvatar from './RippleAvatar';

const useStyles = makeStyles((theme) => ({
  sidebarDrawer: {
    position:'Static',

    width: 300,
    flexShrink: 1,
    height: 800,
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

const Sidebar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(null);

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
        { label: 'View My Profile', link: '#' },
        { label: 'Change Password', link: '#' },
        { label: 'Account Settings', link: '#' },
        
      ],
    },
    {
      label: 'Lecture Registration',
      link: '#',
      subMenuItems: [],
    },
    {
      label: 'Exam Registration',
      link: '#',
      subMenuItems: [],
    },
    {
      label: 'Exam Results',
      link: '#',
      subMenuItems: [],
    },
    {
      label: 'Current Progress',
      link: '#',
      subMenuItems: [],
    },
    {
      label: 'Apprenticeship Registration',
      link: '#',
      subMenuItems: [],
    },
    // Add more navigation items as needed
  ];

  return (
    <div>
      <div style={{marginLeft:"30px",marginTop:"-190px" ,marginBottom:"20px", position:"absolute"}} >
      <RippleAvatar src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg?w=996&t=st=1689002491~exp=1689003091~hmac=ce85659bd7e9d1376ac4d0445a8ac841cbee7773a76d084a3a15cccf84778ab9" alt="Avatar" size={140} />
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
