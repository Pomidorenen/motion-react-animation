import ReactDOM from 'react-dom';

const portal = document.getElementById('portal');

const Portal = ({children})=>{
    return ReactDOM.createPortal(
        <div className="portal">{children}</div>,
        portal
    )
};

export default Portal;