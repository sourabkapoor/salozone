import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const TemporaryDrawer = ({toggleDrawer}) =>  {
  var control = toggleDrawer;
  const classes = useStyles();

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={()=> control=false)}
    >
      <List>
      <p>Drawer...</p>
      </List>
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          { control ? 
          <Drawer anchor={anchor} open={true}>
            {list(anchor)}
          </Drawer>
          : null }
        </React.Fragment>
      ))}
    </div>
  );
}

export default TemporaryDrawer;