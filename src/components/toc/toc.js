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

const styles = {
    flex:{
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
    topicTitle:{
        fontWeight: 400
    },
    tocHead: {
        height: 65,
        // background: 'linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)',        
        color: '#9933ff'        
    },
    tocHeadContent: {
        padding: '10px',        
    },    
    settingsIcon: {
        float: 'right', 
        color: 'inherit'      
    }
};

const tocItems = {
    item1: {
        title: 'Javascript Tips and Tricks',
        topics: ['Closures', 'Context (this)', 'Scope', 'Memoization', 'Debouncing', 'Throttling', 'Event Loop']
    },
    item2: {
        title: 'Algorithms and Datastructures',
        topics: ['Queue', 'Stack', 'Linked List', 'Array', 'Hash Map', 'Graph', 'Tree']
    },
};

class TOC extends React.Component {
    handleNavItemClick = (event) => {
        this.props.handleNavItemClick(event);
    }

    render() {
        const { classes } = this.props;
        const sideList = (
            <span className={classes.top}>
                <Card className={classes.tocHead}>
                    <CardContent className={classes.tocHeadContent}>
                        <Typography variant="title" className={classes.flex}>
                            <span>Contents</span>
                        </Typography>
                        <IconButton size="small"  aria-label="Settings" className={classes.settingsIcon} onClick={this.handleNavItemClick}>
                            <SettingsIcon />
                        </IconButton>
                    </CardContent>
                </Card>
                <div className={classes.tocListContainer}>
                    <ExpansionPanel>
                        <ExpansionPanelSummary className={classes.topicTitle}>{tocItems.item1.title}</ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <List className={classes.tocList} onClick={this.handleNavItemClick} onKeyDown={this.handleNavItemClick}>
                                {
                                    tocItems.item1.topics.map((item, index) => {
                                        let elem = '';
                                        if (index === 1) {
                                            elem = (<ListItem button selected={true} className={classes.tocItem} key={index + '-' + item}>{item}</ListItem>);
                                        }
                                        else {
                                            elem = (<ListItem button className={classes.tocItem} key={index + '-' + item}>{item}</ListItem>);
                                        }
                                        return elem;
                                    })
                                }
                            </List>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary className={classes.topicTitle}>{tocItems.item2.title}</ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <List className={classes.tocList} onClick={this.handleNavItemClick} onKeyDown={this.handleNavItemClick}>
                                {
                                    tocItems.item2.topics.map((item, index) => {
                                        let elem = '';
                                        if (index === 1) {
                                            elem = (<ListItem button selected={true} className={classes.tocItem} key={index + '-' + item}>{item}</ListItem>);
                                        }
                                        else {
                                            elem = (<ListItem button className={classes.tocItem} key={index + '-' + item}>{item}</ListItem>);
                                        }
                                        return elem;
                                    })
                                }
                            </List>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            </span>
        );

        return (
            <Drawer  open={this.props.open} variant="persistent">
                {sideList}
            </Drawer>
        );
    }

    componentDidMount() {
        // Add TOC items here rather than in render
    }
}

TOC.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TOC);