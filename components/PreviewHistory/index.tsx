import { Box, Button } from "@mui/material";

import { IPreviewHistory } from "./type";

import BarChart from "../FunnelPreview/BarChart";
import { useFunnels } from "../../state/funnels/hook";

const PreviewHistory: React.FC<IPreviewHistory> = ({
  setStackDataPreview,
  setStackLabelPreview,
  setIsOpenFunnel,
}) => {
  const {
    funnels,
    reducers: { handleSelectedFunnel },
  } = useFunnels();

  return (
    <Box className="grid justify-center w-full h-full grid-cols-1 gap-2 p-2 py-2 overflow-y-auto text-center border-grey-300 lg:grid-cols-1 xl:grid-cols-2">
      {funnels &&
        funnels.map((item: any) => (
          <Button
            key={item.id}
            className="flex justify-center w-full max-w-xl p-1 px-1 rounded-md h-96 "
            variant="outlined"
            onClick={() => {
              setStackDataPreview(item.data);
              setStackLabelPreview(item.event);
              setIsOpenFunnel(true);
              handleSelectedFunnel(
                item.id,
                item.eventDetail,
                item.event,
                item.data
              );
            }}
          >
            <BarChart eventNameData={item.event} eventScoreData={item.data} />
          </Button>
        ))}
    </Box>
  );
};

export default PreviewHistory;
