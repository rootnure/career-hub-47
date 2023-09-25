import PropTypes from 'prop-types';

const SectionHeader = ({title, text}) => {
    return (
        <div className="text-center">
            <h2 className="text-5xl mb-4 font-bold">{title}</h2>
            <p className='mb-4'>{text}</p>
        </div>
    );
};

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string
}

export default SectionHeader;