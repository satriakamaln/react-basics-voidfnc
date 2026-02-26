import { useSearchParams } from "react-router";
const ProductListPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSortValueChange = (value: string) => {
        //ganti seacrh params 'sort' dengan value 'price-asc'
        searchParams.set("sort", value);
        setSearchParams(searchParams);
    };
    return (
        <div>
            <h1>Product List Page</h1>
            <ul>
                <li>sort:{searchParams.get("sort")}</li>
                <li>name:{searchParams.get("name")}</li>
            </ul>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "8px"
                }}
            >
                <button onClick={() => handleSortValueChange("price-desc")}>
                    Sort Price ASC
                </button>
                <button onClick={() => handleSortValueChange("price-asc")}>
                    Sort Price ASC
                </button>
                <button onClick={() => handleSortValueChange("popular")}>
                    Sort Price ASC
                </button>
            </div>
        </div>
    );
};

export default ProductListPage;
