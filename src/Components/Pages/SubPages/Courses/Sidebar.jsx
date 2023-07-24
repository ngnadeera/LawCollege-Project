import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from '@material-ui/icons';
import { Typography } from '@mui/material';


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
      label: 'Attorney at Law',
      link: '/Courses',
      subMenuItems: [
        { label: 'Introduction', link: '/Courses' },
        { label: 'The Curriculum', link: '/Curriculum' },
        { label: 'Eveluations and Examinations', link: '/#' },
      
      ],
    },
    {
      label: 'Advanced Legal studies',
      link: '#',
      subMenuItems: [
        { label: 'Introduction', link: '/#' },
        { label: 'The Curriculum', link: '/#' },
      ],
    },
    {
      label: 'Barrister',
      link: '#',
      subMenuItems: [],
    },
    
    // Add more navigation items as needed
  ];

  return (
    <div>
      <div style={{marginLeft:"30px",marginTop:"-210px" ,marginBottom:"20px", position:"absolute"}} >
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
