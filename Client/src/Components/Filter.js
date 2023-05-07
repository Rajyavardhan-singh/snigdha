import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Styles/Filter.css";

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      restaurant: [],
    };
  }

  componentDidMount() {
    axios({
      url: "http://localhost:5500/location",
      method: "GET",
      headers: { "Content-Type": "application/JSON" },
    })
      .then((res) => {
        this.setState({ locations: res.data.loc });
      })
      .catch((err) => console.log(err));

    axios({
      url: "http://localhost:5500/filter",
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
    })
      .then((res) => {
        this.setState({ restaurant: res.data.restaurants });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { locations, restaurant } = this.state;

    return (
      <div>
        <header>
          <span id="logo">e!</span>
          <span className="login-signup">
            <button type="button" className="login">
              Login
            </button>
            <button type="button" className="signup">
              Create an account
            </button>
          </span>
        </header>
        <main>
          <section>
            <div className="title">Breakfast Places in Mumbai</div>

            {/* Filters */}

            <div className="Filters">
              <h5>Filters</h5>
              <label htmlFor="location">
                Select Location
                <select id="location">
                  <option value="0" disabled selected>
                    Select Location
                  </option>
                  {locations.map((item) => {
                    return (
                      <option value={item.city_id}>{`${item.name}`}</option>
                    );
                  })}
                </select>
              </label>
              <div className="checkbox">
                <br />
                <h6>Cuisine</h6>
                <label htmlFor="northindian">
                  <input
                    type="checkbox"
                    value="north-indian"
                    id="northindian"
                  />
                  North Indian
                </label>
                <br />
                <label htmlFor="southindian">
                  <input
                    type="checkbox"
                    value="south-indian"
                    id="southindian"
                  />
                  South Indian
                </label>
                <br />
                <label htmFor="chinese">
                  <input type="checkbox" value="chinese" id="chinese" />
                  chinese
                </label>
                <br />
                <label htmlFor="fastfood">
                  <input type="checkbox" value="fast-food" id="fastfood" />
                  Fast Food
                </label>
                <br />
                <label htmlFor="streetfood">
                  <input type="checkbox" value="street-food" id="streetfood" />
                  Street Food
                </label>
              </div>
              <br />
              <div className="radio-button">
                <h6>Cost for two</h6>
                <input type="radio" name="price" value="lessthan500" />
                Less than 500
                <br />
                <input type="radio" name="price" value="500 to 1000" />
                500 to 1000
                <br />
                <input type="radio" name="price" value="1000 to 1500" />
                1000 to 1500
                <br />
                <input type="radio" name="price" value="1500 to 2000" />
                1500 to 2000
                <br />
                <input type="radio" name="price" value="2000+" />
                2000+
              </div>
              <br />
              <div className="sort">
                <h6>Sort</h6>
                <input type="radio" name="sort" value="price-low-to-high" />
                Price low to high
                <br />
                <input type="radio" name="sort" value="price-high-to-low" />
                Price high to low
              </div>
            </div>

            {/* Results */}

            {restaurant.map((each, index) => {
              return (
                <Link to={`/details/${each.id}`}>
                  <div className={`results${index}`}>
                    <div className="d-flex">
                      <div className="lt-box">
                        <img
                          className="img-fluid img-res"
                          src={each.thumb}
                          alt="result image"
                        />
                      </div>
                      <div className="rt-box">
                        <h4 className="result-heading">{each.name}</h4>
                        <p className="result-subheading">{each.city_name}</p>
                        <p className="result-text">{each.address}</p>
                      </div>
                    </div>

                    <hr />

                    <div className="d-flex">
                      <div className="ll-box">
                        <p className="result-text">CUISINES:</p>
                        <p className="result-text">COST FOR TWO:</p>
                      </div>
                      <div className="rl-box">
                        <p className="result-text-blue">
                          {each.Cuisine.map((r) => `${r.name} `)}
                        </p>
                        <p className="result-text-blue">₹{each.cost}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}

            {/* Pagination */}

            <div className="pagination">
              <a className="box-p" href="">
                &lt;
              </a>
              <a className="box-p" href="">
                1
              </a>
              <a className="box-p" href="">
                2
              </a>
              <a className="box-p" href="">
                3
              </a>
              <a className="box-p" href="">
                4
              </a>
              <a className="box-p" href="">
                5
              </a>
              <a className="box-p" href="">
                &gt;
              </a>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Filter;
