import { useState, useEffect } from "react"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';



function App({name}) {

    const [inputValue, setInputValue] = useState("")
    const [anchor, setAnchor] = useState(false)

    useEffect(() => {
        console.log(inputValue)
    }, [inputValue])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky" color="primary">
                <Toolbar>
                    
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {name}
                    </Typography>
                    <Button color="inherit">Login</Button>
                    <IconButton onClick={ e => setAnchor(true) }
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ ml: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor={'left'}
                open={anchor}
                onClose={() => setAnchor(false)}
                >
                <Box>
                    
                </Box>
            </Drawer>

            <Box>
                {[1, 2, 3].map((v, i) => 

                    <Card sx={{ m: 2 }} key={i}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image="https://picsum.photos/300/200"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Lizard {v}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                    </Card>

                )}
                
            </Box>

        </Box>
    )
}

export default App