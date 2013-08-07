# tipsy

Facebook-style tooltip plugin for jQuery

(c) 2008-2010 Jason Frame (jason@onehackoranother.com)

Released under The MIT License.

## Description:

tipsy is a simple jQuery plugin for generating Facebook-style tooltips.

It's used by Twitter, Github, Slideshare and Bitbucket, amongst others.

## Homepage:

http://onehackoranother.com/projects/jquery/tipsy

## Source:

Hosted at GitHub; browse at:

  http://github.com/jaz303/tipsy/tree/master

Or clone from:

    git://github.com/jaz303/tipsy.git

## Usage: (with Browserify)

1. npm install tipsy-browserify -S

2. require('tipsy-browserify')(jQuery); or
 
```
var tipsy = require('tipsy-browserify');
if (typeof jQuery !== 'undefined') {
  tipsy(jQuery);
}
```
## A note on forking:

By forking this project you hereby grant permission for any commits to your fork to be
merged back into this repository and, with attribution, be released under the terms of
the MIT License.
