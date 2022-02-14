import React ,{useState} from "react";

export default function TransitionsModal() {
  
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const wrapperCSS = {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: open?"block":"none"
  };

  const contentCSS = {
    backgroundColor: "white",
    width: "60vh",
    margin: "20% auto",
    padding: "20px",
    borderRadius: "5px"
  }

  return (
    <div>
      <button type="submit" className="btn btn-primary" onClick={handleOpen}>
        Place your order
      </button>
      <div style={wrapperCSS} id="modal_wrapper">
        <div style={contentCSS} id="modal_content">
            <div><strong>Your Order has been placed. Thank You!!</strong></div>
            <button  onClick={handleClose}>Close</button>
        </div>
      </div>
        
    </div>
  );
}
