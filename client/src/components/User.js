import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, ButtonBase, CircularProgress, Grid, Paper, Typography } from '@material-ui/core';
import dateFormat from 'dateformat';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const User = () => {
    const { id } = useParams();
    const classes = useStyles();
    const history = useHistory();
    const user = useSelector(state => state.users.results ? state.users.results.find((user) => user.login.uuid === id) : null);

    return (
        !user ? <CircularProgress/> : (
            <Paper className={classes.paper}>
                <Grid container spacing={2} direction="column" justify="center" alignItems="center">
                    <Grid item >
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={user.picture.large} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    {`${user.name.title} ${user.name.first} ${user.name.last}`}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {user.email}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {user.cell}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {`${user.location.street.number} ${user.location.street.name}`}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {`${user.location.city}, ${user.location.state} ${user.location.postcode}`}
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Button 
                                    className={classes.button} 
                                    size="small"  
                                    variant="outlined" 
                                    color="primary"
                                    onClick={() => history.push(`/`)}>
                                        back
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" color="textSecondary">{dateFormat(user.dob.date, "mmmm dS, yyyy")}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        )
    )
};

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'relative',
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
        height: 400, 
        width: '100%'
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    button: {
        position: 'absolute',
        bottom: 10,
        left: '10'
    }
}));

export default User;