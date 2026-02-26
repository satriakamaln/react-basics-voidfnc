import { Link } from "react-router";

const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Baca Syarat dan Ketentuan</p>
            <Link to="/product/contoh-product">Product</Link>
            <br />
            <Link to="/terms">Halaman Terms</Link>
            <br />
            <Link to="/product-list">Halaman Product List</Link>
            <br />
        </div>
    );
};

export default HomePage;
