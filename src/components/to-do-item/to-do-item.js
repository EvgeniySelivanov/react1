import * as React from 'react';
import './to-do-item.css';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import{useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export function ToDoItem(props){
    const[checked,setChecked]=useState(false);
   
    const checkedChange=(value)=>{
        setChecked(!checked);
   }
return(
    <ListItem
           secondaryAction={
              <Checkbox
              onChange={checkedChange}
              checked={checked}
                edge="end" 
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${1}`}
                  src={props.task.image}
                />
              </ListItemAvatar>
              <ListItemText className={checked?'trough':'no-trough'}  primary={props.task.title} />
            </ListItemButton>
          </ListItem>
        );
      
   
}
export function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon className="test3"/>} />
        <BottomNavigationAction  label="Favorites" icon={<FavoriteIcon className="test" />} />
        <BottomNavigationAction  label="Nearby" icon={<LocationOnIcon className="test2"/>} />
      </BottomNavigation>
    </Box>
  );
}
export function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
/* export default ToDoItem; */