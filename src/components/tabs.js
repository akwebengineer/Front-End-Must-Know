import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

//React router imports
import { Route, withRouter } from 'react-router-dom';


const styles = {
  root: {
    flexGrow: 1,
    boxShadow: '0px 0px 0px 0px'
  },
};

class CenteredTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    console.log(value);
    this.setState({ value });
  };

  render() {
    const { classes, tabData } = this.props;
    const tabItems = Object.keys(tabData);

    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
        {
            tabItems.map((tab, index)=>{ 
                
                // const _tab = withRouter(({ history }) => (
                //     <Tab  
                //         label={tabData[tab].label} 
                //         onClick={()=>{history.push(`/${tabData[tab].URL}`);}} 
                //     />
                //     // <button
                //     //   type='button'
                //     //   onClick={() => { history.push('/new-location') }}
                //     // >
                //     //   Click Me!
                //     // </button>
                //   ));
                //   return _tab;               
                
                return (
                    // <Tab key={index} label={tabData[tab].label} onClick={()=>{}}/>


                    <Route key={index} render={({history}) => {                        
                        return(
                            <Tab  label={tabData[tab].label} onClick={()=>{                                
                                history.push(`/${tabData[tab].URL}`);
                            }} />
                        );
                    }}/>
                );
            })
        }
        </Tabs>
      </Paper>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  tabData: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredTabs);
