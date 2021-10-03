import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Link from "next/link";
import { Grid } from '@mui/material'

export default function Navigation() {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <Grid container spacing = {2} justifyContent = "center">
                <Grid item xs = "auto">
                    <a href = "/"><img src = "https://aaany-assets.s3.amazonaws.com/images/logo1.png" height = "200" style ={{paddingBottom: "10px"}}></img></a>
                </Grid>
                <Grid item xs = "auto">
                    <div style = {{textAlign: "center", position: "relative", top: "40%", left: "50%", transform: "translate(-50%, -50%)"}}>
                    <h1>
                    Aligarh Alumni Association 
                    </h1>
                    <h1>
                    of New York
                    </h1>
                    </div>
                </Grid>
                <Grid item xs = "auto">
                    <iframe style = {{float: "right"}} width="400" height="200" src="https://www.youtube.com/embed/I5QtnY4PpJg" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Grid>
            </Grid>
            <Box sx={{ width: "100%" }}>
                <AppBar position="static">
                    <Toolbar>
                    {/*<IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>*/}
                    <Grid container spacing = {20} justifyContent = "center">
                        <Grid item xs = "auto"><Link href = "/"><Button color="inherit">Home</Button></Link></Grid>
                        <Grid item xs = "auto"><Link href = "/about"><Button color="inherit">About</Button></Link></Grid>
                        <Grid item xs = "auto"><Link href = "/team"><Button color="inherit">Our Team</Button></Link></Grid>
                        <Grid item xs = "auto"><Button color="inherit" onClick={handleClick}>Gallery</Button></Grid>
                        <Menu anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button'}}>
                            <Link href="/gallery/2017"><MenuItem onClick={handleClose}>2017</MenuItem></Link>
                            <Link href="/gallery/2018"><MenuItem onClick={handleClose}>2018</MenuItem></Link>
                        </Menu>
                        <Grid item xs = "auto"><Link href = "/donate"><Button color="inherit">Donate</Button></Link></Grid>
                    </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
        </React.Fragment>
    )
}