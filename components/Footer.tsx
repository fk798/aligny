import React, { Component } from "react";

function Footer(props) {

  const images = props.images

  return (
    <React.Fragment>
        <footer>
            Aligarh Alumni Association of New York (AAANY)
        </footer>
        <style jsx>{`
            footer {
                width: 100%;
                height: 100px;
                border-top: 1px solid #eaeaea;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        `}
        </style>
    </React.Fragment>
  );
}


export default Footer;