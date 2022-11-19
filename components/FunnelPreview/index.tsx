import { FunctionComponent, useEffect, useState } from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";

import { IconClock } from "../Shared";
import BarChart from "./BarChart";

import { FunnelPreviewProps } from "./types";

const FunnelPreview: FunctionComponent<FunnelPreviewProps> = ({
  stackLabel,
  stackData,
  setEndTimeStamp,
  setStartTimeStamp,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [dayFilters, setDayFilters] = useState<number>(1);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelectDays = (day: number) => {
    setDayFilters(day);
    setAnchorEl(null);
  };

  useEffect(() => {
    const date = new Date();
    setEndTimeStamp(date.valueOf());
    date.setDate(date.getDate() - dayFilters);
    setStartTimeStamp(date.valueOf());
  }, [dayFilters, setEndTimeStamp, setStartTimeStamp]);

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{ borderLeft: 1 }}
      className="flex flex-col w-full h-full border-grey-300"
    >
      <Box
        sx={{ borderBottom: 1 }}
        className="flex items-center justify-between w-full h-16 p-4 border-grey-300"
      >
        <div className="flex flex-row space-x-2">
          <div>
            <Button
              className="w-24 px-2 py-1 space-x-1 border text-gemini-500"
              variant="outlined"
              onClick={handleClick}
            >
              <IconClock className="w-3.5 h-3.5" />
              <p className="w-6">{dayFilters}</p>
              <p>Days</p>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
              <MenuItem
                onClick={() => handleSelectDays(1)}
                className="text-gemini-500"
              >
                1 Days
              </MenuItem>
              <MenuItem
                onClick={() => handleSelectDays(3)}
                className="text-gemini-500"
              >
                3 Days
              </MenuItem>
              <MenuItem
                onClick={() => handleSelectDays(7)}
                className="text-gemini-500"
              >
                7 Days
              </MenuItem>
            </Menu>
          </div>
        </div>
      </Box>
      <div className="h-full bg-gray-50">
        <BarChart eventNameData={stackLabel} eventScoreData={stackData} />
      </div>
    </Box>
  );
};

export default FunnelPreview;
