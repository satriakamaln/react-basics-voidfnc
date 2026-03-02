import useFetchEmployees from "../api/useFetchEmployees";
const EmployeesPage = () => {
    const { employees, fetchEmployees, employeesIsLoading, fetchingError } =
        useFetchEmployees();

    return (
        <div>
            <h1>Employees Page</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => {
                        return (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <button disabled={employeesIsLoading} onClick={fetchEmployees}>
                Fetch Employees
            </button>
            {employeesIsLoading && <p>Loading...</p>}
            {fetchingError && <p style={{ color: "red" }}>{fetchingError}</p>}
        </div>
    );
};

export default EmployeesPage;
