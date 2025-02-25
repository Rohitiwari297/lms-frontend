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
    npm install tailwindcss @tailwindcss/cli
```
2. Import  Tailwind into the CSS file `index.css`
```
    @import "tailwindcss"
```
3. Start the Tailwind CLI build process-Run the CLI tool to scan your source files for classes and build your CSS.
```
    npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```