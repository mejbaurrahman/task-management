import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
export default function Navigation() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const {user,
    setLoading,
    loading,
   
    logOut,
    } = useContext(AuthContext);
  const signout =()=>{
    logOut()
    .then(result=>{
      navigate('/login')
    }).catch(error=>console.log(error.message))
  }
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TASK
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
                <MenuItem 
                //  onClick={handleCloseNavMenu}
                 >
                  <Link  to='/' style={{textDecoration:'none'}}> <Button
                // key={page}
                variant="contained"
                // onClick={handleCloseNavMenu}
                sx={{ }}
              >
                Add Task
              </Button></Link>

                </MenuItem>
                <MenuItem 
                //  onClick={handleCloseNavMenu}
                 >
                  <Link to='/mytask' style={{textDecoration:'none'}}> <Button
                // key={page}
                variant="contained"
                // onClick={handleCloseNavMenu}
                sx={{ }}
              >
                My Task
              </Button></Link>
                </MenuItem>
                <MenuItem 
                //  onClick={handleCloseNavMenu}
                 >
                  <Link to='/completeTask' style={{textDecoration:'none'}}> <Button
                // key={page}
                variant="contained"
                // onClick={handleCloseNavMenu}
                sx={{  }}
              >
                Complete Task
              </Button></Link>
                </MenuItem>
                <MenuItem 
                //  onClick={handleCloseNavMenu}
                 >
                  <Button
                // key={page}
                variant="contained"
                // onClick={handleCloseNavMenu}
                sx={{  }}
              >
                 <Button
                
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {
                user?.email && <Typography variant='p'>{user?.email}</Typography>
              }
                
              </Button>
              </Button>
                </MenuItem>
             
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TASK
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
          <Link to='/' style={{textDecoration:'none'}}> <Button
                // key={page}
                
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Add Task
              </Button></Link>
          <Link to='/mytask' style={{textDecoration:'none'}}> <Button
                // key={page}
                
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                My Task
              </Button></Link>
          <Link to='/completeTask' style={{textDecoration:'none'}}> <Button
                // key={page}
                
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Complete Task
              </Button></Link>

              

             
              <Button
                
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {
                user?.email && <Typography variant='p'>{user?.email}</Typography>
              }
                
              </Button>
            
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {
              user?.email && <Box> <Button variant='contained' onClick={signout}>Logout</Button></Box>
            }
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
             
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
