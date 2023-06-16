export const boxStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  padding: "20px",
  boxShadow: "-4px -1px 22px 1px rgba(0, 0, 0, 0.13)",
  borderRadius: "20px",
  // Original margin values
  marginTop: "40px",
  marginLeft: "100px",
  marginRight: "100px",
  marginBottom:"20px"
};

// Media query for xs screen size
const xsMediaQuery = "@media only screen and (max-width: 576px)";
const xsBoxStyles = {
  marginLeft: "10px", // Set left margin to 10px for mobile view
  marginRight: "10px", // Set right margin to 10px for mobile view
};

boxStyles[xsMediaQuery] = {
  ...boxStyles,
  ...xsBoxStyles,
};
