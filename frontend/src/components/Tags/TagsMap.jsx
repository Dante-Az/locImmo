import PropTypes from 'prop-types';
import Tags from './Tags';

export default function TagsMap(props) {
    const { tag } = props;
    const tags = tag.map((tagList, index) => (
        <Tags key={index} tag={tagList} />
    ));
    return <>{tags}</>;
}

TagsMap.propTypes = {
    tag: PropTypes.arrayOf(PropTypes.array).isRequired,
};
