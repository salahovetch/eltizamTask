import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import getProfileData from './utils/resources';

import { useState } from 'react';
import CustomTable from './components/dataTable'
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [profileName, setProfileName] = useState('');
  const [profileData, setProfileData] = useState({});

  const handleSubmit = () => {
    if (profileName === '') {
      alert('Enter Profile Name First')
    } else {
      setIsLoading(true)
      getProfileData(profileName).then((res) => {
        setProfileData(res);
        console.log(res?.data)
        setIsLoading(false)

      });

    }

  }

  return (
    <div className="App">

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>

            <Typography variant="h6" component="h6">
              User Profile App
            </Typography>

          </Toolbar>
        </AppBar>
      </Box>
      <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
        <Box component="p" sx={{ fontWeight: 'bold' }}>
          Get User Profile Data Dynamically
        </Box>

      </Box>
      <Box component="section" className='customForm' sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
        <TextField value={profileName} onChange={e => setProfileName(e.target.value)} id="filled-basic"  label="Enter Profile Name" variant="filled" />
        <Button onClick={handleSubmit} variant="outlined" sx={{
          fontWeight: 'bold', borderTopLeftRadius: '0',
          borderBottomLeftRadius: '0',
          backgroundColor: '#1976d2', color: '#fff'
        }}>
          Get Data
        </Button>
      </Box>
      {isLoading && <CircularProgress />
      }

      {profileData && <CustomTable tableData={profileData} />}
    </div>
  );
}

export default App;
