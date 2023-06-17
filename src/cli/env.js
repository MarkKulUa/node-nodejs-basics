const parseEnv = () => {
    const env = Object.entries(process.env);

    const result = env
        .reduce((acc, [item, value]) => {

            if (item.startsWith('RSS_')) {
                acc.push(`${item}=${value}`);
            }

            return acc;
        }, [])
        .join('; ');

    console.log(result);
};

parseEnv();