module.exports = {
    plugins: {
        'postcss-cssnext': {
            features: {
                customProperties: {
                    variables: require('./react-toolbox.variables')
                },
            }
        }
    },
};

