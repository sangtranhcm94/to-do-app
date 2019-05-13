import React from 'react';

const Footer = (props) => {
    var dueToday = [], totalShows = []; 
    props.data.filter(data => {
        if (
          new Date(data.dueDate).toLocaleDateString() ===
          new Date().toLocaleDateString() && !data.isDeleted
        ) {
          dueToday.push(data);
        }
        if(!data.isDeleted){
            totalShows.push(data);
        }
    });

    return (
        <div className="footerApp">
              Today tasks: {dueToday.length} / Total: {totalShows.length}.
        </div>
    );
};

export default Footer;