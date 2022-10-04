# Rock, Paper, Scissors Terminal Game

> October 3, 2022

Hi guys, here you can find the code for our Rock, Paper, Scissors session.

## Code structure

Below is a reminder of the steps we took to get to the code found in this repo:

1. We talked about how a Node.js project is created:

   ```shell
   $ npm init
   ```

   Which will generate a `package.json` file.

1. Once we have that, we can add third-party dependencies:

   ```shell
   $ npm install readline-sync
   ```

   Which automatically gets added to the `"dependencies"` key within `package.json`.

1. We noted that a `package-lock.json` file was automatically created for us and its contents are also automatically generated for us. It's purpose is to snapshot all of your dependencies and their versions at the time you installed them so that you can replicate the exact same setup if you were to install them again from scratch.

1. We noted that a `node_modules` folder was created for us, and that this is where our "installed" dependencies actually live.

1. We then added a `.gitignore` file that tells `git` to ignore out `node_modules` folder when committing our code, since it is bad practice to commit dependencies within the Node.js ecosystem.

1. We added a special `"type": "module"` line to our `package.json` so that we are able to use modern `import ... from '...'` statements in our code.

1. Finally we added our `index.js` file where we converted our "Rock, Paper, Scissors" flow chart to code.

   We executed this program by running:

   ```shell
   $ node index.js
   ```
