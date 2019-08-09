# Nectar Research Cloud tutorials

This is the content that hosts the site https://tutorials.rc.nectar.org.au.

This site is built with Jekyll and hosted on Github Pages.

## Setting up a local development environment

Install:
 * Ruby bundler

To install Jekyll and all the required dependencies, run:
```sh
# rake setup
```

Then to serve the site, you can use:
```sh
# rake preview
```

## Adding a new tutorial

Add the metadata to `_config.yml` under the `collections` section.

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

Assuming the ID of `your-tutorial-id`, create a top level directory of the same name, but **prefixed with an underscore**.

Each page within your tutorial should have the following front matter:

```yaml
---
title: <page title>
order: <number 1 to n for each page>
duration: <estimated page duration>
---
```
