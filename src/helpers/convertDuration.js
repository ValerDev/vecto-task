export const converDuration = (duration) => {
    const result = new Date(duration * 1000)
        .toISOString()
        .slice(11, 19)
        .split(':');

    const hours = parseInt(result[0], 10) || '';
    const minutes = parseInt(result[1], 10) || '';
    const seconds = parseInt(result[2], 10) || '';

    return `${hours &&`${hours}h`} ${minutes && `${minutes}m`} ${seconds && `${seconds}s`}`;
};