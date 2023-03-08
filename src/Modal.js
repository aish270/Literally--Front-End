import react from 'react';
const Modal=({show,item,onClose})=>{
    if(!show)
    {
        return null;
    }
    let thumbnail=item.image;
    return(
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" onClick={onClose}><i class="fas fa-times"></i></button>
                    <div className="inner-box">
                        <img src={thumbnail} alt="" />
                        <div className="info">
                            <h1>{item.bname}</h1>
                            <h3>{item.author}</h3>
                            <h4>Rs.{item.cost}</h4><br/>
                            <a href={item.readonline}><button>More</button></a>
                        </div>
                    </div>
                    <h4 className="description">{item.description}</h4>
                </div>
            </div>
        </>
    )
}
export default Modal;