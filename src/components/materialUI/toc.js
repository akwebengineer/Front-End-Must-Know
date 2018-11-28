import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import { actionCreators } from '../../redux/actionCreators';

const styles = {
    flex: {
        flexGrow: 1,
        float: 'left',
        color: 'inherit',
        padding: '10px'

    },
    tocListContainer: {
        width: '100%',
        color: '#191919'
    },
    tocList: {
        width: '250px'
    },
    tocItem: {
        width: '100%',
    },
    topicTitle: {
        fontWeight: 400
    },
    tocHead: {
        minHeight: 64,
        // background: 'linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)',
        // color: '#9933ff'
        color: '#f94b04'
        // color: '#2cb5e8'
    },
    tocHeadContent: {
        padding: '10px',
    },
    settingsIcon: {
        float: 'right',
        color: 'inherit'
    },
    drawerPaper:{
        position: 'relative',
        width: 240
    }
};

const mapStateToProps = (state) => ({
    menuVisible: state.menuToggleReducer.menuVisible,
    tocItems: state.loadTOCReducer.tocItems
});
class TOC extends React.Component {

    handleNavItemClick = () => {
        // this.props.handleNavItemClick(event);
        const { dispatch } = this.props;
        dispatch(actionCreators.toggleMenu());
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(actionCreators.loadTOC());
    }

    render() {
        let { tocItems, classes } = this.props;
        const sideList = (
            <span className={classes.top}>
                <Card className={classes.tocHead}>
                    <CardContent className={classes.tocHeadContent}>
                        <Typography variant="title" className={classes.flex}>
                            <span>Contents</span>
                        </Typography>
                        <IconButton size="small" aria-label="Settings" className={classes.settingsIcon} onClick={this.handleNavItemClick}>
                            <SettingsIcon />
                        </IconButton>
                    </CardContent>
                </Card>

                <div className={classes.tocListContainer}>
                    {
                        tocItems.map((mainTopic, index) => {
                            return (
                                <ExpansionPanel key={index}>
                                    <ExpansionPanelSummary className={classes.topicTitle}>{mainTopic.title}</ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <List className={classes.tocList} onClick={this.handleNavItemClick} onKeyDown={this.handleNavItemClick}>
                                            {mainTopic.topics.map((topic, index) => {
                                                let elem = '';
                                                if (index === 1) {
                                                    elem = (<ListItem button selected={true} className={classes.tocItem} key={index + '-' + topic}>{topic}</ListItem>);
                                                }
                                                else {
                                                    elem = (<ListItem button className={classes.tocItem} key={index + '-' + topic}>{topic}</ListItem>);
                                                }
                                                return elem;
                                            })}
                                        </List>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            );
                        })
                    }
                </div>
            </span>
        );

        return (
            <Drawer open={this.props.menuVisible} variant="persistent" className={classes.drawerPaper}>
                {sideList}
            </Drawer>
        );
    }
}

TOC.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps)(TOC));