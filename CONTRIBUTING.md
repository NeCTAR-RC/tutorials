# Contributing

Thanks for contributing to our `NeCTAR/tutorials` repository. Below are ways you can help make the Nectar tutorials better. 

You will need a GitHub account to contribute to `NeCTAR/tutorials`.

The easiest way for you to help us is by **raising an issue**. We welcome pull requests with your proposed edits. For contributing other that by raising an issue, you will need to be familiar with the git concepts of forking, branches and pull requests. **Minor edits** can be done using the online editor of your GitHub account. **Substantial edits**, or indeed whole **new tutorials** require that you set up the preview environment. 

## Raise an issue 

The easiest way to help improve the Nectar tutorials is by raising an issue in our repository at https://github.com/NeCTAR-RC/tutorials. 

If you find an issues that needs to be resolved, please have a look through the [list of existing issues](https://github.com/NeCTAR-RC/tutorials/issues) to see whether your issues hasn't already been reported. If it has, or a closely related issues exists, please add your comments to the existing issue. 

If your issue isn't already listed, then create a New Issue. Provide details of your suggestion and include the tutorial name and page to which your suggestion applies. One of our technical writers will review your suggestion and resolve it if they can. They may contact you if they need some more clarification. 



## Fork and Branch

If you would like to make a minor or substantial contribution, please follow one of the workflows below.

### Minor edits

If you want to contribute minor edits (say a correcting typo), then you can follow these steps. We're assuming that you have a GitHub account, and that you'll do the edits using the GitHub online file editor. If you intend to make substantial edits (e.g. across multiple pages, or adding a new tutorial) then we recommend you use the *Substantial edits* workflow ([below](#substantial-edits-and-new-tutorials))

- Fork our repository *NeCTAR-RC/tutorials* to your own GitHub account. You do this by navigating to https://github.com/NeCTAR-RC/tutorials and clicking the "Fork" button in the top right hand side of the screen. 

- Make the edits in your fork to the first page you want to contribute to. When this edit is done, commit it to your repository making sure that you create a new branch with a *meaningful branch name*.
  :heavy_check_mark: good names: *fix_issue12*, *grammar_fixes_launching*
  (referencing an existing issue, or describing your intention)

  :x: not-so-good names: *my_fixes*, *jims-branch*, *nov-2018*

***:warning:GitHub  will open the "_Open a pull request_" page after you commit your edits to a new branch. Creating a pull request here will result in a pull request in your fork. This is not what you or we want. You should ignore this page, and create a pull request as described below.***

If you need to make further changes or additions as part of your proposed edit, then you need to collect those edits into the same _branch_.

- On the tab `<> Code` in your fork, switch to the Branch you named meaningfully above. 
- Make further changes.
- Commit each change into your branch. 
- Do this until you think your edits are complete. 



You are now ready to create a pull request. 

- On the tab `Pull requests` in your fork, click the button `New pull request`. 
- On the page "Comparing changes" make sure the base repository `NeCTAR-RC/tutorials` is selected and the branch `base:master` on the left-hand-side.
- On the right-hand-side make sure the head repository is set to the name of `your-account/your-fork` and compare is set to `your-branch` (the meaningfully named one from above).

If your changes are compatible with our master branch, you'll see ​":heavy_check_mark: Able to merge".

- Click the "`Create pull request`" button.

This will create a pull request in our repository *NeCTAR-RC/tutorials* and it will alert our technical writer team. For any non-trivial edits, be prepared to answer questions about your edits and make additional commits, in the pull requests discussion. 

### Substantial edits and new tutorials

To contributed substantial edits or new tutorials, we recommend that you [set up a local development environment](#setting-up-a-local-development-environment) , so you can visualise and fine tune your work before you submit it for review. You'll need some of your `git` skills with this.

- Fork our repository *NeCTAR-RC/tutorials* to your own GitHub account. You do this by navigating to https://github.com/NeCTAR-RC/tutorials and clicking the "Fork" button in the top right hand side of the screen. 

- Clone your fork to your local computer using `git clone`.
- Step through the setup routine ([below](#setting-up-a-local-development-environment)) to set up your computer for local previews of your edits. 
- Create a meaningfully named branch (e.g. using `git checkout -b [branch-name]` ).
- Make the edits using your favourite markdown editor.
- If you intend to add a whole new tutorial, use the instructions for [adding tutorials below](#adding-a-new-tutorial).
- Commit your changes to your branch.
- Preview your changes using the local preview server that you set up above.
- When you are happy with your edits or additions, push them to your fork (e.g. using `git push origin [branch-name]`).

You are now ready to create a pull request. 

- On the tab "`Pull requests`" in your fork, click the button "`New pull request`". 
- On the page "Comparing changes" make sure the base repository `NeCTAR-RC/tutorials` is selected and the branch `base:master` on the left-hand-side.
- on the right-hand-side make sure the head repository is set to the name of `your-account/your-fork` and compare is set to `your-branch` (the meaningfully named one from above).

If your changes are compatible with our master branch, you'll see ​":heavy_check_mark: Able to merge".

- click the "`Create pull request`" button.

This will create a pull request in our repository *NeCTAR-RC/tutorials* and it will alert our technical writer team. Please be prepared to answer questions about your edits and make additional commits, in the pull requests discussion. 

### Setting up a local development environment

Install the Ruby packages:

- bundler
- rake
  and you will also need the Ruby development package for building native extensions.

For Ubuntu, this can be done with:

```sh
# apt install ruby-dev ruby-bundler rake zlib1g-dev make gcc g++
```

To install Jekyll and all the required dependencies, run:

```sh
# rake setup
```

Then to serve the site, you can use:

```sh
# rake preview
```

### Adding a new tutorial

A rake task will set up a skeleton tutorial for you, by typing:

```sh
# rake tutorial "Title of my new tutorial"
```

This command will create you:

- A new directory for hosting the markdown content.
- An initial overview page for this new tutorial.
- An images directory specific to your new tutorial.
- A configuration entry in `_config.yml`.

You will then need to edit the metadata for your new tutorial in `_config.yml`
under the `collections` section.

You'll need the following YAML config:

```yaml
  your-tutorial-id:
    output: true
    permalink: /:collection/:name
    title: <tutorial title>
    summary: <tutorial summary>
    category: <one of Beginner, Intermediate, Advanced, Non-Technical or Curriculum>
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

