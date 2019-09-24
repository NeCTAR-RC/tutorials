# Contributing

Thanks for contributing to our `NeCTAR/tutorials`-repository. Below are ways you can help make the Nectar tutorials better. 

## Raise an issue 

The easiest way to help improve the Nectar tutorials is by raising an issue at https://github.com/NeCTAR-RC/tutorials/issues. Provide details of your suggestion and include the tutorial name and page to which your suggestions applies. one of our technical writers will review your suggestion and resolve it if they can. They may contact you if they need some more clarification. 



## Fork and Branch

I you would like to contribute substantially, please follow one of the workflows below.

### Minor edits

If you want to contribute minor edits (say a correcting typo), then you can follow these steps. We're assuming that you have a github account, and that you'll do the edits using the github online file editor. If you intend to make substantial edits (e.g. across multiple pages, or adding a new tutorial) then we recommend you use the *Substantial edits* workflow (below)

- Fork our repository *NeCTAR-RC/tutorials* to your own Github account. You do this by navigating to https://github.com/NeCTAR-RC/tutorials and clicking the "Fork" button in the top right hand side of the screen. 
- Make the edits in your fork to the first page you want to contribute to. When this edit is done, commit it to your repository making sure that 
  - you create a new branch with a *meaningful branch name*
  

***:warning: Github will open the _Open a pull request_ page after you commit your edits to a new branch. Creating a pull request here will result in a pull request in your fork. This is not what you or we want. You should ignore this page, and create a pull request as described below.***

If you need to make further changes or additions as part of your proposed edit, then you need to collect those edits into the same _branch_ 

- On the tab "`<> Code`" in your fork, switch to the Branch you named meaningfully above. 
- Make further changes
- Commit each change into your branch. 
- Do this until you think your edits are complete. 



You are now ready to create a pull request. 

- On the tab "`Pull requests`" in your fork, click the button "`New pull request`" 
- On the page "Comparing changes" make sure the base repository `NeCTAR-RC/tutorials` is selected and the branch `base:master` on the left-hand-side
- on the right-hand-side make sure the head repository is set to the name of `your-account/your-fork` and compare is set to `your-branch` (the meaningfully named one from above)

If your changes are compatible with our master branch, you'll see ​":heavy_check_mark: Able to merge"

- click the "`Create pull request`" button

This will create a pull request in our repository *NeCTAR-RC/tutorials* and it will alert our technical writer team. For any non-trivial edits, be prepared to answer questions about your edits, in the pull requests discussion. 

### Substantial edits and new tutorials

To contributed substantial edits or new tutorials, we recommend that you set up a local development environment, so you can visualise and fine tune your work before you submit it for review. You'll need some of your `git` skills with this.

- Fork our repository *NeCTAR-RC/tutorials* to your own Github account. You do this by navigating to https://github.com/NeCTAR-RC/tutorials and clicking the "Fork" button in the top right hand side of the screen. 

- Clone your fork to your local computer using `git clone`
- Step through the setup routine (in [README.md]()) to set up your computer for local previews of your edits. 
- Create a meaningfully named branch (e.g. using `git checkout -b [branch-name]` )
- Make the edits using your favourite markdown editor
- If you intend to add a new tutorial, use the instructions (in [README.md]())
- Commit your changes to your branch.
- Preview your changes using the local preview server that you set up above
- When you are happy with your edits or additions, push them to your fork (e.g. using `git push origin [branch-name]`)

You are now ready to create a pull request. 

- On the tab "`Pull requests`" in your fork, click the button "`New pull request`" 
- On the page "Comparing changes" make sure the base repository `NeCTAR-RC/tutorials` is selected and the branch `base:master` on the left-hand-side
- on the right-hand-side make sure the head repository is set to the name of `your-account/your-fork` and compare is set to `your-branch` (the meaningfully named one from above)

If your changes are compatible with our master branch, you'll see ​":heavy_check_mark: Able to merge"

- click the "`Create pull request`" button

This will create a pull request in our repository *NeCTAR-RC/tutorials* and it will alert our technical writer team. For any non-trivial edits, be prepared to answer questions about your edits, in the pull requests discussion. 