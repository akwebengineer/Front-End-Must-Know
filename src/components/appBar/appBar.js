import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import {actionCreators} from '../../redux/actionCreators';
import {connect} from 'react-redux';

const styles = {
    root: {
        flexGrow: 1
    },
    header: {
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        // background: 'linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)'  
        background: 'linear-gradient(141deg,#0000cc 0%, #3333ff 5%, #3333cc 15%, #6600ff 35%, #9933ff 50%)'  
        // background: 'linear-gdient(90deg,#640487,#003087)'
        // background: '#ff5722',      
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

const mapStateToProps = (state) => {
    return {}

}
class ButtonAppBar extends React.Component {
    handleMenuClick = () => {
        // this.props.handleMenuClick(event); // Replace this with redux action call
        const {dispatch} = this.props;
        dispatch(actionCreators.toggleMenu());
    }
    render() {        
        return (
            <div className={styles.root}>
                <AppBar position="static" className={styles.header}>
                    <Toolbar>
                        <IconButton className={styles.menuButton} onClick={this.handleMenuClick} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={styles.flex}>
                            <span>TITLE</span>
                        </Typography>
                        <Button color="inherit">Login</Button>
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