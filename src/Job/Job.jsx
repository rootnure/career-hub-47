import PropTypes from 'prop-types';
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-base-100 border p-6">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className='space-x-4'>
                    <button className='px-4 py-2 font-bold border rounded text-[#7E90Fe] border-[#7E90FE]'>{remote_or_onsite}</button>
                    <button className='px-4 py-2 font-bold border rounded text-[#7E90Fe] border-[#7E90FE]'>{job_type}</button>
                </div>
                <div className='flex gap-x-16'>
                    <h2 className='flex items-center'><MdOutlineLocationOn className='text-2xl me-2'></MdOutlineLocationOn>{location}</h2>
                    <h2 className='flex items-center'><AiOutlineDollar className='text-2xl me-2'></AiOutlineDollar>{salary}</h2>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary normal-case">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired
}

export default Job;