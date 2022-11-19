import { Box, Button, Menu, MenuItem } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";

import BarChart from "./BarChart";

import { IconClock } from "../Shared";

import mocks from "../../constants/mock.json";

const FunnelPreview: FunctionComponent = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [dayFilters, setDayFilters] = useState<number>(1);
  const [endDate, setEndDate] = useState<string>();
  const [startDate, setStartDate] = useState<string>();

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
    console.log("end", date.valueOf());
    date.setDate(date.getDate() - dayFilters);
    console.log("start", date.valueOf());
  }, [dayFilters]);

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
            {" "}
            <Button
              className="w-24 px-2 py-1 space-x-1 border"
              variant="outlined"
              onClick={handleClick}
            >
              <IconClock className="w-4 h-4" />
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
        <BarChart
          eventNameData={["deposit", "swap", "deposit"]}
          eventScoreData={mocks.data}
        />
      </div>
    </Box>
  );
};

export default FunnelPreview;
