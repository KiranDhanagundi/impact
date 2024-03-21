import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const ToastMessage = () => {
  const toastState = useSelector((state) => state?.toast);
  const toast = useToast();

  useEffect(() => {
    // Check if toasts is not null before accessing its properties
    if (toastState?.toast != null) {
      toast({
        title: toastState?.toast?.title,
        description: toastState?.toast?.description,
        status: toastState?.toast?.status,
        duration: 3000,
        isClosable: true,
      });
    }
  }, [toastState]); // Only re-run the effect when toastState changes

  return null;
};

export default ToastMessage;
