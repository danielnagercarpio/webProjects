import './Modal.css';

const Modal = (props) => {
      return(
        <div id={props.imgLink} className='modal myModal' style={{display:'none'}}>
          <div className="modal-content">
            <span className="close" onClick={ ev => {
              function removeIt() {
                document.getElementById(props.imgLink).style.display = "none"
              }
              removeIt()
              }
            }
            >&times;</span>
            <p><img src={props.imgLink}></img></p>
          </div>
        </div>
    );    
}
export default Modal;