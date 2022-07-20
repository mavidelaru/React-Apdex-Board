# 🚀 Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm i`

It puts modules in place so that node can find them.
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

## 📂 About files structure
As I discovered, React does not have a mandatory structure on how to put files into folders. So I decided to structure it as: components | services | style. I left the App component aside, as it’s the main component where everything is initiate.

## 📱 About the project
This is my first React project. I choose to create the components as React Functional Components thanks to the help of Hooks. They allow us to use state and other React features without writing a class. IDK if this is the best practice, but i think it is the easiest way to do this challenge.

The Hooks I used are Use State and UseEffect. 

UseState uses the setNewState() function to track and update the state, and the actualState constant allows us to access to it. On the other hand, UseEffect helps us to execute a function every time our component renders.

Using both Hooks we create a new copy of the array everytime we need it and help us to keep the data changes updated.

### 🔂 How to keep the changes tracked in real time? 
React projects pass properties from higher components to lower ones. For that reason we pass the functions handleHostsChange() and handleLayoutChange() to the HostList component. That way we are listening to the changes on the child-component and making the data updating on the parent component (App). The project is in continuous communication from the main component (where the data is started) to the child component.

### ℹ️ How to work the data?
From App component, we start to work the raw data.
In the services file, we can find the functions to get and edit the data. We call the Service function getListOfHostsName() which return an array of the list of the Hosts names. Having first the names of the hosts makes it easier to get the data organized. 

With this Hosts Names we organize the data calling the function getAllApplicationsFromHostName() and sending the data to the component HostList. The one in charge to separate with a .map() function and show the data according to the Host name.

In the HostList component, we use another function from the Service. Is the one in charge to select the top apps by host. I simplified the code making this function returning an array with the length of the number we decided. We can make it with 25 or 5. 

In the AppItem we show the top 5 applications in every host and show an alert when clicking to an application. Here we used a library called SweetAlert. Helps us to make an alert more visual. 

###  🙋 Curiosities I think are interesting to explain.

- When we are working the "html" part, on the return we could put everything inside a div. But it can give problems later for layout, so we used instead React removed ​​fragment elements. Send a single element without rendering it to the HTML.
And also colors it and it's easier to see that way.

- The components could be created as an arrow function, but I've seen it better to create a component as a normal function and handlers and helper functions to create them as arrow functions. I think it gets more visual to differentiate the functions structures. 


