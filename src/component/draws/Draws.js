import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

const a11yProps = (index) => {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`
    };
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper
    }
}));

const Draws = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={clsx(classes.root, 'row')}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    {[...new Array(4)].map((i) => (
                        <Tab
                            label="Round"
                            {...a11yProps(i++)}
                            className="col s3 m3"
                            style={{
                                paddingTop: '10px',
                                paddingBotton: '10px'
                            }}
                        />
                    ))}
                </Tabs>
            </AppBar>
            {[...new Array(4)].map(() => (
                <TabPanel
                    value={value}
                    index={value}
                    className="col s12 m4"
                    style={{
                        paddingTop: '10px',
                        paddingBotton: '10px'
                    }}
                >
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Match No</span>
                        </div>
                        <p className="amber-text">Player - 1</p>
                        <div className="card-action">
                            <div className="amber-text">Player - 2</div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Match No</span>
                        </div>
                        <p>Player - 1</p>
                        <div className="card-content grey lighten-4">
                            <div>Player - 2</div>
                        </div>
                    </div>
                </TabPanel>
            ))}
        </div>
    );
};

export default Draws;