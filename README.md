


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Life Cycle of React Components

 React components has different stages in life cycle. We can monitor and mnipulate the react component components using different methods during life cycle. Below are the main three stages of the life cycle
 a. Mounting
 b. updating
 c. unmounting
 ## Mounting
 Mounting is the stage where we render the react component. We have different method we can use during mounting stage
 constructor()
 getDerivedStateFromProps()
 render()
 componentDidMount()
 ### constructor()
 Its the first method getting called when a react component is created
 Its is usually used to initialze the state object with properties.
If constructor is present the props are passed as an argument . And the
first statement in the constructor is to call the parent constructor 
using super(props). This will initialse the parent constructor
making the parent methods available to the component.
### getDerivedStateFromProps()
 This methos accepts the state and props as parameters and update the 
 state with values from props
 ### render()
This method is the required method. This method outputd the html to
DOM
### componentDidMount()
This method id called immediately after the rendering is complete.ie the 
component is already in DOM


class Car extends React.Component{

constructor(props)
{
super(props);
this.state={

color:"red",
brand: "toyata",
model:"yaris",
owner:"john"
};
}

static getDerivedStateFromProps(state,props){
return {color: props.favcolor}
}

render(){

return(<div>
<p>
 The model no of the car is :{this.state.model}
 The owner  of the car is :{this.state.owner}
 The  color of the car is :{this.state.color}
</p>

</div>);

}

componentDidMount(){

setTimeout(()=>{this.setState({owner:"james"})},2000)


}


}

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
