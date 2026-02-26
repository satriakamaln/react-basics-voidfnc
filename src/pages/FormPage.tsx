import { use, useRef, useState } from "react";

const inputStyle = {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px"
};

const buttonStyle = {
    padding: "10px 20px",
    marginTop: "8px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
};

const FormPage = () => {
    //uncontrolled component/input
    const inputRef = useRef<HTMLInputElement>(null);
    const inputEmailRef = useRef<HTMLInputElement>(null);

    //controlled component/input
    const [fullNameInput, setFullName] = useState("");
    const [emailInput, setEmail] = useState("");

    const handleSubmit = () => {
        const fullNameFormValue = inputRef.current?.value;
        const emailFormValue = inputEmailRef.current?.value;
        alert(`Full Name: ${fullNameFormValue}, Email: ${emailFormValue}`);
    };

    return (
        <div>
            <h1>Form Page</h1>
            <h3>{fullNameInput}</h3>

            <form
                style={{
                    maxWidth: "50%",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px"
                }}
            >
                <label htmlFor="name">Name</label>
                <input
                    onChange={(event) => setFullName(event.target.value)}
                    id="name"
                    type="text"
                    name="name"
                    style={inputStyle}
                />
                <label htmlFor="email">Email</label>
                <input
                    ref={inputEmailRef}
                    id="email"
                    type="email"
                    name="email"
                    style={inputStyle}
                />
                <button
                    style={buttonStyle}
                    type="submit"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormPage;
