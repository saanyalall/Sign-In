import React, { useState } from "react";
import SubDepartmentComp from "./SubDepartmentComp";

interface DepartmentProps {
  department: any;
}

const DepartmentComponent: React.FC<DepartmentProps> = ({ department }) => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const toggleSelection = () => {
    setSelected(!selected);
  };

  return (
    <div>
      <div onClick={toggleExpansion}>
        {expanded ? "-" : "+"}{" "}
        <span onClick={toggleSelection}>
          {selected ? "☐" : "☑"} {department.department}
        </span>
      </div>
      {expanded &&
        department.sub_departments.map((subDept: string, index: number) => (
          <SubDepartmentComp
            key={index}
            subDepartment={subDept}
            selected={selected}
            onSelect={toggleSelection}
          />
        ))}
    </div>
  );
};

export default DepartmentComponent;