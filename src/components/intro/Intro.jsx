import './intro.scss'
// import ReactTypingEffect from 'react-typing-effect';
// import Typed from 'react-typed';
import Typewriter from 'typewriter-effect';

export default function Intro() {
    

    
  return (


    <div className='intro' id='intro'>
        <div className="left">
            <div className="imgcont">
                <img src="assets/mrunp.png" alt="" />
            </div>
        </div>
        <div className="right">
            <div className="wrapper">
                <h2>
                    Hey there! I'm 
                </h2>
                <h1>Mrunmayi Parker</h1>    
                <span><Typewriter
                    options={{ 
                    strings: ['Web Developer', 'Machine Learning', 'UI/UX Designer' ],
                    autoStart: true,
                    loop: true,
                    }}
                />  </span>  
         
            </div>
            <a href='#portfolio'>
                <img src='assets/down.png'></img>
            </a>
        </div>
    </div>
  )
}
