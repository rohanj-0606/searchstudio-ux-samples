import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1
          onClick={() => {
            window.location.reload();
          }}
          className="header-title"
        >
          SearchStax
        </h1>
      </div>
    </header>
  );
};

export default Header;
