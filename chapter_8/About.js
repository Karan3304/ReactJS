import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount() {
    console.log("parent compnenet did mount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About class component</h1>
        <h2>this is OG react learning</h2>
        <UserClass name={"First"} location={"America"} />
        {/* <UserClass name={"Second"} location={"Russia"} />
        <UserClass name={"Third"} location={"China"} /> */}
      </div>
    );
  }
}

export default About;

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>this is OG react learning</h2>
//       {/* <User name={"Karan swami (function)"} location={"Indore"}/> */}
//       <UserClass name={"Karan swami (class)"} location={"America"}/>
//     </div>
//   );
// };
