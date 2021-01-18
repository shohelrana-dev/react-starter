import React from 'react';
import {Link} from "@reach/router";
import {AppBar, Container, Toolbar, IconButton, Button} from "@material-ui/core";
import {Home} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";

const NavBar = () => {
    const navLinks = [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'},
    ];

    const useStyles = makeStyles({
        navBarDisplayFlex: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        navDisplayFlex: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        listItemCenter: {
            display: 'flex',
            alignItems: 'center',
        },
        linkText: {
            textDecoration: 'none',
            textTransform: 'uppercase',
            color: 'white'
        }
    });

    const classes = useStyles();

    return (
        <AppBar position="static" style={{background: '#8394f3'}}>
            <Toolbar>
                <Container className={classes.navBarDisplayFlex}>

                    <IconButton edge="start" color="inherit" aria-label="home">
                        <Link to="/">
                            <Home fontSize="large"/>
                        </Link>
                    </IconButton>

                    <ul className={classes.navDisplayFlex}>
                        {navLinks.map(({title, path}) => (
                            <li className={classes.listItemCenter} key={title}>
                                <Link to={path} className={classes.linkText}>
                                    <Button color="inherit">
                                        {title}
                                    </Button>
                                </Link>
                            </li>
                        ))}
                    </ul>

                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
