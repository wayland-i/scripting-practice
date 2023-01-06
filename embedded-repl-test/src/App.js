import Frame from 'react-frame-component';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>hello</h1>

    <Frame sytle={{ width: '20%', height: '500px' }}>

    <iframe
        title='title'
        src="https://replit.com/@wayland-i/Nodejs#index.js"
        scrolling="no"
        frameborder="no"
        allowtransparency="true"
        allowfullscreen="true"
        sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
      ></iframe>

    </Frame>


    </div>
  );
}

export default App;
