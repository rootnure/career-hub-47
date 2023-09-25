import { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Job from "../Job/Job";


const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    }, []);

    return (
        <section>
            <SectionHeader
                title="Featured Jobs"
                text="Explore thousands of job opportunities with all then information you need it's your future"
            ></SectionHeader>
            <div>
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </section>
    );
};

export default FeaturedJobs;