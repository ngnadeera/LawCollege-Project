import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import { useState, useEffect } from 'react';




const LineChartEx = () => {

  const [subjectData, setSubjectData] = useState([]);
  const [studentMarks, setStudentMarks] = useState([]);


  useEffect(() => {

    axios.get("http://localhost:3001/Preliminary_exam_results/results/allusers",
      {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then(response => {
        const data = response.data;
 

        const subjects = ['LW101', 'LW102', 'LW103', 'LW106', 'LW107', 'LW108', 'LW203', 'LW210'];
        const subjectAverages = subjects.map(subject => {
          const marks = data.map(item => item[subject]);
          const filteredMarks = marks.filter(mark => !isNaN(mark)); // Filter out non-numeric values (e.g., undefined)
          const averageMark = filteredMarks.reduce((total, mark) => total + mark, 0) / filteredMarks.length;
          return { subject, averageMark };
        });


        setSubjectData(subjectAverages);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    axios.get(`http://localhost:3001/Preliminary_exam_results/23A0001`,
      {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      }).then(response => {
        setStudentMarks(response.data)
      }).catch(error => {
      console.error('Error fetching data:', error);
    });

}, []);



const studentData = [
  {
    subject: 'LW101',
    studentMark: studentMarks.LW101,
  },
  {
    subject: 'LW102',
    studentMark: studentMarks.LW102,
  },
  {
    subject: 'LW103',
    studentMark: studentMarks.LW103,
  },
  {
    subject: 'LW106',
    studentMark: studentMarks.LW106,
  },
  {
    subject: 'LW107',
    studentMark: studentMarks.LW107,
  },
  {
    subject: 'LW108',
    studentMark: studentMarks.LW108,
  },
  {
    subject: 'LW203',
    studentMark: studentMarks.LW203,
  },
  {
    subject: 'LW210',
    studentMark: studentMarks.LW210,
  },

];


return (
  <ResponsiveContainer width="100%" height={350}>
    <LineChart
      width={500}
      data={subjectData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="subject" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="averageMark" name="Average Mark" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" data={studentData} dataKey="studentMark" name="Student Mark" stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
);
};

export default LineChartEx;
