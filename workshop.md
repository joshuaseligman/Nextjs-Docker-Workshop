# Introduction

## 1. What is React?
React.js is a Javascript library developed by Facebook that makes front-end web development really easy. React allows you to modularize, or break up, different parts of your website into **components**. Components let us write the code for parts of our website once and add them wherever we need to! React uses JSX for its syntax, which stands for JavaScript extended. We write JavaScript code in our components and use tags similar to HTML to define the parts of the website.

## 2. Why learn React?
React is the most used web framework according to the 2021 Stack Overflow Developer Survey among professional developers (over 49,000 responses), with 41% of the responses. Honorable mentions: Angular (26%), Vue (20%), Spring (16%), Flash & Django (13% each).

## 3. Problems with React
1. Client-side rendering. When you have a large application with a lot of data, the user has to fetch the data and interpret the JavaScript. This results in the user seeing blank pages until the data is received. For small projects, this may not be very significant. However, this drawback becomes evident when building web apps in a job or internship that uses lots of data and database requests.
2. It is just a library and only takes care of the front-end. You have to bring in your own back-end and establish your own project structure. This creates issues when scaling your project up.

## 4. What is Next.js?
Next.js is a framework that is a superset of React to provide developers with all of the features that React doesn't include. It has an easy-to-learn file structure for creating pages developing full-stack applications. Many companies are beginning to switch to Next.js, including Netflix, GitHub, and Doordash (https://nextjs.org/showcase).

## 5. Benefits of Next.js
1. Server-side rendering. SUPER FAST! Client no longer has to wait for their browser to render the JavaScript. Instead, the server takes care of it and sends the webpage right to the client. See images at the bottom of this section to see the difference between client-side and server-side rendering.
2. Has native support for API development. Although this is beyond the scope of the workshop, it helps create more structure and consistency throughout the project. For those interested, the syntax of the Next.js api development is similar to the syntax of Express.js.

