
// 
module.exports = {
   // here is a module with the rules that i am interested
    module:{
        rules:[
            {
            // if run into a file webpack  and that file ends with .js
            test:/\.js$/,
            // don't include files that are in the node_modules folder
            exclude: /node_modules/,
            // when you encounter the .js file do the following
            use:{
                // i want you to use the babel loader
                // the loader works with babel-core
                loader: 'babel-loader',
                // babel-loader and babel-core work with babel/preset-react
                options: {
                    presets:['@babel/preset-react']
                }
            }
            }
        ]
    }
}