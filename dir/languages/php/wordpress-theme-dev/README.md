

## Table Of Contents
1. [Intro and HTML](#)
1. [Header & Footer](#)
1. [Intro and HTML](#)
1. [Menu With Dropdown](#)
1. [Main Post Loop](#)
1. [Single Posts & Pages](#)
1. [Sidebar Widgets](#)
1. [Post Formats](#)
1. [Custom Front Page](#)
1. [Theme Customizer](#)
1. [Implement Customizer Settings](#)


## Intro and HTML

Create Project Directory  

Create CSS, JS

Copy Bootstrap CSS and JS into project directories

Create INDEX.HTML in root project directory

Copy source code for the Bootstrap blog sample

Fix CSS reference

Add custom styles to project directoy

Fix JS reference

Create FRONT.HTML

HTML for Front.HTML

Add Font Awesoeme reference

Style for front.html

## Header & Footer

Should have an instance of wordpress installed.

Add new folder to the /wp-content/themes/

Create an INDEX.PHP

Create STYLE.CSS

Theme Info
```
```

Add 1200x900 Theme Image ('screenshot.png') to theme folder

Activate the theme

Copy JS directory

Copy CSS directory

Copy CSS from prototype to theme folder's STYLE.CSS file.

Fix the CSS reference
```
<?php bloginfo('stylesheet_url'); ?>
```

Fix the CSS reference for bootstrap.
```
<?php bloginfo('template_url'); ?>
```

Update HTML Language Attributes
```
<?php language_attributes(); ?>
```
Update Charset META
```
<?php bloginfo('charset');?>
```
Update Description
```
<?php bloginfo('description'); ?>
```
Update Title
```
<?php bloginfo('name'); ?> |
<?php is_front_page() ? bloginfo('description') : <?php wp_title(); ?>
```
Update HEAD
```
<?php wp_head(); ?>
```
Update footer
```
<?php wp_footer(); ?>
```
Create header.php file
```
```
Update Get Header
```
<?php get_header(); ?>
```
Create footer.php file
```

```
Update Get Footer
```
<?php get_footer(); ?>
```
Update Copyrights
```
&copy; <?php echo Date('Y');?> - <?php bloginfo('name'); ?>
```
Update header.php with dynamic name and description.
```
<?php bloginfo('name'); ?> |
<?php is_front_page() ? bloginfo('description') : <?php wp_title(); ?>
```








## Intro and HTML
## Menu With Dropdown
## Main Post Loop
## Single Posts & Pages
## Sidebar Widgets
## Post Formats
## Custom Front Page
## Theme Customizer
## Implement Customizer Settings











## Videos
1. [Intro and HTML](https://youtu.be/2Zt8va_6HRk)
1. [Header & Footer](https://youtu.be/fZCFRQAcqLU)
1. [Intro and HTML](https://youtu.be/2Zt8va_6HRk)
1. [Menu With Dropdown](https://youtu.be/2Zt8va_6HRk)
1. [Main Post Loop](https://youtu.be/2Zt8va_6HRk)
1. [Single Posts & Pages](https://youtu.be/2Zt8va_6HRk)
1. [Sidebar Widgets](https://youtu.be/2Zt8va_6HRk)
1. [Post Formats](https://youtu.be/2Zt8va_6HRk)
1. [Custom Front Page](https://youtu.be/2Zt8va_6HRk)
1. [Theme Customizer](https://youtu.be/2Zt8va_6HRk)
1. [Implement Customizer Settings](https://youtu.be/2Zt8va_6HRk)
