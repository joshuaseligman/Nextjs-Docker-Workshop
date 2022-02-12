import { NextPage } from 'next';
import Link from 'next/link';

import ButtonCounter from '../components/buttonCounter';

const Home: NextPage = () => {
    return (
        <div>
            <h1>Hello Next.js</h1>
            <ButtonCounter />
            <Link href='/about'>
                <a>About page</a>
            </Link>
        </div>
    );
}

export default Home;