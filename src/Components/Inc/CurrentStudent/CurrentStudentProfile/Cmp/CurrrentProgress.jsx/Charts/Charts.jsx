import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const subjectData = [
  {
    subject: 'LW101',
    averageMark: 45,
  },
  {
    subject: 'LW102',
    averageMark: 66,
  },
  {
    subject: 'LW103',
    averageMark: 67,
  },
  {
    subject: 'LW106',
    averageMark: 67,
  },
  {
    subject: 'LW107',
    averageMark: 67,
  },
  {
    subject: 'LW108',
    averageMark: 67,
  },
  {
    subject: 'LW204',
    averageMark: 72,
  },
  {
    subject: 'LW105',
    averageMark: 60,
  },
  // Add more subjects and their average marks here
];

const studentData = [
  {
    subject: 'LW101',
    studentMark: 50,
  },
  {
    subject: 'LW102',
    studentMark: 60,
  },
  {
    subject: 'LW103',
    studentMark: 55,
  },
  {
    subject: 'LW106',
    studentMark: 70,
  },
  {
    subject: 'LW107',
    studentMark: 75,
  },
  {
    subject: 'LW108',
    studentMark: 65,
  },
  {
    subject: 'LW204',
    studentMark: 65,
  },
  {
    subject: 'LW105',
    studentMark: 75,
  },
  // Add more subjects and their respective student marks here
];

const LineChartEx = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
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
