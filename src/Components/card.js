import react from 'react';
import './card.css';



export default function card(props){
   console.log(props);
    return(
        <div>
            <div>
                <div className='mainContainer'>
                    <div className='imageContainer'>
                        <img className='imageView' src="https://avatars.dicebear.com/v2/avataaars/Antonette.svg?options[mood][]=happy"></img>
                    </div>
                    <div className='middleSection'>
                        <div>
                            <p className='design'>{props.name}</p>
                        </div>
                        <div className='alginIcon'>
                            <img className='design phoneImage' src="https://img.icons8.com/wired/344/phone.png"></img>
                            <span className='textAlign'>Sincere@april.biz</span>
                        </div>
                        <div className='alginIcon'>
                            <img className='design phoneImage' src='https://img.icons8.com/ios/344/mail.png' ></img>
                            <span className='textAlign'>1-770-736-8031 x56442</span>
                        </div>
                        <div className='alginIcon'>
                            <img className='design phoneImage' src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/344/external-web-web-hosting-kmg-design-detailed-outline-kmg-design.png"></img>
                            <span className='textAlign'>http://hildegard.org</span>
                        </div>
                    </div>
                    <div className='bottomSection'>
                        <div className='designAlign'>
                            <div>
                                {/* <img className='like' width="40px" src={likeImage}></img> */}
                            </div>
                            <div>
                                {/* <img className='like' width="40px" src={editimage}></img> */}
                            </div>
                            <div>
                                {/* <img className='like' width="40px" src={deleteImage}></img> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}