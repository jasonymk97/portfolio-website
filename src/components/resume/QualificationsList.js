import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { qualificationsInfo } from '../../data/personalData';

function QualificationsList() {

  return (
    <List>
      {/* Map through the qualifications array and create ListItems */}
      {qualificationsInfo.map((qualification, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={qualification.primary}
            secondary={
              // Use a React fragment to render multiple lines of text
              <React.Fragment>
                {qualification.details.map((detail, i) => (
                  <span key={i}>
                    {detail}
                    {/* Add a line break after each detail except the last one */}
                    {i < qualification.details.length - 1 && <br />}
                  </span>
                ))}
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}

export default QualificationsList;
