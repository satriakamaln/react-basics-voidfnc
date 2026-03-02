import { useState } from "react";

type EmployeeResponse = {
    id: number;
    name: string;
};

const useFetchEmployees = () => {
    const [employees, setEmployees] = useState<EmployeeResponse[]>([]);
    const [employeesIsLoading, setEmployeesIsLoading] = useState(false);
    const [fetchingError, setFetchingError] = useState("");

    const fetchEmployees = async () => {
        try {
            setEmployeesIsLoading(true); // toggle loading mode: ON
            const response = await fetch("http://localhost:2000/employees", {
                method: "GET"
            });

            const responseJson = (await response.json()) as EmployeeResponse[];
            setEmployees(responseJson);

            // toggle loading mode: OFF
        } catch (error) {
            setFetchingError((error as TypeError).message);
        } finally {
            setEmployeesIsLoading(false);
        }
    };

    return {
        fetchEmployees,
        employeesIsLoading,
        fetchingError,
        employees
    };
};

export default useFetchEmployees;
