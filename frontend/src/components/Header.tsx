import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="py-6 shadow-lg">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-customBgLow font-bold tracking-tight italic">
          <Link to="/">Paradise View</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center bg-customBgLow  text-white px-3 font-bold hover:bg-customBgBtn"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center bg-customBgLow  text-white px-3 font-bold hover:bg-customBgBtn"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex bg-customBgLow items-center text-white py-2 px-6 rounded font-bold hover:bg-customBgBtn"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
