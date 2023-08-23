import React from "react";
import DepartmentComponent from "./DepartmentComponent";

const departmentsData = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
];

const Component2: React.FC = () => {
  return (
    <div style={{cursor:"pointer", textAlign:"center", marginTop:"-15vh"}}>
      {departmentsData.map((department, index) => (
        <DepartmentComponent key={index} department={department} />
      ))}
    </div>
  );
};

export default Component2;

