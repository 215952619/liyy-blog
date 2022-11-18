import { onMounted } from "vue";
import nprogress from "nprogress";

interface ProgressEvent {
  open: () => void;
  close: () => void;
}
export const useProgress: () => ProgressEvent = () => {
  return {
    open: () => {
      onMounted(() => {
        nprogress.start();
      });
    },
    close: () => {
      onMounted(() => {
        nprogress.done();
      });
    },
  };
};
