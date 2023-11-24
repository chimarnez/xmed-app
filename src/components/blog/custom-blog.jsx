import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Sidebar from "./Sidebar";

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

export default function CustomBlog() {
  return (
    <>
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
    </>
  );
}
