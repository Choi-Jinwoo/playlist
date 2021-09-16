import { useEffect, useState } from "react";

type UseModal = [boolean, () => void, () => void];

const useModal = (defaultOpen: boolean, wrapperClassName?: string): UseModal => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleOpen = () => {
    setIsOpen(true);
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen || wrapperClassName === null) return;

    const handleDocumentClicked = (e: MouseEvent) => {
      const closestElement = (e.target as HTMLElement).closest(`.${wrapperClassName}`);
      if (closestElement === null) {
        handleClose();
      }
    }

    document.addEventListener('click', handleDocumentClicked);

    return () => {
      document.removeEventListener('click', handleDocumentClicked);
    }
  }, [isOpen])

  return [isOpen, handleOpen, handleClose];
}

export default useModal;