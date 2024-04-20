# Text Editor with React

## Integrate the text editor with HTML
1. Install necessary package
``` sh
npm install
``` 
2. Build the application
``` sh
npx webpack --mode production
```
3. Then you will get bundle.js file inside the dist folder. 
4. Connect bundle.js file with html
5. Use the cdn for button icon
``` sh
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
```
6. Add text-editor class inside div then text editor will show.
7. To get content inside the text editor through this name "text-content"