import {
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  CardMedia,
  Box,
  Button,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import LabeledField from "../components/labeled-field";
import PageLayout from "../components/page-layout";
import { formatDate } from "../utils/date";
import templatePhoto from "../assets/empty-profile.png";

const genderKeys = {
  M: "Masculino",
  F: "Femenino",
  O: "Otro",
};

const UserProfile = ({ user, onEdit }) => {
  return (
    <PageLayout>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            color="primary.main"
            sx={{
              fontSize: {
                xs: "2rem",
                md: "2.5rem",
                lg: "3rem",
                xl: "4rem",
              },
            }}
            variant="h2"
          >
            Usuario
          </Typography>
        </Grid>
        <Grid item sm={12} md={6}>
          <Card>
            <CardMedia
              sx={{ height: 300, backgroundPosition: "top" }}
              title="Profile photo"
              image={user.profilePicture ?? templatePhoto}
            />
            <CardContent>
              <Typography variant="h3" component="div">
                {user.firstName} {user.lastName}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Información general
                    </Typography>
                    <Button onClick={onEdit} size="small" endIcon={<Edit />}>
                      Editar
                    </Button>
                  </Box>
                  <Divider />
                  <Grid spacing={2} container sx={{ mt: 1 }}>
                    <Grid item sm={6} xs={12}>
                      <LabeledField label="Nombre">
                        {user.firstName}
                      </LabeledField>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <LabeledField label="Apellido">
                        {user.lastName}
                      </LabeledField>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <LabeledField label="Género">
                        {genderKeys[user.gender]}
                      </LabeledField>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <LabeledField label="Fecha de nacimiento">
                        {formatDate(user.birthDate)}
                      </LabeledField>
                    </Grid>
                    <Grid item sm={6}>
                      <LabeledField label="Teléfono">{user.phone}</LabeledField>
                    </Grid>
                    <Grid item md={6} sm={12}>
                      <LabeledField label="Email">{user.email}</LabeledField>
                    </Grid>

                    <Grid item xs={12}>
                      <LabeledField label="Dirección">
                        {user.address}
                      </LabeledField>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default UserProfile;
