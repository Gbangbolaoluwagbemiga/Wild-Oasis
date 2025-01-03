import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

function useSetting() {
  const {
    isLoading,
    error,
    data: settingsData,
  } = useQuery({
    queryKey: ["setting"],
    queryFn: getSettings,
  });

  return { isLoading, error, settingsData };
}

export default useSetting;
