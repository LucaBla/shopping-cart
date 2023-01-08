import "../css/Notification.css";

function Notification(props) {
  return (
    <div className="notification-wrapper">
      <div className="notification">
       {props.itemAmount} x "{props.itemName}" added to cart
      </div>
    </div>
  );
}

export default Notification;