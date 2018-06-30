import R from 'ramda';

export function getHashTag(tag) {
    return '#' + tag.name.toLowerCase();
}

export function getTagsString(tags) {
    const tagsWithHashTag = R.map(getHashTag, tags);
    return R.join(' ', tagsWithHashTag);
}
