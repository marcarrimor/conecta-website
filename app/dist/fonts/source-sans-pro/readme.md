# Source Sans Pro

Bower package for the [Source Sans Pro](https://github.com/adobe-fonts/source-sans-pro) web font.

## Usage

Add the following `HTML` to your website:

````html
<link href="/css/source-sans-pro.css" rel="stylesheet" type="text/css">
````

Alternatively, you can use the minified version:

````html
<link href="/css/source-sans-pro.min.css" rel="stylesheet" type="text/css">
````

Use the following `CSS` to integrate the font into your website:

````css
font-family: "Source Sans Pro", serif;
````

## Customization

To compile your own stylesheet, open `scss/source-sans-pro.scss` and remove any font styles you're not using:

````scss
@import "extra-light";
@import "extra-light-italic";
@import "light";
@import "light-italic";
@import "regular";
@import "italic";
@import "semi-bold";
@import "semi-bold-italic";
@import "bold";
@import "bold-italic";
@import "black";
@import "black-italic";
````

To generate an **unminified** stylesheet and source map file, run the following command:

````bash
gulp
````

To generate a **minified** stylesheet, run the following command:

````bash
gulp --production
````