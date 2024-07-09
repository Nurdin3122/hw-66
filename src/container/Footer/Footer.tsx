import React from 'react';

const Footer = () => {
    return (
        <div className="bg-danger d-flex justify-content-between flex-row p-3">
            <div className="d-flex flex-column">
                <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                   href="#">telegram</a>
                <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                   href="#">instagram</a>
            </div>
            <div className="d-flex flex-column  ms-5">
                <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                   href="#">about us </a>
                <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                   href="#">996 709 728 018</a>
            </div>
        </div>
    );
};

export default Footer;