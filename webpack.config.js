var config = {
   entry: './js/main.js',
	
   output: {
      path:'./',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8076
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         },
          {
            test: /\.css$/, // Only .css files
            loader: 'style!css' // Run both loaders
          }
      ]
   }
}

module.exports = config;