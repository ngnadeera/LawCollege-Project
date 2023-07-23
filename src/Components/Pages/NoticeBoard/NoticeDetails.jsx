import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from "./Header";
import Footer from '../../Inc/Footer';
import { Container } from '@mui/material';
import { boxStyles } from '../Registration/GeneralApplicant/Cmp/BoxStyles';
import { Box } from '@material-ui/core';
import Chip from '@mui/material/Chip';
import { storage } from '../../Inc/FireBase/firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const NoticeDetails = () => {
  const [downloadURL, setDownloadURL] = useState("");
  const { NoticeID } = useParams();
  const [notice, setNotice] = useState({});

  useEffect(() => {
    const storageRef = ref(storage, `NoticesDocs/${NoticeID}/1.pdf`);

    getDownloadURL(storageRef)
      .then((url) => {
        setDownloadURL(url);
      })
      .catch((error) => {
        console.error("Error generating download link:", error);
      });
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/Notices/${NoticeID}`);
      setNotice(response.data[0]); // Assuming the API returns an array with a single notice object
    } catch (error) {
      console.error("Error fetching notice:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchNotices();
  }, []);

  return (
    <div>
      <Header />
      <Container style={{ marginTop: '40px', marginBottom: '80px' }}>
        <Box sx={boxStyles}>
          <h1 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '10px' }}>
            {notice.Heading}
          </h1>
          <h3 style={{ fontSize: '17px', marginBottom: '20px' }}>
            {notice.SubHeading}
          </h3>
          <p style={{ fontSize: '18px', marginBottom: '10px' }}>
            <Chip label={notice.Department} color="primary" />
          </p>
          <p style={{ fontSize: '17px', marginTop: "10px", textAlign: "justify" }}>
            Description: {notice.Description}
          </p>
          {downloadURL ? (
            <p style={{ fontSize: '17px', marginTop: "10px", textAlign: "justify" }}>
              Download: <a href={downloadURL} download><Chip label={notice.Downloads} color="error" style={{ cursor: 'pointer' }} /></a>
            </p>
          ) : (
            <p style={{ fontSize: '17px', marginTop: "10px", textAlign: "justify" }}>
              No file available for download.
            </p>
          )}
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default NoticeDetails;
