import * as Yup from 'yup';

export const step4Validation = Yup.object().shape({
    convicted: Yup.string().required("This field is required"),
    convictedDescription: Yup.string().test({
      name: "convictedDescription",
      test: function(value) {
        if (this.resolve(Yup.ref("convicted")) === "yes") {
          return Yup.string().required("This field is required").isValidSync(value);
        }
        return true;
      },
    }),
    convictedFine: Yup.string().required("This field is required"),
    convictedFineDescription: Yup.string().test({
      name: "convictedFineDescription",
      test: function(value) {
        if (this.resolve(Yup.ref("convictedFine")) === "yes") {
          return Yup.string().required("This field is required").isValidSync(value);
        }
        return true;
      },
    }),
    previousSits: Yup.string().required("This field is required"),
    yearOfPreviousSits: Yup.string().test({
      name: "yearOfPreviousSits",
      test: function(value) {
        if (this.resolve(Yup.ref("previousSits")) === "yes") {
          return Yup.string().required("This field is required").isValidSync(value);
        }
        return true;
      },
    }),
    indexOfPreviouSits: Yup.string().test({
      name: "indexOfPreviouSits",
      test: function(value) {
        if (this.resolve(Yup.ref("previousSits")) === "yes") {
          return Yup.string().required("This field is required").isValidSync(value);
        }
        return true;
      },
    }),
    marksPreviousSits: Yup.number().test({
      name: "marksPreviousSits",
      test: function(value) {
        if (this.resolve(Yup.ref("previousSits")) === "yes") {
          return Yup.number()
            .required("This field is required")
            .integer("Marks must be an integer")
            .min(0, "Marks must be greater than or equal to 0")
            .isValidSync(value);
        }
        return true;
      },
    }),
    yearOfPreviousSits2: Yup.string().test({
      name: "yearOfPreviousSits2",
      test: function(value) {
        if (this.resolve(Yup.ref("previousSits")) === "yes") {
          return Yup.string().required("This field is required").isValidSync(value);
        }
        return true;
      },
    }),
    indexOfPreviouSits2: Yup.string().test({
      name: "indexOfPreviouSits2",
      test: function(value) {
        if (this.resolve(Yup.ref("previousSits")) === "yes") {
          return Yup.string().required("This field is required").isValidSync(value);
        }
        return true;
      },
    }),
    marksPreviousSits2: Yup.number().test({
      name: "marksPreviousSits2",
      test: function(value) {
        if (this.resolve(Yup.ref("previousSits")) === "yes") {
          return Yup.number()
            .required("This field is required")
            .integer("Marks must be an integer")
            .min(0, "Marks must be greater than or equal to 0")
            .isValidSync(value);
        }
        return true;
      },
    }),
    paymentType: Yup.string().required("This field is required"),
    branchName: Yup.string().required("This field is required"),
    bank: Yup.string().required("This field is required"),
    paymentDate: Yup.string().required("This field is required"),
  
})

    
  

  
   