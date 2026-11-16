import React from "react";

const MembersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4 uppercase">Members section</h2>
      {children}
    </div>
  );
};

export default MembersLayout;
