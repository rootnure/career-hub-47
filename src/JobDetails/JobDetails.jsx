import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { jobId } = useParams();
    const job = jobs.find(singleJob => singleJob.id === jobId);

    const { job_title } = job || {};

    return (
        <section>
            <h2 className="text-4xl">Job Details of: {job_title}</h2>
        </section>
    );
};

export default JobDetails;