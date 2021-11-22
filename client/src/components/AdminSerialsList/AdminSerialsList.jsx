import * as React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button';
import style from './style.module.css'
import { useSelector } from 'react-redux'
const AdminSerialsList = () => {
  const content = useSelector((state) => state.content)
    const serials = content.filter(
        (el) => el.season_id !== null && el.serial_id !== null
    )
  return (
    <div className={style.wrapper}>
                <Box
                    sx={{
                        width: '100%',
                        color: 'white',
                        bgcolor: 'rgba(0, 0, 0, 0.527);',
                        margin: '10',
                        padding:'10px'
                    }}
                >{serials.map((el) => (
                    <nav aria-label='secondary mailbox folders'>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={el.title} />
                                </ListItemButton>
                                <Button variant="contained" color="success">Edit</Button>
                                <Button variant="contained" color="error">Delete</Button>
                            </ListItem>
                        </List>
                    </nav>
                ))}
                    
                </Box>
            </div>
  )
}

export default AdminSerialsList
