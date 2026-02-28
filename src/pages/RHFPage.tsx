import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const registerFormSchema = z
    .object({
        username: z
            .string()
            .min(3, "Username Minimal 3 Karakter")
            .max(10, "Username Maksimal 10 Karakter"),
        password: z.string().min(8, "Password Minimal 8 Karakter"),
        repeatPassword: z.string(),
        age: z.coerce.number().min(18),
        dob: z.coerce
            .date()
            .min(new Date("1990-01-01"), "Tanggal Lahir Minimal 1 Januari 1990")
            .max(new Date(), "Tanggal Lahir Tidak Boleh Lebih Dari Hari Ini"),
        gender: z.enum(["male", "female"]),
        isPregnant: z.boolean().optional()
    })
    .superRefine((arg, ctx) => {
        if (arg.password !== arg.repeatPassword) {
            ctx.addIssue({
                code: "custom",
                path: ["repeatPassword"],
                message: "Password tidak sama"
            });
        }
    });

type RegisterFormSchema = z.infer<typeof registerFormSchema>;

const RHFPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [submittedData, setSubmittedData] = useState<RegisterFormSchema[]>(
        []
    );

    const form = useForm<RegisterFormSchema>({
        resolver: zodResolver(registerFormSchema)
    });

    const handleRegisterUser = (values: RegisterFormSchema) => {
        setSubmittedData([...submittedData, values]);
        alert("Form submitted!");
        console.log(values);
        console.log(values.username);
        console.log(values.password);
        console.log(values.repeatPassword);
        console.log(values.age);
        console.log(values.dob);
        console.log(values.gender);
        console.log(values.isPregnant);

        //setelah submit form, reset form
        form.reset();
    };
    return (
        <div>
            <h1>RHF Page</h1>

            <form
                onSubmit={form.handleSubmit(handleRegisterUser)}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    maxWidth: "50%"
                }}
            >
                <label>
                    Username :{" "}
                    <input type="text" {...form.register("username")} />
                </label>
                <span style={{ color: "red" }}>
                    {form.formState.errors.username?.message}
                </span>
                <label>
                    Password :{" "}
                    <input
                        type={showPassword ? "text" : "password"}
                        {...form.register("password")}
                    />
                </label>
                <span style={{ color: "red" }}>
                    {form.formState.errors.password?.message}
                </span>
                <label>
                    Repeat Password :{" "}
                    <input
                        type={showPassword ? "text" : "password"}
                        {...form.register("repeatPassword")}
                    />
                </label>
                <span style={{ color: "red" }}>
                    {form.formState.errors.repeatPassword?.message}
                </span>
                <label>
                    <input
                        type="checkbox"
                        onChange={(event) =>
                            setShowPassword(event.target.checked)
                        }
                    />
                    Show Password
                </label>
                <label>
                    Age : <input type="number" {...form.register("age")} />
                </label>
                <span style={{ color: "red" }}>
                    {form.formState.errors.age?.message}
                </span>
                <label>
                    Date of Birth :{" "}
                    <input type="date" {...form.register("dob")} />
                </label>
                <span style={{ color: "red" }}>
                    {form.formState.errors.dob?.message}
                </span>

                <label>
                    <select {...form.register("gender")}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
                {form.watch("gender") === "female" && (
                    <label>
                        <input
                            type="checkbox"
                            {...form.register("isPregnant")}
                        />
                        Is Pregnant?
                    </label>
                )}

                <button type="submit" style={{ width: "fit-content" }}>
                    Submit
                </button>
            </form>

            {submittedData.length > 0 && (
                <div>
                    <h2>Submitted Data:</h2>
                    {submittedData.map((data, index) => (
                        <div key={index} className="card">
                            <h3>Data #{index + 1}</h3>
                            <p>Username: {data.username}</p>
                            <p>Password: {data.password}</p>
                            <p>Age: {data.age}</p>
                            <p>Gender: {data.gender}</p>
                            <p>Date of Birth: {data.dob.toDateString()}</p>
                            {data.gender === "female" && (
                                <p>
                                    Is Pregnant:{" "}
                                    {data.isPregnant ? "Yes" : "No"}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RHFPage;
