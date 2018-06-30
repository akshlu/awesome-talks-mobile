import R from 'ramda';

function addHashTag(tag) {
    return '#' + tag.name.toLowerCase();
}

export function getTagsString(tags) {
    const tagsWithHashTag = R.map(addHashTag, tags);
    return R.join(' ', tagsWithHashTag);
}
