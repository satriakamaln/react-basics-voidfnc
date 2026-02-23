import Card, { Shelf } from "./components/Card";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

type Teacher = {
    name: string;
    job: string;
    year: number;
    id: number;
};

const teachers: Teacher[] = [
    {
        name: "Coco",
        job: "Bitcoin Trader",
        year: 1998,
        id: 1
    },
    {
        name: "Mid",
        job: "Lumberjack",
        year: 1999,
        id: 2
    },
    {
        name: "Gold",
        job: "Gold Miner",
        year: 2000,
        id: 3
    },
    {
        name: "Silver",
        job: "Silver Miner",
        year: 2001,
        id: 4
    }
];

function App() {
    return (
        <>
            <Header title="REACT BASICS" />
            <Welcome />
            <h1>Selamat Datang</h1>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                {teachers.map((teacher) => {
                    return (
                        <Card
                            name={teacher.name}
                            year={teacher.year}
                            job={teacher.job}
                            key={teacher.id}
                        />
                    );
                })}
            </div>
            <Shelf />
        </>
    );
}

export default App;
