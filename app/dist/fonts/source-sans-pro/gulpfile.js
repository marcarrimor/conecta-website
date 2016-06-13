var elixir = require('laravel-elixir');

elixir.config.assetsPath = '';
elixir.config.publicPath = '';
elixir.config.css.sass.folder = 'scss'

elixir(function(mix) {
  if(!elixir.config.production) {
    mix.sass('source-sans-pro.scss');
  } else {
    mix.sass('source-sans-pro.scss', 'css/source-sans-pro.min.css');
  }
});
