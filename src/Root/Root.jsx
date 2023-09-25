import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <>
            <Header></Header>
            <main className='container mx-auto'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Root;