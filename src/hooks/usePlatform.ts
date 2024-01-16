import usePlaforms from '../hooks/usePlatforms';

const usePlatform = (id?: number) => {
    const { data } = usePlaforms();

    return data?.results.find(platform => platform.id === id);
}

export default usePlatform;