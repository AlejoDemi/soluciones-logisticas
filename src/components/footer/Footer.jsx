import './Footer.css';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

export const Footer = () => {
    console.log("Breuk")
  return (
    <div className="footer">
      <div className="contact-info">
        <div className="contact-title">Contactanos</div>
        <div className="contact-data">
            <div className='data'>
                <FmdGoodOutlinedIcon/> Las Amapolas 1094
            </div>
            <div className='data'>
                <LocalPhoneOutlinedIcon/> (011) 4626709
            </div>
            <div className='data'>
                <MailOutlineOutlinedIcon/> breuk@breuk.com
            </div>
        </div>
      </div>
    </div>
  );
};
