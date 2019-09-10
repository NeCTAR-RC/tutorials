# Nectar Research Cloud tutorials

This is the content that hosts the site https://tutorials.rc.nectar.org.au.

This site is built with Jekyll and hosted on Github Pages.

## Setting up a local development environment

Install the Ruby packages:
 * bundler
 * rake
and you will also need the Ruby development package for building native extensions.

For Ubuntu, this can be done with:
```sh
# apt install ruby-dev ruby-bundler rake zlib1g-dev
```

To install Jekyll and all the required dependencies, run:
```sh
# rake setup
```

Then to serve the site, you can use:
```sh
# rake preview
```

## Adding a new tutorial

A rake task will set up a skeleton tutorial for you, by typing:

```sh
# rake tutorial "Title of my new tutorial"
```

This command will create you:
 * A new directory for hosting the markdown content
 * An initial overview page for this new tutorial
 * An images directory specific to your new tutorial
 * A configuration entry in `_config.yml`

You will then need to edit the metadata for your new tutorial in `_config.yml`
under the `collections` section.

You'll need the following YAML config:

```yaml
  your-tutorial-id:
    output: true
    permalink: /:collection/:name
    title: <tutorial title>
    summary: <tutorial summary>
    categories: <one of Beginner, Intermediate, Advanced, Non-Technical or Curriculum>
    tags:
      - <tag 1>
      - <tag n>
    difficulty: <number 1-5>
    duration: <number of minutes tutorial might take>
    status: <draft or published>
    published: <YYYY-MM-DD>
    author: <Your Name>
```

Then for the content of your tutorial, each page within your tutorial should
have the following front matter:

```yaml
---
title: <page title>
order: <number 1 to n for each page>
duration: <estimated page duration>
---
```

You will need to restart the preview process for Jekyll to render your new
tutorial, but once it's done, it will be available from the root of the site.
