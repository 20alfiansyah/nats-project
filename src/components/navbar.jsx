const Navbar = ({state,subs,unsubs,subject}) => {
    return (
      <div className="navbar bg-neutral rounded-t-3xl">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">{subject}</a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className={`btn btn-ghost btn-circle avatar ${state}`}>
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-neutral rounded-box w-52">
              <li><a onClick={subs}>Subscribe</a></li>
              <li><a onClick={unsubs}>Unsubscribe</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Navbar
  