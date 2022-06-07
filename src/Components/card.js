import react,{useState} from 'react';
import './card.css';
import Like from '../Assets/like.svg';
import Remove from '../Assets/remove.svg';
import Edit from '../Assets/edit.svg';



export default function Card(props){

    const [name,setName] = useState(props.name);
    const [email,setEmail] = useState(props.email);
    const [phone,setPhone] = useState(props.phone);
    const [web,setWeb] = useState(props.web);

    const [name_,setName_] = useState(props.name);
    const [email_,setEmail_] = useState(props.email);
    const [phone_,setPhone_] = useState(props.phone);
    const [web_,setWeb_] = useState(props.web);

    function nameChange(e){
        setName_(e.target.value);
    }
    function emailChange(e){
        setEmail_(e.target.value);
    }
    function phoneChange(e){
        setPhone_(e.target.value);
    }
    function webChange(e){
        setWeb_(e.target.value);
    }


    const [color,setColor] = useState(false);
    const [edit,setEdit] = useState(false);

    function removeItem(e){
        props.remove(e);
    }

    function multiTask(el){
        props.mode(el);
        setEdit(el)
    }

    function ChangeValue(){
        setName(name_);
        setEmail(email_);
        setPhone(phone_);
        setWeb(web_);
        props.mode(false);
        setEdit(false);

    }
    
    return(
        <div>
            <div>
                <div className='mainContainer'>
                    <div className='imageContainer'>
                        <img className='imageView' src={props.image}></img>
                    </div>
                    <div className='middleSection'>
                        <div>
                            <p className='design'>{name}</p>
                        </div>
                        
                        <div className='alginIcon'>
                            <img className='design phoneImage' src='https://img.icons8.com/ios/344/mail.png' ></img>
                            <span className='textAlign'>{email}</span>
                        </div>
                        <div className='alginIcon'>
                            <img className='design phoneImage' src="https://img.icons8.com/wired/344/phone.png"></img>
                            <span className='textAlign'>{phone}</span>
                        </div>
                        <div className='alginIcon'>
                            <img className='design phoneImage' src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/344/external-web-web-hosting-kmg-design-detailed-outline-kmg-design.png"></img>
                            <span className='textAlign'>http://{web}</span>
                        </div>
                    </div>
                    <div className='bottomSection'>
                        <div className='designAlign'>
                            <div>
                            <svg className='bottomEdit' onClick={()=>{setColor(!color)}} viewBox="64 64 896 896" data-icon="heart"  fill={color?'red':'black'} width="20px" aria-hidden="true"><path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"></path></svg>
                            </div>
                            <div>
                                <span style={{color:'#D5DBDB'}}>|</span>
                            </div>
                            <div>
                                <img className='bottomEdit' width="18px" src={Edit} onClick={()=>multiTask(true)} />
                            </div>
                            <div>
                                <span style={{color:'#D5DBDB'}}>|</span>
                            </div>
                            <div>
                                <img onClick={()=>removeItem(props.id)} className='bottomEdit' width="20px" src={Remove} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                edit ?  
                <div style={{display:'flex',justifyContent:'center'}}>
                    <div className='editTab'>

                        <div className='editTabTop'>
                            <span>Basic Modal</span>
                            <svg style={{cursor:'pointer'}} onClick={()=>multiTask(false)} viewBox="64 64 896 896"  data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
                        </div>
                        <div className='editTabMain'>

                            <div className='inputField'>
                                <span color='red'>*</span><span> Name:       </span><span><input onChange={(el)=>nameChange(el)} className='inputM' defaultValue={name} type="text" /></span>
                            </div>
                            <div className='inputField'>
                                <span color='red'>*</span><span> Email:      </span><span><input onChange={(el)=>emailChange(el)} className='inputM' defaultValue={email} type="text" /></span>
                            </div>
                            <div className='inputField'>
                                <span color='red'>*</span><span> Phone:      </span><span><input onChange={(el)=>phoneChange(el)} className='inputM' defaultValue={phone} type="text" /></span>
                            </div>
                            <div className='inputField'>
                                <span color='red'>*</span><span> Website:    </span><span><input onChange={(el)=>webChange(el)} className='inputM' defaultValue={web} type="text" /></span>
                            </div>

                        </div>
                        <div className='editTabBottom'>
                            <div style={{marginRight:'10px'}}>
                                <button onClick={()=>multiTask(false)} style={{border:'#2980B9',width:'60px',height:'30px',cursor:'pointer',border:'1px solid'}} type="submit">Cancel</button>
                            </div>
                            <div>
                                <button onClick={ChangeValue} style={{backgroundColor:'#2980B9',color:'white',border:'#2980B9',width:'60px',height:'30px',cursor:'pointer'}} type="submit">OK</button>
                            </div>
                        </div>

                    </div> 
                </div>
                
                : null
            }
           

        </div>
    )
}