import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ErrorImg from "../components/assets/not-found.png";

function NotFound() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex mx-auto flex-col  max-w-5xl  rounded-sm md:p-10 p-3.5 text-slate-300">
          <div className=" flex flex-col items-center justify-center mb-3">
            <img
              src={ErrorImg}
              alt="404 Error"
              className="mb-4 md:h-auto h-48"
            />
            <a
              href="https://www.freepik.com/vectors/website"
              className="text-xs text-slate-400 md:inline hidden"
            >
              Website vector created by stories - www.freepik.com
            </a>
          </div>
          <div className=" md:max-w-lg max-w-sm mx-auto text-center">
            <h2 className="uppercase font-semibold text-slate-200 md:text-3xl text-xl md:mb-3 mb-1">
              Something went wrong
            </h2>
            <p className=" md:mb-6 mb-3">
              We couldn't find what you're looking for. <br /> It looks you are
              trying to access a page that either has been deleted or never been
              existed.
            </p>
            <Link to="/" className="btn btn-secondary ">
              Back to home
            </Link>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default NotFound;
