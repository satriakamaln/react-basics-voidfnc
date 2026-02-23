type CardProps = {
    name?: string;
    year: number;
    job?: string;
};

const Card = (props: CardProps) => {
    const { name = "Anonymous", year, job } = props;
    return (
        <div className="card">
            <h3>Name: {name}</h3>
            <p>Birth Year: {year}</p>
            {job ? <p>Job: {job}</p> : null}
        </div>
    );
};

const Button = () => {
    return <button>Click Me</button>;
};

const Shelf = () => {
    return (
        <>
            <div className="shelf">
                <h2>Shelf Component</h2>
                <p>This is a simple shelf component.</p>
                <Button />
            </div>
        </>
    );
};

export default Card;
export { Shelf, Button };
