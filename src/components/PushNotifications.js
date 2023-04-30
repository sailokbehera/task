import React from 'react';
import clsx from 'clsx';
import {makeStyles, withStyles} from "@mui/styles";
import {Card, CardContent, FormControlLabel, FormGroup, Grid, Switch, Typography} from "@mui/material";

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  }
}));

const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: 'rgb(73 41 121)',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: 'rgb(73 41 121)',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        // focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          // root: classes.root,
          // switchBase: classes.switchBase,
          // thumb: classes.thumb,
          // track: classes.track,
          // checked: classes.checked,
        }}
        {...props}
      />
    );
  });

const PushNotifications = ({ pushNotificationState, handleToggle, className, ...rest }) => {
  const classes = useStyles();

  // const [state, setState] = React.useState({
  //   checkedA: true,
  //   checkedB: true,
  //   checkedC: true,
  // });

  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Grid container justify="space-between" spacing={3}>
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h5"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              Push Notifications
            </Typography>
            <FormGroup style={{ marginLeft: 10 }}>
              <FormControlLabel
                control={
                  <IOSSwitch
                    checked={pushNotificationState}
                    onChange={handleToggle}
                  />
                }
               label={''}/>
            </FormGroup>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PushNotifications;
