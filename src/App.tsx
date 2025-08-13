import { Button } from './components/ui/Button/Button';
import { Header } from './components/ui/Header/Header';
import { Users } from './components/Users/Users';
import { SignUpForm } from './components/SignUpForm/SignUpForm';
function App() {
  return (
    <>
      <Header variant="desktop" />
      <section className="hero">
        <div className="container hero__container">
          <h1 className="hero__title heading-1">Test assignment for front-end developer</h1>
          <p className="hero__text body">
            What defines a good front-end developer is one that has skilled knowledge of HTML, CSS,
            JS with a vast understanding of User design thinking as they'll be building web
            interfaces with accessibility in mind. They should also be excited to learn, as the
            world of Front-End Development keeps evolving.
          </p>
          <Button variant="normal">Sign up</Button>
        </div>
      </section>
      <Users />
      <SignUpForm />
    </>
  );
}
export default App;
