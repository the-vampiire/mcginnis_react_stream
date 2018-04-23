module.exports = {
    "extends": "airbnb",
    "rules": {
        // ignore the /style/ import variable using in style-loader
        "no-unused-vars": ["error", { "varsIgnorePattern": "style" }]
    }
    
};