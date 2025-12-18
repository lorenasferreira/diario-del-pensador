import "./DeleteButton.css";

const DeleteButton = () => {
    
    return (
        <>
            <button className="btn-delete">
                <svg width="35" height="35" viewBox="0 0 37 42" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.9375 42C5.66563 42 4.57721 41.5434 3.67225 40.6303C2.76729 39.7172 2.31404 38.6182 2.3125 37.3333V7H0V2.33333H11.5625V0H25.4375V2.33333H37V7H34.6875V37.3333C34.6875 38.6167 34.235 39.7157 33.3301 40.6303C32.4251 41.545 31.3359 42.0015 30.0625 42H6.9375ZM11.5625 32.6667H16.1875V11.6667H11.5625V32.6667ZM20.8125 32.6667H25.4375V11.6667H20.8125V32.6667Z"/>
                </svg>
            </button>
        </>

    )

}

export default DeleteButton;