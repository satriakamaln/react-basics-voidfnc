import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const registerFormSchema = z.object({
    username: z
        .string()
        .min(3, "Username Minimal 3 Karakter")
        .max(10, "Username Maksimal 10 Karakter"),
    password: z.string().min(8, "Password Minimal 8 Karakter"),
    age: z.coerce.number().min(18)
});

type RegisterFormSchema = z.infer<typeof registerFormSchema>;

const RHFPage = () => {
    const form = useForm<RegisterFormSchema>({
        resolver: zodResolver(registerFormSchema)
    });

    const handleRegisterUser = (values: RegisterFormSchema) => {
        alert("Form submitted!");
        console.log(values);
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
                    <input type="password" {...form.register("password")} />
                </label>
                <span style={{ color: "red" }}>
                    {form.formState.errors.password?.message}
                </span>
                <label>
                    Age : <input type="number" {...form.register("age")} />
                </label>
                <span style={{ color: "red" }}>
                    {form.formState.errors.age?.message}
                </span>
                <button type="submit" style={{ width: "fit-content" }}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default RHFPage;
