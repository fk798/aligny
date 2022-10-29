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

    // gallery
    const [anchorElG, setAnchorElG] = React.useState<null | HTMLElement>(null);
    const openG = Boolean(anchorElG);
    const handleClickG = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElG(event.currentTarget);
    };
    const handleCloseG = () => {
        setAnchorElG(null);
    };

    // publications
    const [anchorElP, setAnchorElP] = React.useState<null | HTMLElement>(null);
    const openP = Boolean(anchorElP);
    const handleClickP = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElP(event.currentTarget);
    };
    const handleCloseP = () => {
        setAnchorElP(null);
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
                    <Grid container spacing = {5} justifyContent = "center">
                        <Grid item xs = "auto"><Link href = "/"><Button color="inherit">Home</Button></Link></Grid>
                        <Grid item xs = "auto"><Link href = "/about"><Button color="inherit">About</Button></Link></Grid>
                        <Grid item xs = "auto"><Link href = "/team"><Button color="inherit">Our Team</Button></Link></Grid>
                        <Grid item xs = "auto"><Button color="inherit" onClick={handleClickG}>Gallery</Button></Grid>
                        <Menu anchorEl={anchorElG} open={openG} onClose={handleCloseG} MenuListProps={{'aria-labelledby': 'basic-button'}}>
                            <Link href="/gallery/2021"><MenuItem onClick={handleCloseG}>2021</MenuItem></Link>
                            <Link href="/gallery/2019"><MenuItem onClick={handleCloseG}>2019</MenuItem></Link>
                            <Link href="/gallery/2018"><MenuItem onClick={handleCloseG}>2018</MenuItem></Link>
                            <Link href="/gallery/2017"><MenuItem onClick={handleCloseG}>2017</MenuItem></Link>
                        </Menu>
                        <Grid item xs = "auto"><Button color="inherit" onClick={handleClickP}>Publications</Button></Grid>
                        <Menu anchorEl={anchorElP} open={openP} onClose={handleCloseP} MenuListProps={{'aria-labelledby': 'basic-button'}}>
                            <Link href="/publications/2021"><MenuItem onClick={handleCloseP}>2021</MenuItem></Link>
                            <Link href="/publications/2019"><MenuItem onClick={handleCloseP}>2019</MenuItem></Link>
                        </Menu>
                        <Grid item xs = "auto"><Link href = "/ads"><Button color="inherit">Advertisements</Button></Link></Grid>
                        <Grid item xs = "auto"><Link href = "/donate"><Button color="inherit">Donate</Button></Link></Grid>
                        <Grid item xs = "auto"><Link href = "/membership"><Button color="inherit">Membership</Button></Link></Grid>
                        <Grid item xs = "auto"><Link href = "/archive"><Button color="inherit">Archive</Button></Link></Grid>
                    </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
        </React.Fragment>
    )
}