
import { Link } from 'react-router';
import MyContainer from './MyContainer';
import MyLink from './MyLink';

const Navbar = () => {
    return (
        <div>
            <div className='bg-slate-500 py-2 border-b border-b-slate-600'>
                <MyContainer className="flex items-center justify-between">
                    <h2 className='text-yellow-300 text-3xl'>hello</h2>
                    <ul className='flex items-center gap-2'>
                        <li>
                            <MyLink to={"/"}>Home</MyLink>
                        </li>
                        <li>
                            <MyLink to={"/aboutUs"}>About Us</MyLink>
                        </li>
                        <li>
                            <MyLink to={"/profile"}>Profile</MyLink>
                        </li>
                    </ul>
                    <Link to="/signin" className="btn btn-info">SignIn</Link>
                </MyContainer>
            </div>
        </div>
    );
};

export default Navbar;