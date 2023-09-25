const storedAppliedJobs = () => {
    if(localStorage.getItem('appliedJobs')){
        return JSON.parse(localStorage.getItem('appliedJobs'));
    }
    return [];
}

const saveJobApplication = id => {
    const appliedJobs = storedAppliedJobs();
    if (!appliedJobs.find(jobId => jobId === id)) {
        appliedJobs.push(id);
        localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
        return false;
    }
    return true;
}

export { saveJobApplication, storedAppliedJobs }