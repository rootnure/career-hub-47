import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { jobId } = useParams();
    const job = jobs.find(singleJob => singleJob.id === jobId);

    const { job_title, company_name } = job || {};

    const handleApplyJob = () => {
        const isAlreadyApplied = saveJobApplication(job.id);
        isAlreadyApplied ? toast.warn("Already Applied") : toast.success("Applied Successfully");
    }

    return (
        <section className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-3 border">
                <h2 className="text-4xl">Job Details of: {job_title}</h2>
                <p>{company_name}</p>
                <h3 className="text-3xl">More info on the way</h3>
            </div>
            <div className="border">
                <h3 className="text-3xl">Job Info Coming soon</h3>
                <button onClick={handleApplyJob} className="btn btn-primary w-full normal-case">Apply Job</button>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="colored"
            />
        </section>
    );
};

export default JobDetails;