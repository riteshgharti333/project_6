import "./About.scss";
import banner_img from "../../assets/images/homebanner.jpeg";
import { aboutContent, programs, states } from "../../assets/data";

const About = () => {
  return (
    <div className="about">
      <div className="about-banner">
        <div className="img-wrapper">
          <img src={banner_img} alt="" />
          <h1>About Us</h1>
        </div>
      </div>
      <div className="about-content">
        {aboutContent.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      <div class="about-form">
        <h1>Enquiry Form</h1>

        <form action="#" method="POST">
          <div class="form-group">
            <input type="text" id="name" name="name" required />
            <label for="name">Name</label>
            <div class="underline"></div>
          </div>

          <div class="form-group">
            <input type="email" id="email" name="email" required />
            <label for="email">Email</label>
            <div class="underline"></div>
          </div>

          <div class="form-group">
            <input type="tel" id="phone" name="phone" required />
            <label for="phone">Phone Number</label>

            <div class="underline"></div>
          </div>

          <div class="form-group">
            <select name="" id="">
              <option value="">Select Profile</option>
              <option value="">Under Gradute</option>
              <option value="">Post Gradute</option>
            </select>
          </div>

          <div class="form-group">
            <select name="" id="">
              <option value="">Select Course</option>
              {programs.map((item, index) => (
                <option key={index}>{item.title}</option>
              ))}
            </select>
          </div>

          <div class="form-group">
            <select name="" id="">
              <option value="">Select State</option>
              {states.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </div>

          <div class="form-group">
            <textarea id="message" name="message" rows="5" required></textarea>
            <label for="message">Message</label>
            <div class="underline"></div>
          </div>

          <div class="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default About;
