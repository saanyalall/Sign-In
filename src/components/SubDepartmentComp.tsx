import React from "react";

interface SubDepartmentProps {
  subDepartment: string;
  selected: boolean;
  onSelect: () => void;
}

const SubDepartmentComp: React.FC<SubDepartmentProps> = ({
  subDepartment,
  selected,
  onSelect,
}) => {
  return (
    <div style={{ marginLeft: "20px" }}>
      <span onClick={onSelect}>
        {selected ? "☐" : "☑"} {subDepartment}
      </span>
    </div>
  );
};

export default SubDepartmentComp;