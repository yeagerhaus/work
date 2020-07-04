# README
<h1>THIS IS THE ORIGINAL ALPHA FOR FILEFUSE LLC. (NOW HITSEND INC.)</h1>
<h3>It is no longer in use but will remain in this Repo as as a proof of concept</h3>
<br>
<br>
* <h2>SETUP: https://gorails.com/setup/windows/10 </h2>
<p>Follow these instructions with the following edits(we are using Ruby 2.6.1 and Rails 5.2.3:</p>
<ol> 
  <li>Use rvm</li>
  <li>Skip the MySQL or PostgreSQL steps. We'll use SQLite3 for now. This will need to change once we open it up to the public.</li>
  <li>Instead of running `rails server` or `rake db:create`, we need to:</li>
  <ol> 
    <li>Ensure you are in the directory you'd like the app to be in.</li>
    <li>run `git init` to make it a git repository.</li>
    <li>run `git clone https://github.com/FileFuse/FileFuseAlpha.git` to get the files the first time.</li>
    <li>run `rails server` to start the server. You can now go to `localhost:3000` in a browser and hit the index page.</li>
  </ol>
</ol>

* <h2>WORKFLOW:</h2>
<p>This is a basic workflow with git. These steps don't take very long to run, though there can be quite a few steps. This will probably change over time as the project grows and changes. I have included some "unneccesary" git commands, and have marked them as `OPTIONAL`. They are not required to run, but help quite a bit with being careful. In addition, there are a few times you will need to change values from what I have added here. These are: branchname and filename(Ignore the `<>`'s).</p>
<ol> 
  <li>Run `git branch`. This will show you what branches you have locally on your machine. Make sure you don't have any old branches there. If you need to delete one, run `git branch -d branchname` to delete it. You cannot/should not delete master. It's important.</li>
  <li>If code has been merged to master, your local master branch will be out of date. Run `git pull` while on that branch to update it. This needs to happen before you start so you can start new work with the most updated code.</li>
  <li>Run `git branch -b <branchname>`. This will create a new branch with <branchname> as the name. </li>
  <li>Run `git checkout <branchname>.`</li>
  <li>Make changes. Be careful if two people edit the same file. That is unlikely for now, but may be a problem later.</li>
  <li>Prepare to commit:</li>
  <ol>
    <li>OPTIONAL: Run `git status`. This will show you what files you have changed. Make sure there isn't anything unexpected there.</li>
    <li>OPTIONAL: Run `git diff`. This will show you every change you have made. Make sure that nothing unexpected is there.</li>
  </ol>
  <li>Run `git add .` to get files ready for commit. You can run `git add -- <filename></li>
  <li>OPTIONAL: Run `git status` one more time to make sure you didn't add anything you shouldn't have.</li>
  <li>Run `git commit` to commit changes to the files. It will open up a vim file where you can edit the message for the commit. We should always add a message to our commits so we can keep track of what changed. NOTE:This does not push files to Github. This is a local command. OPTIONAL: You can run `git commit -m "<message>" to avoid the vim screen.</li>
  <li> Run `git push -u origin <branchname>`. This command will push the commit to a fresh branch on Github. This is important for the next steps.</li>
  <li>Open up a Pull Request:</li>
    <ol>
      <li>Go to the code tab. Click on `Branches` link.</li>
      <li>OPTIONAL: Click on compare. Check your code one more time.</li>
      <li>Click the `Pull Request` link.</li>
      <li>Give it the same title as the branch name. In the description, explain what your branch should enable us to do, and any other testing steps we need to do to make sure the code is good.</li>
      <li>Add some labels with the panel to the right. I need to make better labels, but until we figure out how this will all work together, I won't make many.</li>
      <li>Create the pull request and wait for someone to test it.</li>
  </ol>
    <li>Testing Procedure:</li>
    <ol>
      <li>Make sure code looks good(AND MAKES SENSE) in the code comparison.</li>
      <li>Run `git branch -a` to see all branches, both local and remote.</li>  
      <li>Run `git checkout <i>branchname</i>`. You are not in detached HEAD mode which is fine for testing.</li>
      <li>Test everything works as expected.</li>
      <li>Run automated tests(once we get them set up) and style checks:</li>
        <ul>
          <li>Run `rubocop` to run style checks (you can use `rubocop -a` to auto-fix any issues that can be done automatically, but until we have a more stable setup, we shouldn't run it unless absolutely sure).<li>
        </ul>
    </ol>
</ol>
    
* <h2>TO GET DONE BEFORE ANYTHING LAUNCHES: </h2>
<ol>
  <li>Add automated Ruby testing (eventually we should use RSpec, but the default suite is fine for now)</li>
  <li>Add MySQL database(not really necessary at first, but before launch it NEEDS to be MySQL)</li>
  <li>Add seed data()</li>
</ol>
