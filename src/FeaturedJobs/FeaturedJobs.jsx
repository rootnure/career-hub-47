import { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Job from "../Job/Job";


const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    // not the effective way. just doing as a beginner

    const [dataLength, setDataLength] = useState(4);

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">                {
                jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
            }
            </div>
            <div className={`flex justify-center ${jobs.length === dataLength && 'hidden'}`}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary my-4 normal-case">Show All Jobs</button>
            </div>
        </section>
    );
};

export default FeaturedJobs;