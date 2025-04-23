# LMS Frontend 

### Setup instruction

1. Clone the project
```
    git clone https://github.com/Rohitiwari297/lms-frontend.git
```
2. Move into the directory
```
    cd lms-frontend
```
3. Install dependencies
```
    npm i
```
4. run the server
```
    npm run dev
```



### Setup instructions for tailwind

[ Tailwind official instruction doc](https://tailwindcss.com/docs/installation/tailwind-cli)

1. Install tailwind CSS
```
    npm install tailwindcss @tailwindcss/cli postcss autoprefixer
```
2. Import  Tailwind into the CSS file `index.css`
```
    @import "tailwindcss"
```
3. Start the Tailwind CLI build process-Run the CLI tool to scan your source files for classes and build your CSS.
```
    npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

### Adding plugins and dependencies

```
    npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

### Configure auto impot sort esline
1. Install simple import sort
```
    npm i -D eslint-plugin-simple-sort
```
2. Add rule in `.eslint.cjs` 
```
    'simple-import-sort/import': 'error'
```
3. add simple-import sort plugin in `.eslint.cjs`
```
    simple-import-short': simpleImportShort,
```
4. To enable auto import sort on file save in vscode
    - Open `settings.json`
    - add the following config
    ```
        "editor.codeActionsOnSave":{
            "source.fixAll.eslint": true
        }
    ```