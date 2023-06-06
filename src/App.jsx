import "./App.css";
import Page from "./components/Page";
import NavbarSection from "./components/navbar/NavbarSection";
import Images from "./components/carousel/ImgGallery";
import cargo from "./assets/bags/cargo.jpg";
import Head from "./components/Head";
import ListItems from "./components/helpers/ListItems";
import { descs, delivery } from "../content";
import contact from './assets/asdd.jpg'
import Contacts from "./components/helpers/Contacts";
function App() {
  const style = "odd";

  return (
    <div className="App">
      <NavbarSection />
      <Head id={"about"} />
      <Images id="projects" />
      <Page
        style={style}
        id="blog"
        title="Ваш товар приедет к Вам!"
        image={cargo}
      >
        <ListItems lists={delivery} />
      </Page>
      <Page id="contact" title="Контакты" image={contact}>
      <Contacts/>
      </Page>
     
    </div>
  );
}

export default App;
