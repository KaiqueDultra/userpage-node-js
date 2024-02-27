// UserProfilePage.js
import React from 'react';
import { Container, Paper, Typography, Grid, Stack, Avatar, styled, Button, Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import ScheduleIcon from '@mui/icons-material/Schedule';

const BlueAvatar = styled(Avatar)({
  color: 'blue',
  backgroundColor: 'transparent',
});

const UserProfilePage = ({ user }) => {
  return (
    <Container style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Perfil do Usuário
        </Typography>
        <Stack direction="column" spacing={2}>
          {['name', 'email', 'company', 'lastLogin'].map((key) => (
            <Grid key={key} container item xs={12} md={6} alignItems="center">
              <BlueAvatar>
                {key === 'name' && <PersonIcon />}
                {key === 'email' && <EmailIcon />}
                {key === 'company' && <WorkIcon />}
                {key === 'lastLogin' && <ScheduleIcon />}
              </BlueAvatar>
              <Typography variant="h6" style={{ marginLeft: '10px' }}>
                {user[key]}
              </Typography>
            </Grid>
          ))}
        </Stack>
      </Paper>

      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', flexGrow: 1 }}>
        <Typography variant="h5" gutterBottom>
          Exemplo de Registrados
        </Typography>

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            { name: 'Componente A', quantity: '100/200', status: 'Aprovado' },
            { name: 'Componente B', quantity: '80/100', status: 'Reprovado' },
            // Adicione mais itens conforme necessário
          ].map((component, index, array) => (
            <React.Fragment key={index}>
              <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <strong>Autor do registro:</strong> {user.author}
                  <br />
                  Nome do registro: {component.name}
                  <br />
                  Quantidade de registro: {component.quantity}
                  <br />
                  Data do registro: 26/02/2024
                </div>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: component.status === 'Aprovado' ? 'green' : 'orange',
                    color: 'white',
                    borderRadius: '8px',
                    marginLeft: 'auto',
                    display: 'block',
                  }}
                >
                  {component.status}
                </Button>
              </li>
              {index < array.length - 1 && <Divider style={{ margin: '10px 0' }} />}
              {/* Adicione a linha divisória apenas se não for o último item */}
            </React.Fragment>
          ))}
        </ul>
      </Paper>
    </Container>
  );
};

export default UserProfilePage;
