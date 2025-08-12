import React from 'react';
import MyCV from '../assets/cv/CV_lucashss.pdf';

function DownloadCV() {
    return (
        <button className="btn-home"><a href={MyCV} download="cv_lucashss_2025.pdf" className="icon-btn">Baixar CV</a></button>
    );
}

export default DownloadCV;