![](https://www.educative.io/api/edpresso/shot/5456653749059584/image/5093564327395328)
![](https://www.educative.io/api/edpresso/shot/5456653749059584/image/5030372717887488)

## 6. TypeScript
Next.js has TypeScript support, which is REALLY nice because it adds more structure to your programs and makes every element and component well-defined. This can be really important when working with your own API and making sure the appropriate data are sent to the front-end.

## 7. Model-View-Controller (MVC)
MVC is a software concept that helps determine how data flows in an application. The model defines the data and what is stored. The data are rendered in the view, which is what the user sees. The user can interact with the data through forms, buttons, etc., all of which belong to the view. Lastly, the controller makes a decision based on the user input and usually goes back to the model to update the data, and the cycle is back to the start.

![](https://developer.mozilla.org/en-US/docs/Glossary/MVC/model-view-controller-light-blue.png)

# Hello Next.js

## 1. Creating a Next App
1. Make sure Node.js is installed.
2. Open your terminal or command prompt, type `npx create-next-app@latest --ts`, and follow the prompts to create the project.

## 2. Walk through the file structure
1. Pages folder: organized hierarchically by the route. For instance, we have an `api` folder that represents all routes that begin with /api. If we put a `users` folder inside of the api folder, every file in that folder will represent the routes that begin with /api/users.
2. The `public` folder is used for storing images and other resources that you use on your webpage.
3. The `styles` folder is where you can store your stylesheets (more on that later).

## 3. Write our first page
1. `_app.tsx` is your basic definition for your app. You can put your header and footer here to make it consistent across all pages. `<Component />` is what is defined by your pages, which we will look at very soon.
2. Delete everything inside of `index.tsx` and rewrite it as follows.
```tsx
import { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <div>
            <h1>Hello Next.js</h1>
        </div>
    );
}

export default Home;
```
Home represents what will display on our landing page. Since it is a page, it takes the type of a NextPage. We have to return some content to the browser, which is why we have the return statement with some code that looks like HTML. It is actually JSX. Lastly, we have to export Home so Next can use it.

3. Run `npm run dev` in the terminal to start up the development server. Go to localhost:3000 to see the website!

# React Components and Basic Hooks

## 1. Write our first component
1. Create a `components` folder to store our components.
2. Create a file called `buttonCounter.tsx`. This component will contain a button and a label to keep track of the number of times the user clicks on the button.
3. Write our first component.
```tsx
const ButtonCounter: React.FC = () => {
    return (
        <h3>0</h3>
        <button>Click Me!</button>
    );
}

export default ButtonCounter;
```
This looks really similar to our page, but the type is a React function component.

4. Put our component on the home page.

```tsx
import { NextPage } from 'next';

import ButtonCounter from '../components/buttonCounter';

const Home: NextPage = () => {
    return (
        <div>
            <h1>Hello Next.js</h1>
            <ButtonCounter />
        </div>
    );
}

export default Home;
```

5. See the effect take place on the website.

## 2. Add the clicking function with the useState hook
1. Add the clickState variable and setClickState function as shown below. The useState hook defines a variable (clickState) and a function (setClickState) that changes the clickState variable. We want clickState to be a number that starts at 0.

`const [clickState, setClickState] = useState<number>(0);`

2. Create a void function that increments clickState for our button.
```ts
function clicked(): void {
    setClickState(clickState + 1);
}
```

3. Update the JSX.
```html
<h3>{clickState}</h3>
<button onClick={clicked}>Click Me!</button>
```
To use TypeScript within the JSX, surround the TypeScript code with curly braces. Nice and easy!

The final ButtonCounter should look like the following:

```tsx
import { useState } from "react";

const ButtonCounter: React.FC = () => {
    const [clickState, setClickState] = useState<number>(0);

    function clicked(): void {
        setClickState(clickState + 1);
    }

    return (
        <div>
            <h3>{clickState}</h3>
            <button onClick={clicked}>Click Me!</button>
        </div>
    );
}

export default ButtonCounter;
```

# Styles
1. Add a `button.module.css` file in the `styles` folder. Next.js doesn't really support regular .css files, so we have to create a css module to contain all class and id styles. For those who are interested, .css files are only able to be used in `_app.tsx` to define the global styles for the website.

2. Write a couple basic styles in `button.module.css`.
```css
.btn {
    color: red;
    background-color: rgba(0, 0, 0, .5);
    border-radius: 2px;
    font-size: 50px;
    font-family: 'Comic Sans MS';
}

#counter {
    color: green;
    font-family: 'Comic Sans MS';
    font-size: 50px;
}
```

3. Import the styles to the buttonCounter component.

```ts
import buttonStyles from '../styles/button.module.css';
```

4. Set the styles up for the counter and button.
```html
<h3 id={buttonStyles.counter}>{clickState}</h3>
<button className={buttonStyles.btn} onClick={clicked}>Click Me!</button>
```

# Multiple Pages
1. Add a link to the index page by importing Link and adding it to the return statement.
```ts
import Link from 'next/link';
```

```html
<Link href='/about'>
    <a>About page</a>
</Link>
```
2. Test the link... it will give us a 404 page. We have to make a new page! I know the link doesn't have styling on it, but I'll leave it up to you to use your CSS knowledge to take care of that.
3. Create a new file called `about.tsx` in the pages folder. Remember, the name of the file directly correlates with the path, so `about.tsx` means that the path will be /about.
4. Copy and paste the code over from `index.tsx`.
5. Rename Home to About. Delete the ButtonCounter component. Fix the link to go back to the landing page.
6. Test out the links. We can now click back and forth between each page!

`about.tsx` should look something like the following:

```tsx
import { NextPage } from 'next';
import Link from 'next/link';

const About: NextPage = () => {
    return (
        <div>
            <h1>About Page</h1>
            <Link href='/'>
                <a>Go back to landing page</a>
            </Link>
        </div>
    );
}

export default About;
```

# Deployment

## 1. What is Docker?
Docker is a containerization platform that lets you compose software into independent containers. For our purposes, it will allow us to write a definition for how to run our website, and then any other computer with Docker installed can follow those instructions and host our website.

## 2. Writing a Docker container
1. Create a file called `Dockerfile`.
2. Write the following Docker file.
```docker
FROM node
WORKDIR /usr/app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build
CMD ["npm", "run", "start"]
```
All Docker files begin with the `FROM` statement. This gives Docker something to work with. In this case, it is Node.js in a Linux environment, which is the default environment. `WORKDIR` sets the working directory, or where in the container we want to put our code (more a good practice thing for our purposes). `COPY` takes files from our local drive to the container, and we only need the package files for now. `RUN` executes the command. In this case, we want to install all dependencies for the project. Next, we want to copy the rest of the files over. `EXPOSE` tells Docker to look out for communications to the given port (3000). We now want to build our project so it is in a production state. Lastly, `CMD` ends Docker files and is the last command to execute. We want to start our server.

3. Create a `.dockerignore` file for `node_modules` and `.next` folders.
```
node_modules
.next
```
4. Run the following command in the terminal to create an image for the container:

`docker build . -t workshop-website`

5. Run `docker images` to see that your image is there.
6. Run the next command to start the server:
`docker run -p 3000:3000 -d workshop-website`
The first argument (-p 3000:3000) tells Docker that we want our port 3000 to match up with the container's port 3000. The second argument (-d) tells Docker to run the container in the background.
7. Run `docker ps` to see a list of running containers.
8. Go back to localhost:3000 to see the running website!
9. Run `docker stop <containerID>` to stop the container and the server!
10. You can make a Docker Hub account to publish your containers, which is necessary if you want to deploy using Docker (https://hub.docker.com/). Docker Hub is also the documentation page for Docker images.

## 3. Discussion about how to bring the container to an actual web server in the cloud.
1. Oracle Cloud has a free tier that gives you 2 free instances with very generous specs. Check it out here: https://www.oracle.com/cloud/free/?source=CloudFree_CTA1_Default&intcmp=CloudFree_CTA1_Default
2. Once you get your instance, SSH into it and set up Docker. Pull your Docker container from Docker Hub and start it up.
3. You will also need a domain name. I use Google Domains, but wherever you find your desired domain for the least amount of money is usually sufficient. Here is the link for Google Domains: https://domains.google/
4. Once you have all that ready, you will need to use Nginx reverse proxy in conjunction with Let's Encrypt to get a web certificate to make your website run with the HTTPS protocol. Here is a pretty good video for how to set up Nginx: https://www.youtube.com/watch?v=DyXl4c2XN-o. For the web certificate, Let's Encrypt and Certbot (the package that gets you the certificate) lead you in a very good direction, so just follow what they say and you will be all good to go (https://letsencrypt.org/)!