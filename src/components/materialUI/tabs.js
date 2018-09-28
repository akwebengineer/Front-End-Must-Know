import React from 'react';
import PropTypes from 'prop-types';

// Material UI Imports
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

//Redux imports
import { connect } from 'react-redux';

//React router imports
// import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
    boxShadow: '0px 0px 0px 0px',
  },
  tab:{
    fontFamily:"'Open Sans', sans-serif"
  }
};

const mapStateToProps = (state) => ({
  currentActiveNavTab: state.navigateReducer.currentActiveNavTab
});

class CenteredTabs extends React.Component {
  // state = {
  //   value: 0,
  // };

  handleChange = (event, value) => {
    // console.log('value');
    // console.log(value);
    // this.setState({ value });
  };

  handleTabClick = (payload) => {
    // const { dispatch } = this.props;
    // dispatch
  }

  render() {
    const { classes, tabData } = this.props;
    const tabItems = Object.keys(tabData);

    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.props.currentActiveNavTab}
          onChange={this.handleChange}
          className={classes.tab}
          centered
        >
          {
            tabItems.map((tab, index) => {

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

              //   <Route key={index} render={({history}) => {
              //     return(
              //         <Tab  label={tabData[tab].label} onClick={()=>{
              //             // history.push(`/${tabData[tab].URL}`);
              //             this.handleTabClick({history, URL: tabData[tab].URL})
              //         }} />
              //     );
              // }}/>

              return (
                <Tab key={index}
                  label={tabData[tab].label}
                  onClick={() => { }}
                  component={Link}
                  to={tabData[tab].URL}
                />
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

export default withStyles(styles)(connect(mapStateToProps)(CenteredTabs));
