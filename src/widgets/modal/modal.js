import "./modal.css";

function Modal(props) {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={props.closeModal}>
            &times;
          </span>
          <h3>{props.title}</h3>
        </div>
        <div className="modal-body">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
