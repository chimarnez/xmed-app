import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Sidebar from "./Sidebar";

const sections = [
  { title: "Salud", url: "#" },
  { title: "Bienestar", url: "#" },
  { title: "Salud Mental", url: "#" },
  { title: "Nutrición", url: "#" },
  { title: "Estado Físico", url: "#" },
  { title: "Estilo de vida", url: "#" },
  { title: "Prevención", url: "#" },
];

const mainFeaturedPost = {
  title: "Avances en Investigación Médica",
  description:
    "Descubre los últimos desarrollos en la investigación médica que podrían cambiar el panorama de los tratamientos para una enfermedad específica.",
  image: "https://source.unsplash.com/random?medical",
  imageText: "main image description",
  linkText: "Continuar leyendo…",
};

const featuredPosts = [
  {
    title: "Estudio Revela",
    date: "Nov 12",
    description:
      "Este artículo analiza un estudio reciente que arroja luz sobre estadísticas importantes o descubrimientos cruciales, proporcionando información valiosa sobre los desafíos y oportunidades en el ámbito de la salud pública.",
    image: "https://source.unsplash.com/random?doctor",
    imageLabel: "Image Text",
  },
  {
    title: "Innovación Revolucionaria en oncología",
    date: "Nov 11",
    description:
      "Sumérgete en la innovación revolucionaria que está transformando el campo de la tecnología médica.  Descubre últimos avances, destacando cómo estas nuevas tecnologías.",
    image: "https://source.unsplash.com/random?hospital",
    imageLabel: "Image Text",
  },
];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title={
        <Typography component="h2" sx={{
          color:"#26C08B", 
          fontSize: {
              xs: "2.5rem",
              sm: "2.5rem",  
              md: "2.5rem",
              lg: "3rem", 
              xl: "4rem"  
          }
        }} variant="h2">
            Blog
        </Typography>}
        sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}
