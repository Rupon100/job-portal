import { easeInOut, easeOut, motion } from "framer-motion";
import office1 from '../../assets/team1.jpg';
import office2 from '../../assets/team2.jpg';
import office3 from '../../assets/team3.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[500px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="flex-1">
                <motion.img
                  src={office1}
                  animate={{y: [50, 100, 50], }}
                  transition={{duration: 5, repeat: Infinity}}
                  className="max-w-sm rounded-t-3xl rounded-s-3xl shadow-2xl" /> 

                <motion.img
                  src={office2}
                  animate={{x: [0, 70, 0], }}
                  transition={{duration: 5, delay: 4, repeat: Infinity}}
                  className="max-w-sm rounded-t-3xl rounded-s-3xl shadow-2xl" /> 
              </div>
              <div className="flex-1">
                <h1 className="text-5xl font-bold">Latest Job News!</h1>
                <motion.h1
                //  animate={{x: 50}}
                //  transition={{duration: 2, deplay: 1, ease: easeInOut, repeat: Infinity}}
                 className="text-5xl font-bold">Latest Job <motion.span animate={{color: ['#ECFF33', '#33FFE3', '#FFFFFF']}} transition={{duration: 3, repeat: Infinity}} >News!</motion.span></motion.h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                  quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
        </div>
    );
};

export default Banner;