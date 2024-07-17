import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { colors } from "../../constants/colors";
import moment from "moment";

const VideoCard = ({ video }) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "360px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <CardMedia
        image={video?.snippet?.thumbnails?.high?.url}
        alt={video?.title}
        sx={{
          width: { xs: "100%", sm: "360px", md: "320px" },
          height: "180px",
        }}
      />
      <CardContent
        sx={{
          background: colors.primary,
          height: "200px",
          position: "relative",
        }}
      >
        <>
          <Typography sx={{ opacity: 0.4 }} my={"5px"}>
            {moment(video?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Typography variant="subtitle1" fontWeight={"bold "}>
            {video?.snippet?.title.slice(0, 50)}
          </Typography>
          <Typography variant="subtitle2" sx={{ opacity: 0.6 }}>
            {video?.snippet?.description.slice(0, 70)}
          </Typography>
        </>
        <>
          <Stack
            direction={"row"}
            position={"absolute"}
            bottom={"10px"}
            alignItems={"center"}
            gap={"5px"}
          >
            <Avatar
              src={video?.snippet?.thumbnails?.high?.url}
              alt={video?.title}
            />
            <Typography variant="subtitle2" color={"gray"}>
              {video?.snippet?.channelTitle}
            </Typography>
          </Stack>
        </>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
