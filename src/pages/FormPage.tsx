// import { Ref } from "react";
import { useState } from "react";

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
    // const inputRef = useRef<HTMLInputElement>(null);
    // const inputEmailRef = useRef<HTMLInputElement>(null);

    const [fullNameErrorMessage, setFullNameErrorMessage] = useState("");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

    //controlled component/input
    const [fullNameInput, setFullNameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // const fullNameFormValue = inputRef.current?.value;
        // const emailFormValue = inputEmailRef.current?.value;
        // alert(`Full Name: ${fullNameFormValue}, Email: ${emailFormValue}`);

        const fullNameValidation = fullNameInput.length < 3;
        const passwordValidation = passwordInput.length < 8;

        if (fullNameValidation) {
            setFullNameErrorMessage(
                "Full name must be at least 3 characters long."
            );
        } else {
            setFullNameErrorMessage("");
        }

        if (passwordValidation) {
            setPasswordErrorMessage(
                "Password must be at least 8 characters long."
            );
        } else {
            setPasswordErrorMessage("");
        }

        if (!fullNameValidation && !passwordValidation) {
            alert(`Full Name: ${fullNameInput}, Password: ${passwordInput}`);
        }
    };

    return (
        <div>
            <h1>Form Page</h1>
            <h3>Full Name: {fullNameInput}</h3>
            <h3>Password: {passwordInput}</h3>

            <form
                onSubmit={handleSubmit}
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
                    style={inputStyle}
                    onChange={(event) => {
                        setFullNameInput(event.target.value);

                        const fullNameValidation =
                            event.target.value.length < 3;

                        if (fullNameValidation) {
                            setFullNameErrorMessage(
                                "Full name must be at least 3 characters long."
                            );
                        } else {
                            setFullNameErrorMessage("");
                        }
                    }}
                    id="name"
                    type="text"
                    name="name"
                    value={fullNameInput}
                />
                <span style={{ color: "red" }}>{fullNameErrorMessage}</span>
                <label htmlFor="password">Password</label>
                <input
                    style={inputStyle}
                    onChange={(event) => {
                        setPasswordInput(event.target.value);

                        const passwordValidation =
                            event.target.value.length < 8;

                        if (passwordValidation) {
                            setPasswordErrorMessage(
                                "Password must be at least 8 characters long."
                            );
                        } else {
                            setPasswordErrorMessage("");
                        }
                    }}
                    id="password"
                    type="password"
                    name="password"
                    value={passwordInput}
                />
                <span style={{ color: "red" }}>{passwordErrorMessage}</span>
                <button style={buttonStyle} type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormPage;
