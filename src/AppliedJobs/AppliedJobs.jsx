import { useLoaderData } from "react-router-dom";
import { storedAppliedJobs } from "../localstorage";
import { useEffect, useState } from "react";


const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const storedAppliedJobIds = storedAppliedJobs();
        if(jobs.length > 0){
            const jobsApplied = jobs.filter(job => storedAppliedJobIds.includes(job.id))

            setAppliedJobs(jobsApplied);

            // console.log(jobs, storedAppliedJobIds, jobsApplied);
        }
    }, [jobs])
    return (
        <section>
            <h2>Jobs I Have Applied: {appliedJobs.length}</h2>

            <ul>
                {
                    appliedJobs.map(job => <li key={job.id}>
                            <span>{job.job_title} : {job.company_name}</span>
                        </li>)
                }
            </ul>
        </section>
    );
};

export default AppliedJobs;