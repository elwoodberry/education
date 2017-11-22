# What's New In Bootstrap 4?
**Author**: [Traversy Media](https://www.youtube.com/user/TechGuyWeb)  
**URL**: [Video](https://youtu.be/N8GksI_-iIM)  
**Duration**: 12:20  
**Donate to Author**: [Patreon](https://www.patreon.com/traversymedia)  

## Table Of Contents
1. [SASS CSS Pre Compiler](#sass-css-pre-compiler) (00:00)
1. [Button Styles and Flat Design](#button-styles-and-flat-design) (00:00)
1. [Improved Grid System and Layout](#improved-grid-system-and-layout) (00:00)
1. [Flexbox](#flexbox) (00:00)
1. [Cards](#cards) (00:00)
1. [Responsive Floats](#responsive-floats) (00:00)
1. [Changes To The Navbar](#changes-to-the-navbar) (00:00)
1. [Form Changes](#form-changes) (00:00)
1. [JavaScript Plugins](#javascript-plugins) (00:00)
1. [Some Other Changes](#some-other-changes) (00:00)
## +

## SASS CSS Pre Compiler
1. Moved from LESS to SASS
1. As of v3 a SASS port was created and maintained
1. SASS is favored in the web dev community
1. Use of [Libsass](http://sass-lang.com/libsass) to compile faster
1. Layout - Moved from generators to SASS variables (ex. Disable round corners)


## Button Styles and Flat Design
1. Flat style over gradient
1. More subtle look
1. .btn-outline-* class


## Improved Grid System and Layout
1. Changes in the underlying architecture
1. 'rem' and 'em' units instead of pixels
1. New -xl tier for extra large screens
1. Grid now uses flexbox
1. offset-md-4 instead of col-offset-md-4

## Flexbox
1. Includes flexbox utilities
1. Use flexbox to manage grid columns, navigation, components and more.
1. Display utilities can transform children items into flex items
    ```
    <div class="d-flex p-2">I'm A Flexbox Container!</div>
    ```

## Cards
1. Cards replace panels, wells and thumbnails
1. Uses flexbox
1. Get same behavior with modifiers
1. As little markup as possible
1. '.card-block' instead of '.well'
1. Use '.card-title' for titles
1. Image headings

## Responsive Floats
1. Easily float elements based on grid tier
1. No need for custom media queries
1. Class examples
   * '.float-md-right'
   * '.float-lg-left'
   * '.float-sm-right'
1. New spacing utility classes available

## Changes To The Navbar
1. Flat Design
1. Uses flexbox instead of floats
1. No longer require the '.nav' base class
1. '.navbar-toggleable' classes are now applied to '.navbar'

## Form Changes
1. Dropped the '.form-horizontal' class
1. Forms using grid require the '.row' class and can use '.col-form-label' for labels
1. Use '.form-control-lg' and '.form-control-sm' to increase or decrease the size of an input control.
1. Help text now uses the '.form-text' class instead of '.help-block'

## JavaScript Plugins
1. All plugins have been re-written with ES6 syntax
1. Takes advantage of new JS enhancements
1. Universal Module Definition (UMD) support
1. jQuery 2.0 supported

## Some Other Changes
1. Bigger fonts and headings
1. Dropped support for IE8 + IE9
1. Reboot Module
1. Inversed Tables('.table-inverse')
1. 30% lighter
1. Glypicons dropped (Font Awesome Recommended)

See [Migrate](https://v4-alpha.getbootstrap.com/migration)
