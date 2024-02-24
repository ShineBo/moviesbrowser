import Hero from "./Hero";
import noImg from "./assests/noImg.jpeg"

const Aboutview = () => {
return (
<>
    <Hero text="About Us" />
    <div className="container mt-5">
      <section className="about-content">
        <h1>About Movies Browser</h1>
        <p>
          Movies Browser is your go-to platform for exploring a vast collection of movies from various genres. Whether you're a film enthusiast or just looking for something to watch tonight, we've got you covered.
        </p>
        <p>
          Our mission is to provide a seamless and enjoyable experience for discovering, exploring, and keeping up with the latest movies. From classic masterpieces to the hottest releases, Movies Browser is the gateway to your cinematic journey.
        </p>
      </section>

      <section className="team-section mt-5">
        <h2>Meet the Team</h2>
        <div className="row">
          <div className="col-md-4">
            <img src={noImg} alt="Team Member 2" className="img-fluid rounded-circle" />
            <h3>Shine Bo Bo</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>
    </div>
</>
)
}

export default Aboutview;
