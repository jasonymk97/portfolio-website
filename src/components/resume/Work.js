import React from 'react';
import { Typography, Box, Button, Grid, Icon } from '@mui/material';
import { LocationOn as LocationIcon, Business as BusinessIcon } from '@mui/icons-material';

function Work({ position, company, location, type, duration }) {
  return (
    <Box pt={2} pb={4} borderBottom={1} borderColor="divider">
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h6">{position}</Typography>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="success" size="small" style={{ borderRadius: '24px' }}>
            {type}
          </Button>
        </Grid>
      </Grid>
      <Box pt={2}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <Icon component={BusinessIcon} />
              </Grid>
              <Grid item>
                <Typography variant="body2">{company}</Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center" spacing={1} pt={1}>
              <Grid item>
                <Icon component={LocationIcon} />
              </Grid>
              <Grid item>
                <Typography variant="body2">{location}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="body2">{duration}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Work;
