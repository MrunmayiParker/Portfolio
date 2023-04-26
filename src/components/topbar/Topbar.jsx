import './topbar.scss'
// import {MailIcon, PersonIcon} from "@material-ui/icons" 
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className='wrapper'>
            <div className="left">
                <a href="#intro" className='logo'>Mrunmayi Parker.</a>
                <div className="itemcont">
                    <PersonIcon className='icon'/>
                    <span>+91 9769953236</span>

                </div>

                <div className="itemcont">
                    <EmailIcon className='icon' />
                    <span>mrunmayirparker@gmail.com</span>

                </div>
            </div>
            {/* <h1>hello</h1> */}

            <div className="right">
                <div className="ham" onClick={() =>setMenuOpen(!menuOpen) }>
                    <span className='line1'></span>
                    <span className='line2'></span>
                    <span className='line3'></span>

                </div>
            </div>
        </div>
    </div>
  )
}

