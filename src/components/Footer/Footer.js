import React from 'react'
import {Container, Row} from 'react-bootstrap'
import Instagram from '../../Assets/instagram.png'
import Whatsapp from '../../Assets/whatsapp.png'
import './Footer.css';

function Footer(){

	
		return(
			<>
		<div className="footer__pad"></div>
			<Container fluid className='con__footer'>
				<Row className='justify-content-center text-center'>
			<h1 className='con__text'>Deyan Azhari</h1>
			<h6 className='foot__text p-5'>Bungur Street No 37, Pondok Cina, Depok<br/> West Java <br/>13930</h6>
			<div className='foot__bot'>
			<a  data-toggle="tooltip" data-placement="top" title="whatsapp" href="https://www.instagram.com/oranggaring/">
			<img className="foot__img mx-4"  src={Instagram}/></a>
			<a  data-toggle="tooltip" data-placement="top" title="whatsapp" href="https://wa.me/6285947299517">
			<img className="foot__img mx-4"  src={Whatsapp}/></a>
			
			</div>
			</Row>
			</Container>
			</>
		)
	
}

export default Footer;
