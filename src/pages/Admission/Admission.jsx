import "./Admission.scss";

import banner_img from "../../assets/images/homebanner.jpeg";
import { programs, states } from "../../assets/data";

const Admission = () => {
  return (
    <div className="admission">
      <div className="admission-banner">
        <div className="img-wrapper">
          <img src={banner_img} alt="" />
          <h1>Admission</h1>
        </div>
      </div>

      <h1>International Academy of Design</h1>

      <div className="admission-wrapper">
        <h2>Admission Form</h2>
        <p>Contact us for course information, admissions, and more.</p>
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
            <input type="text" id="name" name="name" required />
            <label for="name">District</label>
            <div class="underline"></div>
          </div>

          <div class="form-group">
            <input type="text" id="name" name="name" required />
            <label for="name">City</label>
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

export default Admission;
