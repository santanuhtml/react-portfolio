import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function CustomModal({ modalTitle = "Modal Title" }) {
  const [visible, setVisible] = useState(() => {
    // Show modal if not 'false', only contain true
    const isModalVisible = localStorage.getItem("customModalSet") !== "false";
    // Set overflow: hidden on body if modal is visible
    if (isModalVisible) {
      document.body.style.overflow = "hidden";
    }
    return isModalVisible;
  });

  const modalClose = () => {
    localStorage.setItem("customModalSet", "false");
    setVisible(false);
    // Reset body overflow when modal is closed
    document.body.style.overflow = "auto";
  };

  if (!visible) return null; // Hide modal if not visible

  return (
    <div className="absolute inset-0 flex justify-center items-center w-full h-screen bg-black/50">
      <div className="relative h-[36%] w-[80%] max-w-[600px] flex text-center p-8 items-center justify-center bg-white border border-gray-300">
        <h3 className="text-3xl font-bold">{modalTitle}</h3>
        <RxCross2
          onClick={modalClose}
          className="absolute top-4 right-4 cursor-pointer"
          size={28}
        />
      </div>
    </div>
  );
}

export default CustomModal;
