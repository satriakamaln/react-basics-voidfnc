// import Card, { Shelf } from "./components/Card";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

// type Teacher = {
//     name: string;
//     job: string;
//     year: number;
//     id: number;
// };

// const teachers: Teacher[] = [
//     {
//         name: "Coco",
//         job: "",
//         year: 1998,
//         id: 1
//     },
//     {
//         name: "Mid",
//         job: "Lumberjack",
//         year: 1999,
//         id: 2
//     },
//     {
//         name: "Gold",
//         job: "Gold Miner",
//         year: 2000,
//         id: 3
//     },
//     {
//         name: "Silver",
//         job: "Silver Miner",
//         year: 2001,
//         id: 4
//     }
// ];

function App() {
    return (
        <div
            style={{
                padding: "16px 32px"
            }}
        >
            <Header title="REACT BASICS" />

            {/* <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                {teachers.map((teacher) => {
                    return (
                        <Card
                            key={teacher.id}
                            year={teacher.year}
                            job={teacher.job}
                            name={teacher.name}
                        />
                    );
                })}
            </div> */}
            {/* <Shelf /> */}

            <Counter />

            <Welcome />
        </div>
    );
}

export default App;
