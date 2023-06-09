import philPageStyles from '@/styles/philosophyPapersStyles.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';


function PaperBlock () {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('./philosophyPapers.txt');
                const data = await response.json();
                setData(data);
                setLoading(false);
            }
                catch(error) {
                    setError(error);
                    setLoading(false);
                }
            }
            fetchData();
        }, []);
        if(loading) {
            return <div>Loading..</div>
        }
        if(error) {
            return <div>Error: {error.message}</div>
        }
        return (
        <div className={philPageStyles.paperWrapper}>
        {data.map((item, index) => (
        <div className={philPageStyles.paperBlock} key={index}>
            <Link className={philPageStyles.paperLink} href={item.link}>
            {item.title}
            </Link>
            <br />
            <br />
            {item.body}
        </div>
        ))}
        </div>
        );
}

export default PaperBlock