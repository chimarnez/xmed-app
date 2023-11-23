import { useLoaderData } from "react-router-dom";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  CardMedia,
} from "@mui/material";
import LabeledField from "../components/labeled-field";
import PageLayout from "../components/page-layout";

const DoctorsDetailPage = () => {
  const doctor = useLoaderData();
  const { User: user, specialization, medicalLicense } = doctor;

  return (
    <PageLayout>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              sx={{ height: 400, backgroundPosition: "top" }}
              title="Profile photo"
              image="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
            />
            <CardContent>
              <Typography variant="h3" gutterBottom component="div">
                {user.firstName} {user.lastName}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
                component="div"
              >
                {specialization}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Información general
                  </Typography>
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
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Información profesional
                  </Typography>
                  <Divider />
                  <Grid spacing={2} container sx={{ mt: 1 }}>
                    <Grid item sm={6} xs={12}>
                      <LabeledField label="Especialidad">
                        {specialization}
                      </LabeledField>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <LabeledField label="Licencia médica">
                        {medicalLicense}
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

export default DoctorsDetailPage;
