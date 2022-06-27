
import '../components/Navbar.css';
const First =()=>{
    return(
        <>
           <div className="container-fluid ">
               <div className="row first-header">
                   <div className="col-md-5 video-description ">
                        <h1>Let's Find that</h1>
                        <h1>Best Candidate...</h1>
                        <p>Source, screen, rank condidates</p>
                        <p>from multiplen job boards, internal and external database</p>
                        <button className='Start-btn'><a href="">Get Started</a></button>
                   </div>
                   <div className="col-md-5 video-play">
                        <div className="video-border">
                             <a href=""><i class="bi bi-play-circle play"></i></a>
                        </div>

                   </div>

               </div>
               <p className="with-expertia">with Expertia</p>
               <div className='row first-header'>
                    <div className='col-md-5'>
                          <i class="bi bi-record-circle widely"></i>
                          <span className='Source'>Source Widely</span>
                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                          <a href="">Know More</a>
                    </div>
                    <div className='col-md-5 video-play'>
                         <i class="bi bi-check-circle widely"></i>
                         <span className='Source'>Screen Confidently</span>
                         <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                         <a href="">Know More</a>
                    </div>

               </div>
           </div>
        </>
    )
}
export default First;