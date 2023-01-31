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
    <Box
      sx={{ borderLeft: 1 }}
      className="w-full h-full text-center border-grey-300"
    >
      <div className="grid w-full h-full grid-cols-1 gap-4 p-4 overflow-y-auto justify-items-center lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-4">
        <p>History</p>
        {funnels &&
          funnels.map((item: any) => (
            <Button
              key={item.id}
              sx={{ border: 1, borderColor: "blue" }}
              className="flex justify-center w-full max-w-3xl h-96 hover:bg-blue-200"
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
      </div>
    </Box>
  );
};

export default PreviewHistory;
