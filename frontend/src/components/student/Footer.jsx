import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 md:px-36 text-left w-full mt-10">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">

        {/* Logo + Description */}
        <div className="flex flex-col md:items-start items-center w-full">
          <div 
            onClick={() => navigate('/')} 
            className="flex items-center space-x-2 cursor-pointer"
          >
            <img 
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACUCAMAAACp1UvlAAAAZlBMVEX///8AAAD8/PwEBARra2tdXV3Ozs7Dw8Ph4eFGRkbv7+/W1tb4+Pjq6ur19fXc3Nynp6ehoaFwcHA4ODhWVla7u7utra0TExO1tbUwMDApKSmRkZFPT08hISGKioqYmJh9fX0/Pz+iErdmAAAEQElEQVR4nO2b6XqqMBBAIez7vijK8v4v2UwgSK1RKwH8Med+7bVV4TgMk0mgioIgCIIgCIIgCIIgCIIgCCIZMn8nx4r8gig+EyLfpTXahF9nRSF2afSWq3yNGtMIvT5TVbVy6uhoH4CMsYk6R+Vc06ODNu2aWP1JXVLlnX2oFVFI6JUVuGj03wR7kFrBgRELivR6cxkfadPjvPMOMrMbp1KfcNaLfYXgEAa1/syJq3WePw8CO4TPay6vlLTx6zyennt4BYlxl1QPvTT+iqz3wo2VKFY7vHEAJ7VJ/aqXm5qRoMyfprqYUwuZJlWG521wX0D/iV7b8wghRWwcAZP8Oh2eT8WqoY3GTyrLzLWMeesfazGG0palRbxkttLWWI3vHVpzZaaxD+bW+oepLiZP2Oi5ItfMJpMtxTj31sdSdKwxINXXJdQfps1VU9D+baX4zaqy8EpMPbcfFlvfrrNpS5q0qPEtZWW0Jv299DRvcL2SOp3R59Rb4aSwUzJyJGnNG3G6lVYjhnpJZUhNGEWwdlY+vt9QUyV6v4t4ytCOoRpL17rKb6g6/R7EfC6mfXxQsyRYZfLIi346s5+L7D/HI3h11ptyO1bqxTv0KPm0/J+6iEhupsd40Q36tFP3zQ/GgGtu0VoVuXJbfPBiGzQz+NBK1DivVRY4kOuu1auSp208vxSTJQl9YMfjdEgctdu54cS0Sw1jiLK1nRclgx0pUT+IIzT7ZlDXfW8qfxt6sT1mLUzxg0R0OLmWA+sn7jQB1raOF1AZNT0HQis9C8XOaRHSE3js37St43Xj0kRQOLrHQRsaKAuWzr213bxoSTKgULrFvCQwp5UD0XS7+2WVnbwgLAnMbjxWOPgQ4LTmWBb+sJ8Xteg9WPONc/4zmIasAf9TRfb0ApUigMFTP6kn3YKca6+PX7izF820BnriqIxgsUDcq+3uBWuDFkwi7DKrxMPAAV6UIbZ6dgCFPZB0L4M89eKDIVsi1MStmVyv8KIOL7z4PI457eUVDOp1nOm5cdfn93vVhD/8euLSd7HMJpqeZnQCySbGrGkNgyjOTxWP0xtUp0vsBSGZFvikYdJkdu9/F6fZO9MPLUvjW1cvV8yie79dJONb9u06famV1vbdEoREsUIVZaxbGk+k8vJPPkk9jjHdRyl4LrR0dbEevsCwtl6zb+leevHTnvG7m2GlIpc8VXwAgfFOFz5LY1Zc7rSGOuRPbocPOWSIvaDTXwzVVEuH9oJsfceCD9HIxec4+3V962wqUS5KhiRt23aEPF88Lvj10areR2vi5RHxphVKc79L7uStBY+YaSUyLwA9560MpuoN1BPpo+B6aN+RHXh/gphObY9WeABR3LPcBksKUPjj8MtSC4D1xKMdEARBEARBEARBEARBEARBEARBEAT5csjif7K4iet2DRSuzBN+y8Di5oHFTRe397z5txQ/EoUuzIuOrrkAAAAASUVORK5CYII="
              alt="EduNexus Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-2xl lg:text-3xl font-bold text-[#2563EB]">
              Edu<span className="text-[#10B981]">Nexus</span>
            </span>
          </div>

          <p className="mt-6 text-center md:text-left text-sm text-white/80">
            EduNexus is your gateway to quality learning — explore, grow, and succeed in your educational journey with us.
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-white mb-5">Company</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="hidden md:flex flex-col items-start w-full">
          <h2 className="font-semibold text-white mb-5">Subscribe to our newsletter</h2>
          <p className="text-sm text-white/80">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex items-center gap-2 pt-4">
            <input 
              className="border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm" 
              type="email" 
              placeholder="Enter your email" 
            />
            <button className="bg-blue-600 w-24 h-9 text-white rounded">Subscribe</button>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <p className="py-4 text-center text-xs md:text-sm text-white/60">
        © {new Date().getFullYear()} EduNexus. Crafted with ❤️ by Paridhi Mittal
      </p>
    </footer>
  );
};

export default Footer;
