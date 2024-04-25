import React from 'react';
import { Card, CardContent, Typography, Link } from '@mui/material';

function NotableOutput({ name, description, link }) {
  return (
    <Card elevation={3} style={{ marginBottom: '20px' }}>
      <CardContent>
        {/* Display the name of the notable output */}
        <Typography variant="h6" component="h2">
          {link ? (
            <Link href={link} target="_blank" rel="noopener noreferrer" underline="hover">
              {name}
            </Link>
          ) : (
            name
          )}
        </Typography>

        {/* Display the description if provided */}
        {description && (
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default NotableOutput;
