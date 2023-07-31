import * as Yup from 'yup';

export const step3Validation = Yup.object().shape({
  schema: Yup.string().required("Schema is required / If you don't have AL qualifications please select None"),
  educationInstitute: Yup.string().test({
    test: function (value) {
      const schemaFieldValue = this.resolve(Yup.ref("schema"));
      if (schemaFieldValue === "new" || schemaFieldValue === "old") {
        return !!value;
      }
      return true;
    },
    message: "Education institute is required"
  }),
  yearOfAL: Yup.string().test({
    test: function (value) {
      const schemaFieldValue = this.resolve(Yup.ref("schema"));
      if (schemaFieldValue === "new" || schemaFieldValue === "old") {
        return !!value;
      }
      return true;
    },
    message: "Year of A/L is required",
  }),
  monthofAL: Yup.string().test({
    test: function (value) {
      const schemaFieldValue = this.resolve(Yup.ref("schema"));
      if (schemaFieldValue === "new" || schemaFieldValue === "old") {
        return !!value;
      }
      return true;
    },
    message: "Month of A/L is required",
  }),
  
  indexNo: Yup.string().test({
    test: function (value) {
      const schemaFieldValue = this.resolve(Yup.ref("schema"));
      if (schemaFieldValue === "new" || schemaFieldValue === "old") {
        return !!value;
      }
      return true;
    },
    message: "Index number is required",
  }),

  medium : Yup.string().test({
    test: function (value) {
      const schemaFieldValue = this.resolve(Yup.ref("schema"));
      if (schemaFieldValue === "new" || schemaFieldValue === "old") {
        return !!value;
      }
      return true;
    },
    message: "Medium is required",
  }),
  
   subjectNumber1 : Yup.number().test({
    test: function (value) {
      const schemaFieldValue = this.resolve(Yup.ref("schema"));
      if (schemaFieldValue === "new" || schemaFieldValue === "old") {
        return !!value;
      }
      return true;
    },
    message: "Subject number 1 is required",
  }),
  
   subject1 : Yup.string().test({
    test: function (value) {
      const schemaFieldValue = this.resolve(Yup.ref("schema"));
      if (schemaFieldValue === "new" || schemaFieldValue === "old") {
        return !!value;
      }
      return true;
    },
    message: "Subject 1 is required",
  }),
  
  grading1: Yup.string()
  .test({
    test: function (value) {
      const schemaFieldValue = this.resolve(Yup.ref("schema"));
      if (schemaFieldValue === "new" || schemaFieldValue === "old") {
        return !!value;
      }
      return true;
    },
    message: "Grading is required",
  })
  .test({
    test: function (value) {
      // Allow only specific letters "A", "B", "C", or "S"
      return /^[ABC]|S$/i.test(value);
    },
    message: "Grading must be 'A', 'B', 'C', or 'S'",
  })
  .test({
    test: function (value) {
      // Allow only one letter (e.g., "A", "B", etc.)
      return /^[A-Za-z]{1}$/.test(value);
    },
    message: "Grading must be a single letter",
  }),

    
  subjectNumber2 : Yup.number().test({
    test: function (value) {
      const schemaFieldValue = this.resolve(Yup.ref("schema"));
      if (schemaFieldValue === "new" || schemaFieldValue === "old") {
        return !!value;
      }
      return true;
    },
    message: "Subject number 2 is required",
  }),
  
  subject2 : Yup.string().test({
    test: function (value) {
      const schemaFieldValue = this.resolve(Yup.ref("schema"));
      if (schemaFieldValue === "new" || schemaFieldValue === "old") {
        return !!value;
      }
      return true;
    },
    message: "Subject 2 is required",
  }),
  
  grading2: Yup.string()
  .test({
    test: function (value) {
      const schemaFieldValue = this.resolve(Yup.ref("schema"));
      if (schemaFieldValue === "new" || schemaFieldValue === "old") {
        return !!value;
      }
      return true;
    },
    message: "Grading is required",
  })
  .test({
    test: function (value) {
      // Allow only specific letters "A", "B", "C", or "S"
      return /^[ABC]|S$/i.test(value);
    },
    message: "Grading must be 'A', 'B', 'C', or 'S'",
  })
  .test({
    test: function (value) {
      // Allow only one letter (e.g., "A", "B", etc.)
      return /^[A-Za-z]{1}$/.test(value);
    },
    message: "Grading must be a single letter",
  }),
  
   subjectNumber3 : Yup.number().test({
    test: function (value) {
      const schemaFieldValue = this.resolve(Yup.ref("schema"));
      if (schemaFieldValue === "new" || schemaFieldValue === "old") {
        return !!value;
      }
      return true;
    },
    message: "Subject number 3 is required",
  }),
  
   subject3 : Yup.string().test({
    test: function (value) {
      const schemaFieldValue = this.resolve(Yup.ref("schema"));
      if (schemaFieldValue === "new" || schemaFieldValue === "old") {
        return !!value;
      }
      return true;
    },
    message: "Subject 3 is required",
  }),
  
  grading3: Yup.string()
  .test({
    test: function (value) {
      const schemaFieldValue = this.resolve(Yup.ref("schema"));
      if (schemaFieldValue === "new" || schemaFieldValue === "old") {
        return !!value;
      }
      return true;
    },
    message: "Grading is required",
  })
  .test({
    test: function (value) {
      // Allow only specific letters "A", "B", "C", or "S"
      return /^[ABC]|S$/i.test(value);
    },
    message: "Grading must be 'A', 'B', 'C', or 'S'",
  })
  .test({
    test: function (value) {
      // Allow only one letter (e.g., "A", "B", etc.)
      return /^[A-Za-z]{1}$/.test(value);
    },
    message: "Grading must be a single letter",
  }),

  subjectNumber4 : Yup.number().test({
    test: function (value) {
      const schemaFieldValue = this.resolve(Yup.ref("schema"));
      if ( schemaFieldValue === "old") {
        return !!value;
      }
      return true;
    },
    message: "Subject number 4 is required",
  }),
  
   subject4 : Yup.string().test({
    test: function (value) {
      const schemaFieldValue = this.resolve(Yup.ref("schema"));
      if ( schemaFieldValue === "old") {
        return !!value;
      }
      return true;
    },
    message: "Subject 4 is required",
  }),
  
   grading4 : Yup.string().test({
    test: function (value) {
      const schemaFieldValue = this.resolve(Yup.ref("schema"));
      if (schemaFieldValue === "old") {
        return !!value;
      }
      return true;
    },
    message: "Grading 4 is required",
  }),
  


  

  
})

    
  

  
   
