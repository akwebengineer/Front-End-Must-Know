//React imports
import React from 'react';
import PropTypes from 'prop-types';

//Redux imports
import { actionCreators } from '../../redux/actionCreators';
import { connect } from 'react-redux';

// Material UI imports
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// Custom component imports
import AppNavTab from './tabs';
import appNavItems from '../../data/appNavItems.json';

// END imports


const styles = theme => ({
    root: {
        flexGrow: 1
    },
    header: {
        fontFamily: "'Open Sans', sans-serif",
        background: '#ffffff',
        color: '#f94b04',
        // color: '#2cb5e8',
        borderBottom: '0.1px solid #f94b04',
        // borderBottom: '0.1px solid #2cb5e8',
        zIndex: theme.zIndex.drawer + 1,
    },
    flex: {
        flexGrow: 1,
        // textAlign: 'center'
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
});

const mapStateToProps = (state) => {
    return {}

}
class ButtonAppBar extends React.Component {
    handleMenuClick = () => {
        // this.props.handleMenuClick(event); // Replace this with redux action call
        const { dispatch } = this.props;
        dispatch(actionCreators.toggleMenu());
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="absolute" className={classes.header}>
                    <Toolbar>
                        {
                            //     <IconButton className={classes.menuButton} onClick={this.handleMenuClick} color="inherit" aria-label="Menu">
                            //     <MenuIcon />
                            // </IconButton>
                        }
                        <AppNavTab currentActiveNavTab={0} tabData={appNavItems} />
                        {
                            //     <Typography variant="title" color="inherit" className={classes.flex}>
                            //     <span>ARVIND KANNAN</span>
                            // </Typography>
                            // <Button color="inherit">Login</Button>
                        }
                    </Toolbar>
                </AppBar>
            </div>
        );
    }

}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps)(ButtonAppBar));