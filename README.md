# Customizable_Interface_Demo

This is a repo for my work basied on this tutorial: 
    https://www.freecodecamp.org/news/reactjs-implement-drag-and-drop-feature-without-using-external-libraries-ad8994429f1a/

Notes: 
Use:
    cd app_drag_drop_demo/
    npm start
To start the app.

Installed NPM in VS Code.
    (Installed Node because it wasn't installed on this machine)

I have found that the powershell command Remove-Item C:\Users\Duck\Customizable_Interface_Demi\app-drag-drop-demo is
usesful to remove large numbers of file. 
    https://community.spiceworks.com/topic/2116434-best-and-fast-way-to-massive-permanently-delete

The current version of node does not permit capitals in file names.

Added email and username with,   
    git config --global user.email "you@example.com"
    git config --global user.name "Your Name"

Issues: 
create-react-app not funtioning as intended.
    I have attempted, 
        npm rm -g create-react-app
        npm install -g create-react-app
        npx create-react-app my-app
    Based on this article 
        https://stackoverflow.com/questions/59260031/public-src-and-scripts-folder-not-created-while-using-create-react-app.
I had issues with unreachable code, this is caused by adding a line between the return statement and the brakets.
