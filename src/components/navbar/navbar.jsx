import React from 'react';
import './style.css'
import logo from './logo.png'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ClearIcon from '@material-ui/icons/Clear';
import DefineDrawer from '../drawer/drawer';

const useStyles = makeStyles({
  list: {
    width: 500,
  },
  fullList: {
    width: 'auto',
  },
});

const NavBar = ({onLogin}) => {
	const classes = useStyles();
	const [state, setState] = React.useState({
    right: false,
  });

	const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation">
      <List>
      	<ClearIcon fontSize='large' className='ma3 pointer' onClick={toggleDrawer(anchor, false)}/>
        <DefineDrawer close={toggleDrawer(anchor, false)}/>
      </List>
    </div>

  );

	return (
		<AppBar position="static" className='gradient'>
			<div className='flex justify-around'>
				<div className='w-50 pa2 ml3'>
					<img src={logo} alt='company' height='60px'/>
				</div>

				<div className='w-50 pa2 mr4 flex flex-row-reverse'>
		      	{['right'].map((anchor) => (
		        <React.Fragment key={anchor}>
		          <Button className='h2 top-1' onClick={toggleDrawer(anchor, true)}>LOGIN</Button>
		          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} >
		            {list(anchor)}
		          </Drawer>
		        </React.Fragment>
		      	))}
				</div>
			</div>
		</AppBar>
	)
}

export default NavBar;
