import React from "react";
import Layout from "../components/layout";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <Layout>
      <h1>Liên hệ</h1>
      <Button variant="contained" color="primary" className={classes.button}
      >
        Open Menu
      </Button>
      <Button color="primary" className={classes.button}
      >
        Open Menu
      </Button>
      <Button color="primary" className={classes.button}
      >
        Open Menu
      </Button>
      <Button color="primary"
      >
        Open Menu
      </Button>
      <Button color="primary"
      >
        Open Menu
      </Button>
      <Button color="primary"
      >
        Open Menu
      </Button>

    </Layout>
  )
}
