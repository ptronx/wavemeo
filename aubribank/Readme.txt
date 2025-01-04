

The bin folder contains the executable file that starts your app. It starts the 
server (on port 3000, if no alternative is supplied) and sets up some basic error 
handling. You don’t really need to worry about this file, because npm start will 
run it for you.

The public folder is one of the important ones: ​everything​ in this folder is 
accessible to people connecting to your application. In this folder, you’ll put 
JavaScript, CSS, images, and other assets that people need when they load your website.

The routes folder is where you’ll put your router files. The generator creates two files,
index.js and users.js, which serve as examples of how to separate out your application’s 
route configuration.
Usually, you’ll have a different file here for each major route on your website. So you 
might have files called blog.js, home.js, and/or about.js in this folder.

The views folder is where you have the files used by your templating engine. The generator 
will configure Express to look in here for a matching view when you call the render method.
Outside of these folders, there’s one file that you should know well.


