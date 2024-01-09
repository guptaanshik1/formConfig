import { nonSalariedFields } from "./nonSalariedFields";
import { salariedFields } from "./salariedFields";

export const workDetailsConfig = {
  title: "Work Details",
  formFields: [
    {
      label: "Employment Type",
      placeholder: "Select Employment Type",
      apiKey: "employment_type",
      type: "select",
      required: true,
      validators: undefined,
      options: [
        { label: "Salaried", value: "SALARIED" },
        { label: "Self Employed", value: "SELF_EMPLOYED" },
        { label: "Student", value: "STUDENT" },
        { label: "Professional", value: "PROFESSIONAL" },
        { label: "Housewife", value: "HOUSEWIFE" },
        { label: "Farmer", value: "FARMER" },
        { label: "RCO", value: "RCO" },
      ],
      subfields: {
        SALARIED: salariedFields,
        SELF_EMPLOYED: salariedFields,
        PROFESSIONAL: salariedFields,
        STUDENT: nonSalariedFields,
        HOUSEWIFE: nonSalariedFields,
        FARMER: nonSalariedFields,
        RCO: nonSalariedFields,
      },
    },
  ],
  ctaText: "Continue",
};

export const workDetailApiKey = [
  "employment_type",
  "employer",
  "designation",
  "experience_in_year",
  "monthly_income",
  "current_job_years",
  "profession",
  "address_line_1",
  "landmark",
  "pincode",
  "city",
  "state",
  "std_code",
  "phone_number",
  "office_extension",
  "work_email",
  "work_phone_number",
];
