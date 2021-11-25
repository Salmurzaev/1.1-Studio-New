import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { changeRating } from '../redux/ac/ac';

export default function BasicRating({ rating }) {
    const [value, setValue] = React.useState(rating);
    const dispatch = useDispatch()
    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Typography component="legend">Рейтинг фильма</Typography>
            <Rating
                name="simple-controlled"
                value={value}

                onClick={() => dispatch(changeRating(value))}
                onClick={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </Box>
    );
}