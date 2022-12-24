import './Modal.css';

const Modal = (props) => {
    return(
        <div id="myModal" class="modal">
          <div class="modal-content">
            <span class="close">&times;</span>
            <p><img src={props.imgLink}></img></p>
          </div>
        </div>
    );    
}
export default Modal;