import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useSearchParams } from 'react-router-dom';
import CincinImg from './images/img-cincin.png';
import './App.css';

function WelcomeModal() {
    const [queryParam] = useSearchParams();
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    // const queryParam = new URLSearchParams(window.location.search);
    // const name = queryParam.get("to");
    var [modalClose, setModalClose] = useState("");

    const onClick = () => {
        setModalClose("tutup-welcome");
        const audio = document.getElementById("play-song");
        audio.load();
        document.querySelector(".judul1").classList.add("animate__animated");
        document.querySelector(".judul1").classList.add("animate__fadeInDown");
        document.querySelector(".judul1").classList.add("animate__delay-3s");
        document.querySelector(".judul1").style.setProperty("--animate-duration", '2s');
        document.querySelector(".couple-foto").classList.add("animate__animated");
        document.querySelector(".couple-foto").classList.add("animate__zoomIn");
        document.querySelector(".couple-foto").classList.add("animate__delay-3s");
        document.querySelector(".couple-foto").style.setProperty("--animate-duration", '2s');
        document.querySelector(".p-pria").classList.add("animate__animated");
        document.querySelector(".p-pria").classList.add("animate__slideInLeft");
        document.querySelector(".p-pria").classList.add("animate__delay-3s");
        document.querySelector(".p-pria").style.setProperty("--animate-duration", '2s');
        document.querySelector(".p-wanita").classList.add("animate__animated");
        document.querySelector(".p-wanita").classList.add("animate__slideInRight");
        document.querySelector(".p-wanita").classList.add("animate__delay-3s");
        document.querySelector(".p-wanita").style.setProperty("--animate-duration", '2s');
        var d = document.querySelector("#title-date");
        d.children[0].classList.add("animate__animated");
        d.children[0].classList.add("animate__fadeInLeft");
        d.children[0].classList.add("animate__delay-5s");
        d.children[0].style.setProperty("--animate-duration", '2s');
        d.children[2].classList.add("animate__animated");
        d.children[2].classList.add("animate__zoomIn");
        d.children[2].classList.add("animate__delay-4s");
        d.children[2].style.setProperty("--animate-duration", '2s');
        d.children[3].classList.add("animate__animated");
        d.children[3].classList.add("animate__fadeInRight");
        d.children[3].classList.add("animate__delay-5s");
        d.children[3].style.setProperty("--animate-duration", '2s');
        document.querySelector("#btn-save-the-date").classList.add("animate__animated");
        document.querySelector("#btn-save-the-date").classList.add("animate__fadeInUp");
        document.querySelector("#btn-save-the-date").classList.add("animate__delay-5s");
        document.querySelector("#btn-save-the-date").style.setProperty("--animate-duration", '2s');
        document.querySelector(".mouse-scroll-home").classList.add("animate__animated");
        document.querySelector(".mouse-scroll-home").classList.add("animate__fadeInUp");
        document.querySelector(".mouse-scroll-home").classList.add("animate__delay-5s");
        document.querySelector(".mouse-scroll-home").style.setProperty("--animate-duration", '2s');
        document.querySelector(".scroll-down").classList.add("animate__animated");
        document.querySelector(".scroll-down").classList.add("animate__fadeInUp");
        document.querySelector(".scroll-down").classList.add("animate__delay-5s");
        document.querySelector(".scroll-down").style.setProperty("--animate-duration", '2s');
        setInterval(() => {
            setShow(false);
            audio.play();
        }, 3000);
    };

    return(
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop={"static"}
                fullscreen={true}
                keyboard={false}
                centered={true}
                scrollable={false}
                className={modalClose}
            >
                <Modal.Body id="overlay" className={"p-0 m-0"}>
                    <div className="content">
                        <div className="container d-flex-column align-items-center justify-content-center" style={{width: "100%", height: "100%", overflow: "hidden"}}>
                            <div className="row mt-4 mb-2">
                                <h1 data-aos="fade-down" data-aos-delay="500" data-aos-duration="2000" className="font-esthetic text-secondary">The Wedding Of</h1>
                                <div data-aos="zoom-in" data-aos-delay="750" data-aos-duration="2000" className="col-md-12 col-md-offset-2 text-center fh5co-heading my-4">
                                    <img src={CincinImg} alt="" className="couple-main" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-md-offset-2 text-center fh5co-heading">
                                    <h1 data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2000" className='font-esthetic text-secondary my-2'>Al & Novi</h1>
                                    <p data-aos="zoom-in" data-aos-delay="1250" data-aos-duration="2000" style={{color: "#EEE", marginBottom: 0}}>Kepada Bapak/Ibu/Saudara/i</p>
                                    <h3 data-aos="zoom-in" data-aos-delay="1500" data-aos-duration="2000" style={{color: "#EEE", marginBottom: 0, fontWeight: "bold"}}>{queryParam.get("to")}</h3>
                                    <p data-aos="zoom-in" data-aos-delay="1750" data-aos-duration="2000" style={{color: "#EEE", fontSize: 12, marginTop: 10}}>Kami Mengundang Anda Untuk Hadir Di Acara Pernikahan Kami.</p>
                                    <div style={{height: 20}}></div>
                                    {/* <button className="btn btn-primary" onClick={onClick}>Buka Undangan</button> */}
                                    <div data-aos="fade-up" data-aos-delay="2000" data-aos-duration="2000">
                                        <Button onClick={onClick} className="rounded-pill btn-burgundy">
                                            <FontAwesomeIcon icon={faEnvelope} />&nbsp;Buka Undangan
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default WelcomeModal;