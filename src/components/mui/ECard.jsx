import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CustomDialog from './CustomDialog';

export default function Ecard() {
    return (
        <Card sx={{ maxWidth: '100%' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="240"
                    image="https://img.freepik.com/premium-photo/male-hand-touching-service-concept_220873-7826.jpg"
                    alt="service concept"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <CustomDialog  isDraggable={false} maxWidth={'xs'} isFullScreenButtonVisible={true} title={"Your modal"}>
                            <Ecard />
                        </CustomDialog>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Website development and customization with server site deployment
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}