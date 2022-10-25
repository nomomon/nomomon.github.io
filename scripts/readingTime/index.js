function readingTime(text) {
    const wordsPerMinute = 200;
    const noOfWords = text.trim().split(/\s+/g).length;
    const minutes = noOfWords / wordsPerMinute;
    const readTime = Math.ceil(minutes);
    return readTime;
}

export default readingTime;