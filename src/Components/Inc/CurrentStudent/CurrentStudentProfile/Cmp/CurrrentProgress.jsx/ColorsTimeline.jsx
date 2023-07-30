import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import Tooltip from '@mui/material/Tooltip';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function ColorsTimeline() {

  const [studentData, setStudentData] = useState();
  const [activeStep, setActiveStep] = useState(0);


  useEffect (() => {
    const fetchData = async() => {

      const response = await axios.get("http://localhost:3001/Student_Status/user" ,
      {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      }
    )
    setStudentData(response.data)

    }

    fetchData();
  },[])


  const steps = [
    { time: '', content: 'Preliminary Lecture Registration', attemptsLeft: 2 },
    { time: 'Preliminary Exam Registration', content: '', attemptsLeft: 2 },
    { time: '', content: 'Intermediate Lecture Registration', attemptsLeft: 3 },
    { time: 'Intermediate Exam Registration', content: '', attemptsLeft: 3 },
    { time: '', content: 'Final Lecture Registration', attemptsLeft: 3 },
    { time: 'Final Exam Registration', content: '', attemptsLeft: 3 },
    { time: '', content: 'Apprenticeship Programme', attemptsLeft: 3 },
  ];

 

useEffect (() => {
if (studentData){

  if (studentData.FinalExamPass){
    setActiveStep(6);
  } else if (studentData.FinalYearReg){
    setActiveStep(5);
  } else if (studentData.IntExamPass){
    setActiveStep(4);
  } else if (studentData.IntYearReg){
    setActiveStep(3);
  } else if (studentData.PreExamPass){
    setActiveStep(2);
  } else if (studentData.PreYearReg){
    setActiveStep(1);
  } 

}
  

}, [studentData])

console.log(activeStep)
   
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.7,
          marginLeft: '100px',
        },
      }}
    >
      {steps.map((step, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent color="black">
            {step.time}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <Tooltip title={`Attempts Left: ${step.attemptsLeft}`}>
              <TimelineDot color={activeStep === index ? 'success' : 'grey'} />
            </Tooltip>
            {index < steps.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <Tooltip title={`Attempts Left: ${step.attemptsLeft}`}>
            <TimelineContent>{step.content}</TimelineContent>
          </Tooltip>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
