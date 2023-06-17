const parseArgs = () => {
    const args = process
        .argv
        .slice(2);

    const result = args
        .reduce((acc, item, key, arr) => {

            if (item.startsWith('--')) {
                acc.push(`${item.replace('--', '')} is ${arr[key+1]}`);
            }

            return acc;
        }, [])
        .join(', ');

    console.log(result);
};

parseArgs();