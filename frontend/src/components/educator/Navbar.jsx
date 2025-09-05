import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { UserButton, useUser } from '@clerk/clerk-react';

const Navbar = ({ bgColor }) => {
  const { isEducator } = useContext(AppContext);
  const { user } = useUser();
  const navigate = useNavigate(); // ✅ define navigate here

  return isEducator && user && (
    <div className={`flex items-center justify-between px-4 md:px-8 border-b border-gray-500 py-3 ${bgColor}`}>
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

      <div className="flex items-center gap-5 text-gray-500 relative">
        <p>Hi! {user.fullName}</p>
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
