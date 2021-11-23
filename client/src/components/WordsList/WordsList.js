import {useSelector} from 'react-redux'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { Grid } from '@material-ui/core'
import './style.css'




export const WordsList = () => {


  
  const words = useSelector(state=> state.words)


  return (
    <div className='search'>
          <div>
              asdasddas
            {/* <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={4}>
                {words.map((content) => (
                    <Grid item xs={4} md={3}>
                        <Card sx={{ maxWidth: 400 }}>
                            <CardMedia
                                component='img'
                                alt='green iguana'
                                height='140'
                                image={content.post_url}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant='h5'
                                    component='div'
                                >
                                    {content.title}
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='text.secondary'
                                >
                                    {content.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size='small'>Смотреть</Button>
                                <Button size='small'>Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid> */}
        </div>
    </div>
  )
}
