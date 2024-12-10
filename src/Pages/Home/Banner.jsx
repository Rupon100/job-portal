import { easeInOut, easeOut, motion } from "framer-motion";
import office1 from '../../assets/team1.jpg';
import office2 from '../../assets/team2.jpg';
import office3 from '../../assets/team3.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="flex-1">
                <motion.img
                  src={office1}
                  animate={{y: [50, 70, 50], }}
                  transition={{duration: 10, repeat: Infinity}}
                  className="max-w-sm rounded-t-[50px] rounded-s-[50px] shadow-2xl" /> 

                <motion.img
                  src={office2}
                  animate={{x: [0, 20, 0], }}
                  transition={{duration: 10, delay: 8, repeat: Infinity}}
                  className="max-w-sm rounded-t-[50px] rounded-e-[50px] shadow-2xl z-[50]" /> 
              </div>
              <div className="flex-1">
                <motion.h1
                 className="text-5xl font-bold">Latest Job <motion.span animate={{color: ['#ECFF33', '#4d6600', '#113300'], scale: 1.3}} transition={{duration: 5, repeat: Infinity}} >News!</motion.span></motion.h1>
                <p className="py-6">
                   Discover your dream job! Explore top opportunities, connect with employers, and build a successful career. Start your journey today!
                </p>
                <button className="px-4 py-2 border hover:bg-gray-200 transition-all">Let's Started</button>
              </div>
            </div>
        </div>
    );
};

export default Banner;