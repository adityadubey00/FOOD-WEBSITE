module.exports = {
    presets: [
        // This is the first preset: '@babel/preset-env'
        ['@babel/preset-env', { targets: { node: 'current' } }],
        
        // This is the second preset: '@babel/preset-react'
        ['@babel/preset-react', { runtime: 'automatic' }]
    ],
};
