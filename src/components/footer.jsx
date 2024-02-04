const Footer = ({inputValue, onInputChange, onPublish}) => {
    return(
        <div className="navbar bg-neutral flex justify-center rounded-b-3xl">
            <div className="navbar-center">
            <input type="text" placeholder="Type here" className="input input-bordered w-96 max-w-xs mr-3" value={inputValue} onChange={onInputChange}/>
                <button className="btn bg-neutral" onClick={onPublish}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                </svg>
                </button>
            </div>
      </div>
    );
}
export default Footer