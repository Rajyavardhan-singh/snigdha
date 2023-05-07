// import React from "react";
// import axios from "axios";
// import "../Styles/Details.css";
// import queryString from "query-string";
// import { useParams } from 'react-router-dom';

// class Details extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       resDetail: [],
//     };
//   }

//   componentDidMount() {
//     const qs =queryString.parse(window.location.search);
//     const { id } = qs;

//     axios({
//       url: `http://localhost:5500/resDetails/${id}`,
//       method: "Get",
//       headers: { "Content-Type": "application/JSON" },
//     })
//       .then((res) => {
//         this.setState({ resDetail: res.data.restaurant });
//       })
//       .catch((err) => console.log(err));
//   }

//   render() {
//     const { resDetail } = this.state;
//     console.log(resDetail);

//     return (
//       <div>
//         {/* NavBar */}

//         <header>
//           <span id="logo">e!</span>
//           <span className="login-signup">
//             <button type="button" className="login">
//               Login
//             </button>
//             <button type="button" className="signup">
//               Create an account
//             </button>
//           </span>
//         </header>

//         {/* BodyPart */}

//         <span>{resDetail.name}</span>
//       </div>
//     );
//   }
// }

// export default Details;



import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/Details.css";
import queryString from "query-string";
import { useParams } from 'react-router-dom';

const Details = () => {
  const [resDetail, setResDetail] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    // const qs = queryString.parse(window.location.search);
  

    axios({
      url: `http://localhost:5500/resDetails/${id}`,
      method: "Get",
      headers: { "Content-Type": "application/JSON" },
    })
      .then((res) => {
        setResDetail(res.data.restaurant[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(resDetail);

  return (
    <div>
      {/* NavBar */}

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

      {/* BodyPart */}

      <span>{resDetail.name}</span>
    </div>
  );
}

export default Details;
