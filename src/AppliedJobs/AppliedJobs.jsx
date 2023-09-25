import { useLoaderData } from "react-router-dom";
import { storedAppliedJobs } from "../localstorage";
import { useEffect, useState } from "react";


const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobsOnType, setDisplayJobsOnType] = useState([]);

    const handleJobsFilter = filter => {
        switch (filter) {
            case 'all':
                setDisplayJobsOnType(appliedJobs);
                break;
            case 'remote':
                setDisplayJobsOnType(appliedJobs.filter(job => job.remote_or_onsite === 'Remote'))
                break;
            case 'onsite':
                setDisplayJobsOnType(appliedJobs.filter(job => job.remote_or_onsite === 'Onsite'))
                break;
            default:
                setDisplayJobsOnType([]);
        }
    }

    useEffect(() => {
        const storedAppliedJobIds = storedAppliedJobs();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedAppliedJobIds.includes(job.id))

            setAppliedJobs(jobsApplied);
            setDisplayJobsOnType(jobsApplied);

            // console.log(jobs, storedAppliedJobIds, jobsApplied);
        }
    }, [jobs]);
    return (
        <section>
            <h2 className="text-4xl font-bold">Jobs I Have Applied: {appliedJobs.length}</h2>

            <details className="dropdown relative">
                <summary className="m-1 btn">Remote or Onsite</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 absolute top-16">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>

            <ul>
                {
                    displayJobsOnType.map(job => <li key={job.id}>
                        <span>{job.job_title} : {job.company_name} : {job.remote_or_onsite}</span>
                    </li>)
                }
            </ul>
        </section>
    );
};

export default AppliedJobs;