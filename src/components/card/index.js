import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Carde = ({ nome, datanascimento, plano, datafalecimento, parentesco, datacremacao }) => {
    return (
        <div className='todos-cards'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {nome}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Data de Nascimento: {datanascimento}<br />
                        Data de Falecimento: {datafalecimento}<br />
                        Plano: {plano}<br />
                        Parentesco: {parentesco}<br />
                        {datacremacao && <span>Data de Cremação: {datacremacao}</span>}
                    </Typography>
                </CardContent>
            </Card>
        </div>

    );
}

export default Carde;
