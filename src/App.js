import { useState } from "react";

const initialRobots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  },
];

export default function App() {
  const [robots, setRobots] = useState(initialRobots);

  return (
    <div className="tc">
      <Title></Title>
      <Form robots={robots}></Form>
      <RobotsCardList robots={robots}></RobotsCardList>
    </div>
  );
}

function Title() {
  return (
    <div>
      <h3>Robofriends</h3>
      <p>By Popoola.dev</p>
    </div>
  );
}

function Form({ robots }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search Robots..."
        value={searchTerm}
        onChange={handleInputChange}
      ></input>
      <ul>
        {robots
          .filter((robots) =>
            robots.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((robot) => (
            <RobotCard key={robot.id}>{robot}</RobotCard>
          ))}
      </ul>
    </form>
  );
}

function RobotsCardList({ robots }) {
  return (
    <ul>
      {robots.map((robot) => (
        <RobotCard robot={robot} key={robot.id} />
      ))}
    </ul>
  );
}

function RobotCard({ robot }) {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="photo1" src={`https://robohash.org/${robot.id}?200x200`}></img>
      <div>
        <h2>{robot.name}</h2>
        <p>{robot.email}</p>
      </div>
    </div>
  );
}
