import { NextPage } from 'next';
import Link from 'next/link';

const About: NextPage = () => {
    return (
        <div>
            <h1>About Page</h1>
            <Link href='/'>
                <a>Go back to landing page</a>
            </Link>
        </div>
    );
}

export default About;